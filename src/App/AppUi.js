import React from "react";
import { TodoContext } from "../TodoContext"
import { TodoCounter } from "../componentes/TodoCounter";
import { TodoSearch } from "../componentes/TodoSearch";
import { TodoList } from "../componentes/TodoList";
import { TodosError } from '../componentes/TodosError';
import { TodosLoading } from '../componentes/TodosLoading';
import { EmptyTodos } from '../componentes/EmptyTodos';
import { TodoItem } from "../componentes/TodoItem";
import { TodoForm } from "../componentes/TodoForm";
import { CreateTodoButton } from "../componentes/CreateTodoButton";
import {Modal} from '../componentes/Modal'

function AppUi() {
  const { error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal } = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoCounter
      />
      <TodoSearch

      />

      <TodoList>
      {error && <TodosError />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}


        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm/>
      </Modal>
      )}    
      

      <CreateTodoButton 
        setOpenModal = {setOpenModal}
        openModal = {openModal}
      />
    </React.Fragment>
  )
}

export { AppUi }