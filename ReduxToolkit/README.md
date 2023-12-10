# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Redux Toolkit

In Redux, the store is a **central bucket that holds the global state of an application**. It's made up of an object tree that contains the application's state, actions, and reducers. **The store is considered the single source of truth for the application's state**.

Redux Toolkit is a package that simplifies the Redux workflow. It provides utilities for common tasks like creating reducers and actions.

To create a store with Redux Toolkit, you can use the **configureStore()** function. This function automatically generates a root reducer by combining all the reducers defined in your application.

**Here are some steps for using Redux Toolkit:**

- Install the Redux Toolkit

```bash
* npm install @reduxjs/toolkit
* npm install react-redux
```

- Create and initialize the store: Create a **app** folder in the **src** directory and create a **store.js** file in it.
- Provide a store in your React app

```bash
import { configureStore } from "@reduxjs/toolkit"
```

- Write reducers and actions in Slice
- Create **features** folder, then **Name of Project** in new folder and then create **projectName.js** file.

```bash
import { createSlice, nanoid } from "@reduxjs/toolkit";
```

- import reducer to -

```bash
import todoReducer from "../features/todo/todoSlice"
```

- Add the dispatch function in the UI