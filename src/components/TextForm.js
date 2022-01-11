import React,{useState} from 'react'

export const TextForm = (props) => {

    // below we have declared the react state hook 
    // where "text" is our state variable and 
    // "setText" is a function to manipulate that text.
    const [text, setText] = useState("");



    const changeText = (event) => {
        setText(event.target.value);
    }
    const convertToUppercase = (event) =>{
        // console.log("in Click Event");
        let newText = text.toUpperCase();
        setText(newText);

        if (text) {
            props.showAlert("Text converted to Uppercase...!!!","success");
        } else {
            props.showAlert("Please enter text in above box...!!!","danger");
        }

        
    }

    const convertToLowercase = (event) =>{
        // console.log("in Click Event");
        let newText = text.toLowerCase();
        setText(newText);

        if (text) {
        props.showAlert("Text converted to Lower case...!!!","success");
        } else {
            props.showAlert("Please enter text in above box...!!!","danger");
        }
    }

    const handleReverseEachWord = (event) =>{
        // console.log("in Click Event");
        var words = [];
        words = text.split(" ")
        var result = "";
        for (var i = 0; i < words.length; i++) {
            result += words[i].split('').reverse().join('') + " ";
        }
        setText(result.trimEnd());

        if (text) {
            props.showAlert("Reversed Each Word Successfully...!!!","success");
        } else {
            props.showAlert("Please enter text in above box...!!!","danger");
        }

        
    }

    const handleClearText = (event) =>{
        // console.log("in Click Event");
        setText('');

        if (text) {
            props.showAlert("Text Cleared...!!!","success");
        } else {
            props.showAlert("Please enter text in above box...!!!","danger");
        }
    }

    const handleCopyText = (event) =>{
        // console.log("in Click Event");
        let newText = document.getElementById('myText');
        newText.select();
        navigator.clipboard.writeText(newText.value)

        

        if (text) {
            props.showAlert("Text Coiped Successfully...!!!","success");
        } else {
            props.showAlert("Please enter text in above box...!!!","danger");
        }
    }

    const handleRemoveWhiteSpaces = (event) =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));

        if (text) {
            props.showAlert("Removed White spaces Successfully...!!!","success");
        } else {
            props.showAlert("Please enter text in above box...!!!","danger");
        }
    }


    



    return (
        <>
        <div>
            <h2>
                {props.heading}
            </h2>
            <div className="mb-3">
                <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light'? 'dark' : 'light'}`} value={text} onChange={changeText} id="myText" rows="5"></textarea>
                {/* If we are using the state variable in the value ,then we havbe to compulsory add the onChange event to manipulate that value. */}
            </div>
            
            <button type='button' disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertToUppercase}> Convert To Uppercase</button>
            <button type='button' disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertToLowercase}> Convert To Lowercase</button>
            <button type='button' disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseEachWord}> Reverse Each Word</button>
            <button type='button' disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
            <button type='button' disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy to Clipboard</button>
            <button type='button' disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveWhiteSpaces}>Remove Extra Spaces</button>
            
        </div>
        <div className="container my-3">
            <h2>Your text summary : </h2>
            <p> {text.split(/\s+/).filter((elem)=>{return elem.length !== 0}).length} words {text.length} characters. You can able to read text in around : { (0.004 * text.split(' ').filter((elem)=>{return elem.length !== 0}).length).toFixed(3)} minutes</p>
            <h4>Preview</h4>
            <p>{text === '' ? 'Please enter your text in above box to preview here' : text}</p>
        </div>
        </>
    )
}
