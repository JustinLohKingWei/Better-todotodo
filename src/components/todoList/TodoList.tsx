import "../../styles/TodoList.css";
import InputBox from "./InputBox";
import Listbox from "./ListBox";
import { taskList1 } from "../../testData";
import { useState } from "react";

function TodoList() {
  const [displayListBox, setdisplayListBox] = useState(false);
  const [taskList,settaskList] = useState(taskList1);
  const[inputQuery,setinputQuery]= useState("")

  return (
    <div className="todoList-root">
      <InputBox
        displayListBox={displayListBox}
        setdisplayListBox={setdisplayListBox}
        inputQuery = {inputQuery}
        setinputQuery = {setinputQuery}
        taskList = {taskList}
        settaskList = {settaskList}
      />
      {inputQuery}
      {displayListBox ? <Listbox taskList={taskList} /> : <div />}
    </div>
  );
}

export default TodoList;
