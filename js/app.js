import { db, auth } from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const taskList = document.getElementById("taskList");

// 🔐 Check login
onAuthStateChanged(auth, (user) => {
  if (user) {
    loadTasks();
    document.getElementById("userEmail").innerText = user.email;
  } else {
    window.location.href = "login.html";
  }
});

// ➕ Add Task
window.addTask = async () => {
  const input = document.getElementById("taskInput");
  const text = input.value;

  if (!text) return;

  await addDoc(collection(db, "tasks"), {
    userId: auth.currentUser.uid,
    task: text,
    completed: false
  });

  input.value = "";
  loadTasks();
};

// 📥 Load Tasks
async function loadTasks() {
  const querySnapshot = await getDocs(collection(db, "tasks"));

  taskList.innerHTML = "";

  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data();

    if (data.userId === auth.currentUser.uid) {
      taskList.innerHTML += `
        <div class="task-card">
          <div class="task-left">
            <input type="checkbox"
              ${data.completed ? "checked" : ""}
              onchange="toggleTask('${docSnap.id}', ${data.completed})">

            <span class="${data.completed ? "completed" : ""}">
              ${data.task}
            </span>
          </div>

          <button class="delete-btn"
            onclick="deleteTask('${docSnap.id}')">
            Delete
          </button>
        </div>
      `;
    }
  });

  updateProgress();
}

// 🔄 Toggle
window.toggleTask = async (id, status) => {
  const ref = doc(db, "tasks", id);
  await updateDoc(ref, { completed: !status });
  loadTasks();
};

// 🗑 Delete
window.deleteTask = async (id) => {
  await deleteDoc(doc(db, "tasks", id));
  loadTasks();
};

// 📊 Progress
function updateProgress() {
  const tasks = document.querySelectorAll(".task-card");
  const total = tasks.length;
  const done = document.querySelectorAll(".completed").length;

  const percent = total ? (done / total) * 100 : 0;

  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("progressText").innerText =
    Math.round(percent) + "% completed";
}