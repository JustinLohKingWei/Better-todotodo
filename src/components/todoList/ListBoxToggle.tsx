import { Dispatch, SetStateAction } from "react";

type ListBoxToggleProps = {
  setToggleDisplay: Dispatch<SetStateAction<string>>;
};

function ListBoxToggle({ setToggleDisplay }: ListBoxToggleProps) {
  return (
    <div>
      <button
        onClick={() => {
          setToggleDisplay("All");
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          setToggleDisplay("Complete");
        }}
      >
        Complete
      </button>
      <button
        onClick={() => {
          setToggleDisplay("Incomplete");
        }}
      >
        Incomplete
      </button>
    </div>
  );
}

export default ListBoxToggle;
