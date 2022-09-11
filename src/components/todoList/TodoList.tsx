import "../../styles/TodoList.css";
import InputBox from "./InputBox";
import Listbox from "./ListBox";
import { taskList1 } from "../../testData";

function TodoList() {
  return (
    <div className="todoList-root">
      <InputBox/>
      <Listbox taskList={taskList1}/>
    </div>
  );
}

export default TodoList;
