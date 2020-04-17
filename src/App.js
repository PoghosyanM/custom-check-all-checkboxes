import React from "react";
import SelectOptions from "./components/checkAll.component.";
import "./App.scss";

const data = {
  title: "Custom Select",
  initialValue: "All",
  isCheckedAll: false,
  id: 1,
  options: [
    { value: "First", id: 1, isChecked: false },
    { value: "Second", id: 2, isChecked: false },
    { value: "Third", id: 3, isChecked: false },
    { value: "Forth", id: 4, isChecked: false },
    { value: "Fifth", id: 5, isChecked: false },
  ],
};

function App() {
  return <SelectOptions data={data} />;
}

export default App;
