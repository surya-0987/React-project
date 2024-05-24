import React from 'react'
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import TypingChallenge from '../TypingChallenge/TypingChallenge'
import './TypingChallengeContainer.css'
const TypingChallengeContainer = React.memo(({ onInputChange, testInfo, selectedParagraph, timeRemaining, timerStarted, words, characters, wpm }) => {
    return (
        <div className="typing-challenge-container">
            {/* Details section */}
            <div className="details-container">
                {/* Words typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words} />
                {/* Characters Typed */}
                <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
                {/* Speed */}
                <ChallengeDetailsCard cardName="Speed(WPM)" cardValue={wpm} />
                {/* The Real Challenge */}
            </div>
            <div className="typewriter-container">
                <TypingChallenge onInputChange={onInputChange} testInfo={testInfo} timeRemaining={timeRemaining} timerStarted={timerStarted} selectedParagraph={selectedParagraph} />
            </div>
        </div>
    )
})

export default TypingChallengeContainer