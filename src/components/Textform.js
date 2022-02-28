import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText] = useState("");
    const [mg,setMg] = useState(30);
    const handleUpClick=()=>{
        console.log('uppercase was clicked');
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLoClick=()=>{
        console.log('uppercase was clicked');
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleUpChange=(event)=>{
        console.log('onchange was clicked');
        setText(event.target.value)
    }
    const handlefontsize=(event)=>{
       // mg += 10;
        setMg(mg+10);
    }
    const handlecopy=(event)=>{
        var txt = document.getElementById("exampleFormControlTextarea1")
        txt.select();
        navigator.clipboard.writeText(txt.value);
    }
    return (
                            <div /*style={{backgroundColor:props.mode=='light'?'white':'grey'}}*/>
                                <div className="mb-3" >
                                <label htmlFor="exampleFormControlInput1" className="form-label" style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</label>
                                </div>
                        <div className="mb-3">
                        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black',fontSize:`${mg}`}} onChange={handleUpChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                        </div>
                        <button className="btn btn-primary mx-1"onClick={handleUpClick}>Convert to UpperCase</button>
                        <button className="btn btn-primary mx-1"onClick={handleLoClick}>Convert to lowerCase</button>
                        <button className="btn btn-primary mx-1"onClick={handlecopy}>Copy Text</button>
                        <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
                        <h2>Your Text Summary</h2>
                        <p>{text.length} characters , {text.split(' ').length} words</p>
                        <h1>Preview</h1>
                        <p>{text}</p>
                        </div>
                                </div>
    )
}
