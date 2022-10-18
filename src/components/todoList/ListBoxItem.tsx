import "../../styles/ListBox.css";
import { taskProps } from "../../data/taskProps";

type ListBoxItemProps = {
  taskList: taskProps[];
  settaskList: React.Dispatch<
    React.SetStateAction<
     taskProps[]
    >
  >;
  taskname: string;
  notes: string;
  completed: boolean;
};

function ListBoxItem({
  taskList,
  taskname,
  notes,
  completed,
  settaskList,
}: ListBoxItemProps) {
  return (
    <div className="listBoxItem-root">
      <div className="listBoxItem-task">
        <div>{taskname}</div>
      </div>
      <div className="listBoxItem-notes">
        <div>{notes}</div>
      </div>
      <div className="listBoxItem-completed">
        <div>
          {completed ? (
            "done"
          ) : (
            <button
              onClick={() => {
                const index = taskList.findIndex(
                  (obj) => obj.taskname === taskname
                );
                const newtaskList = [...taskList];
                newtaskList[index].completed = !newtaskList[index].completed;
                settaskList(newtaskList)
              }}
            >
              X
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListBoxItem;
