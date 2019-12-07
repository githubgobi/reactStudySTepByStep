import React from 'react';

function ToDo(props){
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onClick={()=> props.handleClick(props.item.id)}/>
            <p>{props.item.text}</p>
        </div>
    )
}
export default ToDo