import { useState } from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const test = [{id: "1", name:"Me", description:"Test"}, {id: "2", name:"You", description:"Test2"}];

    const content = test.map(todo => 
        <Todo 
            key={todo.id}
            name={todo.name}
            description={todo.description}
        />
    );

    return (
        <div className='TodoList'>
            {content}
        </div>
    )
}

export default TodoList