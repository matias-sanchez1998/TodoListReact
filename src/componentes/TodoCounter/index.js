import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoCounter.css';

function TodoCounter(){
const {totalTodos,completedTodos} = React.useContext(TodoContext)

if (totalTodos <= 0) {
    return (
        <h2 className="TodoCounter"> No tienes TODOs</h2>
    )
    }
    return (
        <h2 className="TodoCounter"> Has completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}

export {  TodoCounter  }