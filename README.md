# 🎟️ Event Registration System

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

A modern **Event Registration System** with a dark-themed UI. Users can register their name and email, view all registrations, and export CSV files.

---

## ✨ Features

- 📝 **Register Users**: Enter Name and Email; date is recorded automatically.  
- 📋 **View Registrations**: View all registered users in a clean table.  
- 💾 **Export CSV**: Download all registrations as a CSV file.  
- 🔗 **Navigation**: Easy switch between Registration and View pages.  

---

## 🗂 Project Structure

- `index.html` — Main landing page
- `view.html` — View registrations page
- `server.js` — Node.js server handling requests
- `registrations.json` / `registeration.json` — JSON files for registration data
- `package.json` — Project metadata and dependencies

---

## 🖼 Screenshots

### Registration Page
![Registration Page](screenshots/registration.png)

### View Registrations Page
![View Registrations Page](screenshots/view.png)


---

## ⚙️ How to Use

1. Open `index.html` in a browser to register users.  
2. Open `view.html` to view registrations and export CSV.  
3. Optional backend for persistent storage (if implemented):
   - POST `/register` to save a user.  
   - GET `/registrations` to fetch all users.

---

## 🛠 Technologies Used

- HTML5 & CSS3  
- JavaScript (Vanilla)  
- Font Awesome (Icons)

---
