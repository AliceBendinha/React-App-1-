import React, { useState } from 'react';

import Button from './Button'; 

import "./AddTask.css"

const AddTask = () => {

    const [inputData, setinputData] = useState('');
    const handleInputChange = (e) => {
        setinputData(e.target.value);

    };

        return (
            <div className='add-task-container'>
                <input onChange={handleInputChange} 
                className='add-task-input' 
                type="text" 
                />
                <div className="add-task-button-container"> 
                    <Button>Adicionar</Button>
                </div>
                
            </div>
        );

}; 
export default AddTask;