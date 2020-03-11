import React, { useState, useEffect } from "react"
import SameListSolution from "./SameListSolution"

function App() {
  const itemsText = [
    { text: 10 },
    { text: 20 },
    { text: 30 },
    { text: 40 },
    { text: 94 },
  ];

  const [items, setItems] = useState([...itemsText]);

  const handleClick = index =>
    alert(`You have clicked on ${index + 1} items of the list`);

  const handleSetItem  = () => setItems(items.concat({ text: 999 }))

  useEffect(() => {
    const addText = setTimeout(handleSetItem, 10000)
    return () => clearTimeout(addText)
  }, [])

  return (
    <div>
      <SameListSolution items={items} onClick={handleClick} />
    </div>
  );
}

export default App;
