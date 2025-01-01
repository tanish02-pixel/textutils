import React, {useState} from 'react'                                    //  usestate is hook....!!


export default function Textform(props) {                                //  props added..!!

const handleUpClick = ()=>{                                              //  function when click on button called..!
    let newtext = text.toUpperCase();
    settext(newtext)
    props.showAlert("CHANGES TO UPPERCASE","success");
}

const handleOnChange = (event)=>{
    settext(event.target.value)                                         //  through this we can write in textarea..!!
}

    const [text, settext] = useState("");                //  text jo original value h ,settext jo functionally render hoga..!

    return (                                                           //value={text} becoz it will make controlled and text ki jgeh kuch bhi deskte the..!!
     <>   
    <div className="container"  style={{color:props.mode==='dark'? 'white':"black"}}>
<div className="mb-3">
<label for="mybox" className="form-label"><h1>{props.text}</h1></label>
<textarea className="form-control" value={text} id="mybox" onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'? 'grey':"white",color:props.mode==='dark'? 'white':"black"}} rows="8"></textarea>   
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>          
</div>

<div className="container my-3" style={{color:props.mode==='dark'? 'white':"black"}} >
    <h2>SUMMARY </h2>
    <p>{text.split(" ").length-1} Words and {text.length} characters</p>
</div>
</>
  )
}
