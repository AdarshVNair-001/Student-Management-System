# Student-Management-System
A student management system using .NET and angular framework

---

## ✨ Features

- ➕ Add new students
- 📋 View all student records
- 🔍 Search students by ID
- ❌ Delete student records
- 🔄 Real-time communication with REST APIs

---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|------------|
| **Frontend** | Angular, TypeScript, HTML5, CSS3 |
| **Backend** | ASP.NET Core Web API (C#) |
| **Database** | MySQL |
| **HTTP Client** | Angular HttpClient |
| **Database Driver** | MySql.Data |

---

# 🔄 Request Flow

```
User
   │
   ▼
Angular Component
   │
Form Validation
   │
   ▼
Student Service
   │
HttpClient Request
   │
   ▼
ASP.NET Core API
   │
Controller
   │
Parameterized SQL Query
   │
   ▼
MySQL Database
   │
Returns Response
   │
   ▼
Angular Updates UI
```

---

# ⚙️ Installation & Setup

## Prerequisites

Before running the project, ensure the following are installed:

- Node.js
- Angular CLI

```bash
npm install -g @angular/cli
```

# 🗄️ Database Setup

Create the database table:

```sql
CREATE TABLE student1(
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    branch VARCHAR(100)
);
```


# 💻 Frontend Setup

Navigate to the frontend directory.

```bash
cd angular-frontend
```

Install dependencies.

```bash
npm install
```

Start the Angular development server.

```bash
ng serve
```

Frontend will be available at:

```
http://localhost:4200
```

---


# 👨‍💻 Author

**Adarsh V Nair**

- GitHub: https://github.com/AdarshVNair-001
- Email: adarshvnair5000@gmail.com

---
