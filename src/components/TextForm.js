import React, { useState } from 'react';

function TextForm(props) {

    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // function to convert the text to uppercase
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success")
    }

    // function to convert the text to lowercase
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success")
    }

    // function to clear the text
    const handleClearText = () => {
        setText("")
        props.showAlert("Text has been cleared!", "success")
    }

    // function to copy the text to clipboard
    const handleCopy = () => {
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text has been copied to clipboard!", "success")
    }

    // function to capitalize the first letter of every character
    const capitalizeFirstLetter = () => {
        let textArr = text.split(" ");
        let newText = "";
        for (let i = 0; i < textArr.length; i++) {
            newText += textArr[i].substring(0, 1).toUpperCase() + textArr[i].substring(1) + " "
        }
        setText(newText.substring(0, newText.length - 1))
        props.showAlert("First letter of every letter has been capitalized!", "success")
    }

    // function to remove extra white spaces
    const removeExtraWhiteSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Removed extra whitespaces!", "success")
    }
    return (
        <>
            <div className="container my-3">
                <h1 className="mb-3">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button disabled={text.length === 0} className={`btn btn-${props.colorType} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.colorType} mx-1 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.colorType} mx-1 my-1`} onClick={handleClearText}>Clear Text</button>
                <button disabled={text.length === 0} className={`btn btn-${props.colorType} mx-1 my-1`} onClick={handleCopy}>Copy To Clipboard</button>
                <button disabled={text.length === 0} className={`btn btn-${props.colorType} mx-1 my-1`} onClick={capitalizeFirstLetter}>Capitalize First Letter</button>
                <button disabled={text.length === 0} className={`btn btn-${props.colorType} mx-1 my-1`} onClick={removeExtraWhiteSpaces}>Remove Extra White Spaces</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p><strong>{text !== "" ? text.trim().split(/\s+/).length : 0}</strong> words, <strong>{text.length}</strong> characters</p>
                <p><strong>{text !== "" ? text.trim().split(" ").length * 0.008 : 0}</strong> mins to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm;
