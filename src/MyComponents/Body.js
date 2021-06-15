import React from 'react';
import { useState } from 'react'
import './Body.css';
import TodoList from './TodoList';

function Body() {
    const [item, setItem] = useState();
    const [todoList, setTodoList] = useState([]);
    function getItem(val) {
        setItem(val.target.value);
    }
    function removeItem(id) {
        setTodoList((oldItems) => {
            return oldItems.filter((elements, index) => {
                return index !== id;
            });
        })
    }
    function addName() {
        setTodoList((oldList) => {
            setItem("");
            return ([...oldList, item]);
        });
    }

    return (
        <div className="body body-shadow">
            <div className="input-button">
                <input type="text" placeholder="Enter todo item" value={item} onChange={getItem} />
                <button className="btnAdd" onClick={addName}>+</button>
            </div>
            <br />
            <div>
                {
                    todoList.map((item, index) =>
                        <TodoList
                            keys={index}
                            id={index}
                            item={item}
                            onSelect={removeItem}
                        />
                    )
                }

            </div>
        </div>
    );
}
export default Body;