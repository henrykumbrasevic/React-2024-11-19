import { useState } from "react";

function loggedIn() {
  //     const data = {
  //     person: {
  //       firstname: "John",
  //       Lastname: "Johnson",
  //       isLoggedIn: true,
  //     },
  //   };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [counter, increaseByThree] = useState(0);
  const [items, setItems] = useState([]);

  const Toggle = () => {
    setIsLoggedIn((prev) => !prev);
  };
  const Increment = () => {
    increaseByThree((counter) => counter + 3);
  };
  const addItem = () => {
    const newItem = `item ${items.length + 1}`;
    setItems([...items, newItem]);
  };
  const removeItem = (itemIndex) => {
    const filteredArray = items.filter((item, index) => index !== itemIndex);
    setItems(filteredArray);
  };

  return (
    <>
      <div>{isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in</p>}</div>
      <button onClick={Toggle}>Toggle</button>
      <button onClick={Increment}>Counter: {counter}</button>
      <button onClick={addItem}>Add item</button>
      
      {items.map((item, index) => (
        <div key={index}>
        <p>{item}</p>
        <button onClick={()=>removeItem(index)}>Remove items</button>
        </div>
        
      ))}
    </>
  );
}
export default loggedIn;
