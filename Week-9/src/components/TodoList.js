import React, { useState } from "react";

export default function TodoList(props) {

    const [propsData, setPropsData] = useState(props);

    function updateTodo() {
        setPropsData(!propsData.isCompleted)
    }
    return (
        <div className="todo--item">
            <h3 onClick={updateTodo} style={{ textDecoration: propsData.isCompleted ? "line-through" : "" }}>{propsData.text}</h3>
        </div>
    );

}