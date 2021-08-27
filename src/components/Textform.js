import React ,{useState} from 'react'

export default function Textform(props) {
    const handleUpCase = () =>{
        let newtext = text.toUpperCase(text)
        setText(newtext)
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLowCase = () =>{
        let newtext = text.toLowerCase(text)
        setText(newtext)
        props.showAlert("Converted to lowercase", "success")

    }

    const handleClearText = () =>{
        let newtext = ''
        setText(newtext)
        props.showAlert("clear text", "success")

    }

    const handleAddAnchorTag = () =>{
        let newtext = text.anchor(text)
        setText(newtext)
    }

    
    const handleOnchange = (event) =>{
        setText(event.target.value)
    }


    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white': 'black'}}>
            <h1> {props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text} style={{background: props.mode==='dark'?'gray': 'white', color: props.mode==='dark'?'white': 'black'}} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpCase} >Convert to uppercases</button>
            <button className="btn btn-primary mx-2" onClick={handleLowCase} >Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText} >Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleAddAnchorTag} >Add Anchor Tag</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white': 'black'}}>
            <h1>Your Test Summery</h1>
            <p>{text.split(" ").length} words ,{text.length} Chareters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview of text</h2>
            <p>{text.length > 0 ? text: 'For preview enter text'}</p>
        </div>

        </>

    )
}
