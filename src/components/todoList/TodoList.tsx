import "../../styles/TodoList.css";
import InputBox from "./InputBox";
import Listbox from "./ListBox";
import { taskList1 } from "../../testData";
import { useState } from "react";

function TodoList() {
  const [displayListBox, setdisplayListBox] = useState(false);

  return (
    <div className="todoList-root">
      <InputBox
        displayListBox={displayListBox}
        setdisplayListBox={setdisplayListBox}
      />
      {displayListBox ? <Listbox taskList={taskList1} /> : <div />}
    </div>
  );
}

export default TodoList;
