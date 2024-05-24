import React from 'react'
import './TryAgain.css'

const TryAgain = React.memo(({ startAgain, words, characters, wpm }) => {
    return (
        <div className='try-again-container'>
            <h1>Test Results</h1>
            <div className='result-container'>
                <p>
                    <b>Characters:</b>{characters}
                </p>
                <p>
                    <b>Words:</b>{words}
                </p>
                <p>
                    <b>Speed:</b>{wpm} wpm
                </p>

            </div>
            <div>
                <button className='end-buttons start-again-btn' onClick={startAgain}>Retry</button>
                <button onClick={() => {
                    window.open("https://www.twitter.com/intent/text=CheckItOut", "Twitter", "width=900, height=700")
                }} className='end-buttons tweet-btn'>Tweet</button>
                <button onClick={() => {
                    window.open("https://www.facebook.com/sharer/sharer.php?u=theleanprogrammer.com", "facebook-share-dialog", "width=900, height=700")
                }} className='end-buttons share-btn'>Share</button>
            </div>
        </div>
    )
})

export default TryAgain