import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "./theme";

function ChangeColor() {
  const [color, setColor] = useState("");
  const colorDispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button
        onClick={() => {
          colorDispatch(changeColor(color));
        }}
      >
        Change Color
      </button>
    </>
  );
}

export default ChangeColor;
