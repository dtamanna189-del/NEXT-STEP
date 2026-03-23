# 🚀 NEXT-STEP – Task Management Web App

NEXT-STEP is a simple and modern task management web application that helps users organize their daily tasks, track progress, and stay productive.

---

## ✨ Features

* 🔐 User Authentication (Register & Login using Firebase)
* ✅ Add, delete, and manage tasks
* 📊 Progress tracking (percentage-based)
* ☁️ Cloud storage using Firebase Firestore
* 🎯 User-specific task data
* 💡 Clean and minimal UI
* 📱 Responsive design

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Firebase (Authentication + Firestore)
* **Hosting:** Localhost (can be deployed)

---

## 📂 Project Structure

```
NEXT-STEP/
│
├── index.html          # Landing page
├── login.html          # Login page
├── register.html       # Register page
├── dashboard.html      # Task dashboard
│
├── css/
│   └── style.css       # Styling
│
├── js/
│   ├── firebase.js     # Firebase config
│   ├── auth.js         # Authentication logic
│   └── app.js          # Task management logic
│
└── README.md
```

---

## 🔥 How It Works

1. User registers or logs in
2. Firebase Authentication handles login securely
3. Tasks are stored in Firestore database
4. Each user sees only their own tasks
5. Progress updates dynamically based on completed tasks

---

## ⚙️ Setup Instructions

1. Clone the repository:

```
git clone https://github.com/your-username/next-step.git
```

2. Open the project folder

3. Setup Firebase:

* Go to Firebase Console
* Create a project
* Enable Authentication (Email/Password)
* Enable Firestore Database
* Copy config into `firebase.js`

4. Run project:

* Open `index.html` using Live Server

---

## 🔐 Firebase Configuration Example

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};
```

---

## 📸 Screenshots

* Landing Page
*  <img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/3fc0f33f-b05e-403d-a1bc-ee3031f49320" />
*  <img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/d0d89e54-ade1-4fc6-91c3-35f179867d13" />

* Login/Register Page
* <img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/c912d608-117f-48f6-9871-cc45f93eb99c" />

* Dashboard with Tasks
* <img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/460ca4e2-5477-4582-b1c1-205e1a5273e6" />


*(You can add screenshots here later)*

---
## website link ##
https://dtamanna189-del.github.io/NEXT-STEP/

## 🚀 Future Improvements

* 🌙 Dark mode
* 📱 Mobile optimization
* 🔔 Notifications
* 🧠 Smart task suggestions
* 📅 Deadline & reminders

---

## 👨‍💻 Author

**Tamanna Dash and Anwesha Subudhi**

---

## 💬 Note

This project is a simple application that helps users manage and organize daily tasks efficiently while demonstrating basic programming concepts and improving productivity.

---

⭐ If you like this project, give it a star on GitHub!
