import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
    
    const list = props.data.map(element => <li onClick={()=> props.remove(element.id)} key={element.id}>{element.text}</li>)
    return (
    <ul className={style.TodoList}>
        <h3>Lista elementów  </h3>
        {list}
    </ul> )
}




export default TodoList;

