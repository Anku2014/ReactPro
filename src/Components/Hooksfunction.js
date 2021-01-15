import React,{useState,useEffect} from 'react'
 
function Hooksfunction()
{
    const[name,setName]=useState("Ankit");
    const onHandleChange=()=>{
        setName('Bhardwaj');
    }
    useEffect(() => {
       console.log("useEffect is called...!")
    }, [name])
    return(

        <div>
            My name is {name}
            <button onClick={onHandleChange}>Change</button>
        </div>
    )
}
 
export default Hooksfunction