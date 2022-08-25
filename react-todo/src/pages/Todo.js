import React from "react";
const Todo=()=>{
    return(
        <div className="todo">
            <li className="todo-item">book</li>
            <button className="done-btn">
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};
export default Todo;