import React, { useState } from 'react'

const WordCounter = () => {
    const [text, setText] = useState("");

    const capitalAlphabet = () => {
        let newText = text.
            toUpperCase();
        setText(newText);
    }

    const smallAlphabet = () => {
        let newText = text.
            toLowerCase();
        setText(newText);
    }

    const copytext = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Text copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    };

    const handlePaste = (event) => {
        // Prevent default paste behavior
        event.preventDefault();
    
        // Get pasted text from clipboard
        navigator.clipboard.readText()
          .then(pastedText => {
            // Update state with pasted text
            setText(pastedText);
          })
          .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
          });
      };

    const clearText = () => {
        setText("");
    }

    const handleText = () => {
        setText(event.target.value);
    }

    return (
        <div className=' w-[65%] rounded-3xl  border-2 border-black bg-white'>

            <h1 className='text-center text-3xl mb-5 mt-4 underline font-bold'>Word Counter</h1>

            <div className='flex justify-center items-center'>
                <textarea id="text-area" cols={100} rows={10} placeholder='Write some text here...' className='p-4 mb-5 rounded-2xl border-2 border-black text-xl' value={text} onChange={handleText}></textarea>
            </div>

            <div className='flex gap-14 justify-center items-center mb-5 font-bold text-xl'>
                <button className='border-2 border-black rounded-2xl p-2 bg-slate-700 text-white' onClick={capitalAlphabet}>Uppercase</button>
                <button className='border-2 border-black rounded-2xl p-2 bg-slate-700 text-white' onClick={smallAlphabet}>Lowercase</button>
                <button className='border-2 border-black rounded-2xl p-2 bg-slate-700 text-white' onClick={copytext }>Copy-text</button>
                <button className='border-2 border-black rounded-2xl p-2 bg-slate-700 text-white' onClick={handlePaste}>Past-text</button>
                <button className='border-2 border-black rounded-2xl p-2 bg-slate-700 text-white' onClick={clearText}>Remove-All</button>
            </div>

            <div className='flex flex-col justify-center items-center mb-4 font-bold text-xl'>
               <div className='flex gap-32 items-center'> 
                <p>Words: {text.split("").length - 0}</p>
                <p>Characters: {text.length}</p>
                <p>Time-taken: {0.008 * text.split("").length}</p>
                </div>
                <p className='p-3 text-center'>Preview: {text}</p>
            </div>
        </div>
    )
}

export default WordCounter