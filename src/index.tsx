import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "App";
import { GlobalStyles } from "ui";
import { store, persistor } from "store";
import { Provider } from "react-redux";
import { Title } from "components";
import { PersistGate } from "redux-persist/integration/react";
import "./firebase";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Title text="Loading..." />}>
      <GlobalStyles />
      <App />
    </PersistGate>
  </Provider>,
);
