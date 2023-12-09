import React from "react";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import rootReducers from "./services/reducers/RootReducers";
import "./index.css";

const store = createStore(rootReducers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
