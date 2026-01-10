# Task Management Application (React + Redux Toolkit)

A simple task management application built using **React**, **Redux Toolkit**, and **RTK Query** to demonstrate proper state management, API integration, caching, and mutations.

This project focuses on implementing modern Redux patterns and handling server state efficiently using RTK Query.

---

## 🚀 Tech Stack

- React (JavaScript)
- Redux Toolkit
- RTK Query
- Vite
- VS Code

---

## 📌 Features

### Authentication (Basic)
- Simple login flow
- Authentication state managed using Redux Toolkit

### Task Management
- Fetch tasks from an API
- Add new tasks
- Update task status
- Delete tasks
- All API interactions handled using RTK Query

### State Management
- Global state managed using Redux Toolkit slices
- RTK Query used for server state (queries & mutations)
- Automatic cache invalidation and refetching

---

## 🧠 Key Concepts Covered

- **Redux Toolkit** (`configureStore`, `createSlice`)
- **Global state management**
- **RTK Query** (`createApi`, `fetchBaseQuery`)
- **Queries vs Mutations**
- **UI States:** Loading, error, and success handling
- **Caching:** API caching and automated cache invalidation

---

## 📂 Project Structure

```text
src/
├─ app/
│  └─ store.js
├─ features/
│  ├─ auth/
│  │  └─ authSlice.js
│  └─ tasks/
│     └─ tasksApi.js
├─ components/
│  ├─ Login.jsx
│  └─ Tasks.jsx
├─ App.jsx
└─ main.jsx

```

---

## ▶️ Getting Started

### 1. Install dependencies

```bash
npm install

```

### 2. Run the app locally

```bash
npm run dev

```

### 3. Open in browser

Navigate to the following URL to view the application:

`http://localhost:5173`

---

## 📖 Notes

> * This project is intended for **learning and demonstration purposes**.
> * The focus is on Redux Toolkit and RTK Query usage rather than UI styling.
> * APIs are used for demonstration and may be replaced with real backends.
> 
> 

---

## 📄 License

This project is open for learning and reference purposes.
