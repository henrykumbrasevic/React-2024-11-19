import { useState } from "react";

function addingItem() {
  const [items, setItems] = useState({});

  const addItem = (key) => {
    setItems({
      ...items,
      [key]: 30,
    });
  };
  return (
    <>
      <button onClick={() => addItem("x")}>Add Item</button>
    </>
  );
}
export default addingItem;
