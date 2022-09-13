import { Dispatch, SetStateAction } from "react";
import "../../styles/InputBox.css";

type InputBoxProps = {
  displayListBox: boolean;
  setdisplayListBox: Dispatch<SetStateAction<boolean>>;
};

function InputBox({ displayListBox, setdisplayListBox }: InputBoxProps) {
  return (
    <div className="inputbox-root">
      <input className="inputtextbox" type="text" />
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
