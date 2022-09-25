import "../../styles/TodoList.css";
import InputBox from "./InputBox";
import Listbox from "./ListBox";
import { taskList1 } from "../../testData";
import { useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

function TodoList() {
  const [displayListBox, setdisplayListBox] = useState(false);
  const [taskList, settaskList] = useState(taskList1);
  const [inputQuery, setinputQuery] = useState("");

  const handleClickOutside = () => {
    setdisplayListBox(false);
    setinputQuery("");
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <div className="todoList-root" ref = {ref}>
      <InputBox
        displayListBox={displayListBox}
        setdisplayListBox={setdisplayListBox}
        inputQuery={inputQuery}
        setinputQuery={setinputQuery}
        taskList={taskList}
        settaskList={settaskList}
      />
      {displayListBox ? <Listbox taskList={taskList} settaskList={settaskList}/> : <div />}
    </div>
  );
}

export default TodoList;
