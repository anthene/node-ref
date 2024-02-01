import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import List from "./List"

const rootElement = document.getElementById("root")!
const root = ReactDOM.createRoot(rootElement)

root.render(
  // <React.StrictMode>
  <List />
  // </React.StrictMode>
)
