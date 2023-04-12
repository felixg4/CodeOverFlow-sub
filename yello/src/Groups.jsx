import React, { useState } from "react"
import Group from "./Group"
import './App.css'

function Groups() {
    const [groups, setGroups] = useState([])
    return (
        <div className="Group">
            {groups.map(g => <li><Group title={g} /></li>)}
            <button onClick={() => setGroups([...groups, prompt("Enter new group name:")])}>+</button>
        </div>
    )
}

export default Groups