import './Todo.css';

const Todo = (props) => {
    return (
        <div 
            className='Todo'
            key={props.key}
        >
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Todo;