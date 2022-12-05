import { useState } from 'react';
import './TodoForm.css';

const TodoForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='TodoForm'>
            <form onSubmit={handleSubmit}>
                
                <input 
                    type="text" 
                    value={name} 
                    onChange={handleName}>
                </input>

                <textarea 
                    value={description} 
                    onChange={handleDescription}
                    rows={20}
                    cols={40}>
                </textarea>

                <input 
                    className='submit-button'
                    type='submit'
                    value='Submit'>
                </input>
            </form>
        </div>
    )
}

export default TodoForm;