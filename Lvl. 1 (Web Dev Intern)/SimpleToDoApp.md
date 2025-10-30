# Simple To Do App
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
