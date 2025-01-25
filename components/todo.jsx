'use client';
import { useState } from 'react';


export class ToDoItem {
  id = Math.random();
  
  constructor(text) {
    Object.assign(this, { text , id: Math.random() } );
  }
}

export function Todo() {
    const [count, setCount] = useState(0),
    [value, setValue] = useState(''),
    [list, setList] = useState([]),
    delItem = (id) => { setList([...list].filter(item => item.id != id)) };
  return <>
   
    <fieldset>
      <legend>Todo</legend>
      <input value={value} onChange={event => setValue(event.target.value)} />

      <button onClick={() => setList([...list, new ToDoItem(value)])}>➕add</button>
      <ol>
        {[...list]?.map?.(({id, text}) => <li key={id}>
          {text}
          <button onClick={() => delItem(id)}>❌</button>

        </li>)
        }
      </ol>
    </fieldset>
    </>

}