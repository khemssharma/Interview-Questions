# Lvl 1
```
import {useState} from "react"
export default function App() {
    const [toDos, setToDos] = useState([]);
    const [text, setText] = useState("");
  return (
      <div>
            <input 
                type = "text" 
                value = {text} 
                onChange= {(e) => setText(e.target.value)}
                placeholder = "write what would you do"> 
            </input>
          <button onClick = {()=>setToDos([...toDos, text])}>Create To Do</button>
          <ul>{toDos.map((item, index) => (<li>{item}</li>))}</ul>
      </div>
  )
}

```
# Lvl 2: With Delete notes and optinal styles 
Try it Yourself: https://nextleap.app/online-compiler/reactjs-programming/4vzbcxrp7

App.js
``` 
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState([]);

  const deleteHandler = (deleteIndex) => {
    setToDos(toDos.filter((_, index) => index !== deleteIndex));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setToDos([...toDos, text]);
    setText("");
  };

  return (
    <div>
      <h1>My To Dos 📝</h1>
      <form onSubmit={submitHandler}>
        <input
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a todo"
        />
        <button type="submit">➕ Add ToDo</button>
      </form>

      <ul class = "toDos">
        {toDos.map((value, index) => (
          <li key={index} class = "toDo">
            {value} {" "}
            <button onClick={() => deleteHandler(index)}>❌ Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

```
styles.css 
```
body {
    display: flex;
    justify-content: center;
  font-family: sans-serif;
}

h1 {
  font-size: 1.5rem;
    display: flex;
    justify-content: center;
}
.toDos{
    padding: 0;
}
.toDo{
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 10px 0;
    border: 2px solid black;
    boder-radius:12px;
    padding: 8px;
}

```
