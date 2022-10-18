import { useState } from "react";
import { taskProps } from "../../data/taskProps";
import "../../styles/ListBox.css";
import ListBoxItem from "./ListBoxItem";
import ListBoxToggle from "./ListBoxToggle";

type ListBoxProps = {
  taskList: taskProps[];
  settaskList: React.Dispatch<
    React.SetStateAction<
      taskProps[]
    >
  >;
};

function Listbox({ taskList, settaskList }: ListBoxProps) {
  const [toggleDisplay, setToggleDisplay] = useState("All");

  return (
    <div className="listBox-root">
      {taskList.map((data) => {
        if (toggleDisplay === "All") {
          return (
            <ListBoxItem
              taskList={taskList}
              settaskList={settaskList}
              taskname={data.taskname}
              notes={data.notes}
              completed={data.completed}
            />
          );
        } else if (toggleDisplay === "Complete") {
          if (data.completed === true) {
            return (
              <ListBoxItem
                taskList={taskList}
                settaskList={settaskList}
                taskname={data.taskname}
                notes={data.notes}
                completed={data.completed}
              />
            );
          }
        } else if (toggleDisplay === "Incomplete") {
          if (data.completed === false) {
            return (
              <ListBoxItem
                taskList={taskList}
                settaskList={settaskList}
                taskname={data.taskname}
                notes={data.notes}
                completed={data.completed}
              />
            );
          }
        }
      })}
      <ListBoxToggle setToggleDisplay={setToggleDisplay} />
    </div>
  );
}

export default Listbox;
