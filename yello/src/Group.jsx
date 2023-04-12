import React, {useState} from "react";
import Item from "./Item";

function Group({title}) {
    const [items, setItems] = useState([])
    return (
        <div>
            <h2>{title}</h2>
            {items.map(i => <Item content={i}/>)}
            <button onClick={() => setItems([...items, prompt("Enter new item:")])}>add item</button>
        </div>
    )
}

export default Group