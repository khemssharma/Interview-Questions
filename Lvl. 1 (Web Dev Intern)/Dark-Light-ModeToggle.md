```
import {useState} from "react"
export default function App() {
    const [mode, setMode] = useState("light")
    const changeMode = () => {
        mode==="light"?setMode("dark"):setMode("light");
    }
    const styles = {
        backgroundColor : mode === "light"?"white":"black",
        display: "flex",
        height: "100vh",
        alignItems:"center",
        justifyContent:"center"
        
    }
  return (
      <div style = {styles}>
          <button onClick = {changeMode}>{mode==="light"?"Dark Mode":"Light Mode"}</button>
      </div>
  )
}

```
