import React from "react";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";
import "./index.css";
import { createRoot } from "react-dom/client";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Implement React Application", important: true, id: 2 },
    { label: "Make notes from your stud", important: false, id: 3 },
    { label: "Do not drink alchohol", important: false, id: 4 },
  ];
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
      <ItemStatusFilter />
    </div>
  );
};
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
