import { taskProps } from "../../data/taskProps";
import "../../styles/ListBox.css";
import ListBoxItem from "./ListBoxItem";

type ListBoxProps = {
  taskList: taskProps[];
};

function Listbox({ taskList }: ListBoxProps) {
  return (
    <div className="listBox-root">
      {taskList.map((data)=>{
        return(
            <ListBoxItem taskname={data.taskname} notes={data.notes} completed = {data.completed}/>
        )
      })}
    </div>
  );
}

export default Listbox;
