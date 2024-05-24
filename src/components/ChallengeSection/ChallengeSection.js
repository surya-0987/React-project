import React from 'react'
import './ChallengeSection.css'
import TestContainer from '../TestContainer/TestContainer'

const ChallengeSection = React.memo((props) => {
    return (
        <div className='challenge-section-container'>
            <h1 data-aos='fade-down' className='challenge-section-header'>
                Take test
            </h1>
            <TestContainer startAgain={props.startAgain} onInputChange={props.onInputChange} testInfo={props.testInfo} selectedParagraph={props.selectedParagraph} timerStarted={props.timerStarted} timeRemaining={props.timeRemaining} words={props.words} characters={props.characters} wpm={props.wpm} />
        </div>
    );
})

export default ChallengeSection;