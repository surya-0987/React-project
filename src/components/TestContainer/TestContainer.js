import React from 'react'
import './TestContainer.css'
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'

const TestContainer = React.memo(({ startAgain, onInputChange, selectedParagraph, timeRemaining, timerStarted, words, characters, wpm, testInfo }) => {
    // const timeRemaining = 30;

    return (
        <div className='test-container'>
            {
                timeRemaining > 0 ? (
                    <div data-aos="fade-up" className="typing-challenge-cont">
                        <TypingChallengeContainer onInputChange={onInputChange} testInfo={testInfo} selectedParagraph={selectedParagraph} timerStarted={timerStarted} timeRemaining={timeRemaining} words={words} characters={characters} wpm={wpm} />
                    </div>
                ) : (

                        <div className='try-again-cont'>
                            <TryAgain startAgain={startAgain} words={words} characters={characters} wpm={wpm} />
                        </div>
                    )
            }
        </div>
    )
})

export default TestContainer