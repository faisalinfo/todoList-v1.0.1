import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './TodoList.css';

function TodoList(props) {


    return (
        <div>
            <ul>
                {
                    <div>
                        <div className="fa-icon">
                            <FontAwesomeIcon key={props.keys} id={props.keys} icon={faTimesCircle} className="icon" onClick={() => props.onSelect(props.id)} />
                        </div>
                        <li key={props.keys} >{props.item}</li>
                    </div>
                }
            </ul>

        </div>
    );
}
export default TodoList

