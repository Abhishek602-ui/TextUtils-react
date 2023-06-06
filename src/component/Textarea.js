import React, { useState } from 'react'

export default function Textarea(props) {
    const [text, settext] = useState("");
  
    const handleUpClick = () => {

        settext(text.toUpperCase());
        props.showAlert('Converted into Upper Case','success')
    }
    const handleLoClick = () => {

        settext(text.toLowerCase());
        props.showAlert('Converted into Lower Case','success')
    }
    const Clear = () => {
        settext('')
        props.showAlert('Text Clear','success')
    }

    const handleOnChange = (event) => {
        settext(event.target.value)
        
        
    }
    const handlespace = ()=>{
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "))
        props.showAlert('Extra Spaces Removed','success')
    }

    const handleCopy = ()=>{
        var textcp = document.getElementById('exampleFormControlTextarea1');
        textcp.select();
        navigator.clipboard.writeText(textcp.value)
        props.showAlert('Text Copied','success')
    }

    return (
        <div className="mb-4 container">
            
            <br/>
            <h3 className='mb-7'>Try TextUtils - Word Counter, Character counter and Remove Extra Spaces..</h3>
            <textarea className="form-control k" style={{ backgroundColor: (props.mode === 'dark' ? 'rgb(41, 75, 100)' : '#fff'), color: (props.mode === 'dark' ? '#fff' : '#000') }} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10" placeholder='Enter text Here'></textarea>
            <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert UpperCase</button>
            <button className='btn btn-primary m-2' onClick={handleLoClick}>Convert LowerCase</button>
            <button className='btn btn-primary m-2' onClick={Clear}>Reset</button>
            <button className='btn btn-primary m-2' onClick={handleCopy}>Copy</button>
            <button className='btn btn-primary m-2' onClick={handlespace}>Remove Extra Space</button>
            <hr />
            <p className="fs-3"><u>Summary</u></p>
            <p className="fs-6">{text.split(" ").filter((element)=>{return element.length!==0}).length} Words</p>
            <p className="fs-6">{text.length} Characters</p>
            <h2 className='text-center'>Preview</h2>
            <hr/>
            <div className='container'><p class="text-center fs-4">{text}</p></div>
         

        </div>
    )
}
