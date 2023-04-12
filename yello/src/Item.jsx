import React, {useState} from "react";

function Item({content}) {
    const [text, setText] = useState(content)
    return (
        <div>{text}</div>
    )
}

export default Item;