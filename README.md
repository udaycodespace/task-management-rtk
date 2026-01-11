# Task Management Application (Redux Toolkit & RTK Query)

A professional React application demonstrating centralized state management and automated API synchronization. Developed as part of the internship learning phase at **Inkers Technology Private Limited**.

## 🎯 Project Objectives & Intern POV
The objective was to move beyond local component state and implement a "Single Source of Truth" architecture. My approach involved breaking down the high-level requirements into **10 Sequential Issues**, which I solved stage-by-stage to ensure code quality and cache integrity.

---

## 🛠 Tech Stack
- **Core:** React (Vite)
- **State:** Redux Toolkit (Slices & Middleware)
- **Data:** RTK Query (Caching & Mutations)
- **API:** JSONPlaceholder (REST)

---

## 🏗 Technical Justification (The "Why")
To meet the expectations of my mentors, I implemented the following architectural patterns:
- **RTK Query over `useEffect`**: I replaced manual data fetching with RTK Query hooks to eliminate the "loading/error/data" boilerplate and ensure efficient server-state management.
- **Tag-Based Invalidation**: I used `providesTags` and `invalidatesTags` to solve the problem of manual UI refreshing. This ensures the app is "reactive" to server changes.
- **Global Auth Store**: Authentication is handled in a dedicated Redux Slice, ensuring that `isAuthenticated` state is accessible to all components without prop-drilling.

---

## 📈 The 10-Issue Roadmap (Stage-by-Stage Solution)

### Phase 1: Foundation & Auth
* **Issue #1: Project Initialization** - Set up the Vite environment and professional folder structure.
* **Issue #2: Redux Store Setup** - Configured `store.js` and integrated middleware for RTK Query.
* **Issue #3: Auth Slice & Login Flow** - Created `authSlice.js`. *Solved by implementing conditional rendering to protect task data.*

### Phase 2: RTK Query Integration
* **Issue #4: API Base Setup** - Initialized `tasksApi.js` using `createApi` and `fetchBaseQuery`.
* **Issue #5: Fetch Query** - Implemented `getTasks`. *Solved by removing local state dependency for API data.*
* **Issue #6: Add & Delete Mutations** - Defined `addTask` and `deleteTask` with proper HTTP methods.
* **Issue #7: Update Mutation** - Implemented `updateTask` to toggle completion status.

### Phase 3: Cache & UI Optimization
* **Issue #8: UI Feedback States** - Integrated `isLoading` and `isError`. *Solved by providing real-time feedback during network requests.*
* **Issue #9: Cache Invalidation (The Magic)** - Implemented `tagTypes`. *Solved by ensuring the UI automatically refetches data after any mutation.*
* **Issue #10: Final Review & Documentation** - Finalized the README and Git workflow to demonstrate clear ownership.

---

## 📂 Project Structure
```text
task-management-rtk/
├── src/
│   ├── app/ 
│   │   └── store.js         # Centralized Store
│   ├── components/ 
│   │   └── Tasks.jsx        # UI with Mutation Logic
│   ├── features/
│   │   ├── auth/            # authSlice.js (Global State)
│   │   └── tasks/           # tasksApi.js (API & Caching)
│   └── main.jsx             # Provider Wrapper
└── .gitignore               # Professional Git Exclusions

```

---

## 🔮 Future Enhancements

* **Persistence**: Integrating `redux-persist` to save the Auth state across browser refreshes.
* **Real Backend**: Moving from mock APIs to a database for true data persistence.
* **Optimistic Updates**: Updating the UI state *before* the server response to maximize responsiveness.

---

### **SOMAPURAM UDAY**

**Intern @ Inkers Technology Private Limited**
