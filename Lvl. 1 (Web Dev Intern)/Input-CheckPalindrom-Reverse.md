```
import {useState, useEffect} from "react";
export default function App (){
    const [name, setName] = useState("Ayush")
    const [isPalindrom, setIsPalindrom] = useState(false);
    useEffect(() => {checkPalindrom()}, [name])
    const reverse = () =>{
        let len = name.length - 1;
        let reversed = "";
        while (len >= 0) {
            reversed += name[len]
            len--;
        }
        setName(reversed)
    }
    const checkPalindrom = () =>{
       let start = 0;
        let end = name.length - 1;
        while (start < end){
            if (name[start].toLowerCase() !== name[end].toLowerCase()){
                setIsPalindrom(false);
                return;
            }
            start++;
            end--;
        }
        setIsPalindrom(true);
    }
    
    return <div>
        <h4 >Enter your Name</h4>
        <input type = "text" onChange = {(e)=>{setName(e.target.value)}}></input>
        <h1>Name:{name}</h1>
        <button onClick = {reverse}>Reverse Name</button>
        <h4>It {isPalindrom?"is":"is not"} a palindrom.</h4>
    </div>
}

```