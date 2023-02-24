import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was clicked"+text)
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleUp = ()=>{
      let text1 = text.toLowerCase();
      setText(text1)
      props.showAlert("Converted to LowerCase","success")
    }
    
    
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Formatted text","success")
    }
      const handletext=()=>{
        let newtext="";
        setText(newtext);
        props.showAlert("Text cleared","success")
      }
     
    
    const [text,setText] = useState("");
    return (
    <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
    <h2>{props.heading}</h2>
    <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"#89afe6":"white", color:props.mode==="dark"?"white":"black"}} id="myBox" rows="4"></textarea>
    <button disabled ={text.length===0} className="btn btn-primary my-3"  onClick={handleUpClick}>Convert to Uppercase</button>
    < button disabled ={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUp}>Convert to Lowercase</button>
     
    < button disabled ={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>Remove Extraspaces</button>
    < button disabled ={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handletext}>Clear Text</button>
</div>
<div className='container my-3' style={{color: props.mode==="dark"?"white":"black"}}>
  <h2> Your text summary</h2>
  <p>{text.split(/\s+/).filter((element)=>{
    return element.length!==0}).length}
   words {text.length} characters</p>
  <p> {0.008 * text.split(" ").filter((element)=>{
    return element.length!==0}).length} minutes to read</p>
  <h3> Preview</h3>
  <p>{text.length>0?text:"Nothing to preview!"}</p>
</div>
    </div>
  )
}
