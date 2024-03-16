import { useCallback, useEffect, useState } from "react";
import Card from "./Card";

export default function ParentComp() {
  console.log("Parent component redered");
  const [random, setRandom] = useState(10);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const memoizedUpdateCount = useCallback(increment, [count]);

  // animation part
  useEffect(() => {
    const element = document.getElementById("parent");
    element?.classList.add("parent-flicker");
    console.log("Parent component redered");

    setTimeout(() => {
      element?.classList.remove("parent-flicker");
    }, 200);
  });

  return (
    <>
      <div id="parent">
        <Card count={count} updateCount={memoizedUpdateCount} />
        {random}
        <br />
        <button
          onClick={() => {
            setRandom(Math.floor(Math.random() * 100));
          }}
        >
          {" "}
          Update Parent to Cause Rerender
        </button>
      </div>
    </>
  );
}
