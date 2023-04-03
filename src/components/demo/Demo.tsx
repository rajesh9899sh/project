import { useState, useRef, RefObject } from "react";
import Demo1 from "../demo1/Demo1";
import "./index.css";

const Demo = () => {
  const inputRef: RefObject<HTMLDivElement> = useRef(null);
  const [value, setValue] = useState("");

  const handleInput = () => {
    inputRef.current!.style.color = "red";
  };

  return (
    <div ref={inputRef} className="information">
      <button onClick={handleInput}>Change the color</button>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Demo1 value={value} />
    </div>
  );
};

export default Demo;
