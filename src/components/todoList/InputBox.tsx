import { Dispatch, SetStateAction } from "react";
import { taskProps } from "../../data/taskProps";
import "../../styles/InputBox.css";

type InputBoxProps = {
  displayListBox: boolean;
  setdisplayListBox: Dispatch<SetStateAction<boolean>>;
  inputQuery: string;
  setinputQuery: Dispatch<SetStateAction<string>>;
  taskList: taskProps[];
  settaskList: Dispatch<SetStateAction<taskProps[]>>;
};

function InputBox({
  displayListBox,
  setdisplayListBox,
  inputQuery,
  setinputQuery,
  taskList,
  settaskList,
}: InputBoxProps) {
  return (
    <div className="inputbox-root">
      <input
        className="inputtextbox"
        type="text"
        placeholder="What needs to be done?"
        value={inputQuery}
        onClick={() => {
          setdisplayListBox(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const newTaskItem: taskProps = {
              taskname: inputQuery,
              notes: " ",
              completed: false,
            };

            let taskListInstance = [...taskList];
            taskListInstance.push(newTaskItem);
            settaskList(taskListInstance);
          }
        }}
        onChange={(e) => {
          setinputQuery(e.target.value);
        }}
      />
      <input
        className="submitbutton"
        type="submit"
        value="Go"
        onClick={() => setdisplayListBox(!displayListBox)}
      />
    </div>
  );
}

export default InputBox;
