import { memo, useEffect } from "react";

interface Props {
  count: number;
  updateCount: () => void;
}

function Card({ count, updateCount }: Props) {
  console.log("Card component rendered");
  // animation part
  useEffect(() => {
    const element = document.getElementById("card");
    element?.classList.add("flicker");

    setTimeout(() => {
      element?.classList.remove("flicker");
      element?.classList.add("card-default");
    }, 200);
  });

  return (
    <div id="card" className="card-default">
      This is Card Component
      <br />
      current Count : {count}
      <button onClick={updateCount}>
        {" "}
        Update Count to Cause Rerender Child
      </button>
    </div>
  );
}

export default memo(Card);
