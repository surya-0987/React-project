import React from 'react'
import './App.css'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
import Footer from '../Footer/Footer'
import ChallengeSection from '../ChallengeSection/ChallengeSection'
const txtgen = require('txtgen');

const TotalTime = 60
const ServiceUrl = "https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text"
const DefaultState = {
    selectedParagraph: "My",
    timerStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: []
}
class App extends React.Component {
    state = DefaultState

    GenerateNewParagraph = () => {
        let information = txtgen.paragraph()
        information += ' ' + txtgen.paragraph()
        information += ' ' + txtgen.paragraph()
        information += ' ' + txtgen.paragraph()
        information += ' ' + txtgen.paragraph()
        information += ' ' + txtgen.paragraph()
        const selectedParagraphArray = information.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
            return {
                testLetter: selectedLetter,
                status: "notAttempted"
            }
        })
        let selectedParagraph = information
        this.setState({ ...DefaultState, testInfo, selectedParagraph })
    }

    fetchNewParagraph = () => {
        fetch(ServiceUrl).then(response => response.text()).then((information) => {

            const selectedParagraphArray = information.split("");
            const testInfo = selectedParagraphArray.map((selectedLetter) => {
                return {
                    testLetter: selectedLetter,
                    status: "notAttempted"
                }
            })
            let selectedParagraph = information
            this.setState({ ...DefaultState, testInfo, selectedParagraph })
        })

    }

    componentDidMount() {
        this.GenerateNewParagraph()
    }

    startTimer = () => {
        this.setState({ timerStarted: true })
        const timer = setInterval(() => {
            if (this.state.timeRemaining > 0) {
                // Change the wpm
                const timeSpent = TotalTime - this.state.timeRemaining
                const wpm = timeSpent > 0 ? ((this.state.words / timeSpent) * TotalTime) : 0

                this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                    wpm: parseInt(wpm)
                })
            }
            else {
                clearInterval(timer)
            }
        }, 1000)
    }

    startAgain = () => {
        this.GenerateNewParagraph()
    }

    handleUserInput = (inputValue) => {
        if (!this.state.timerStarted)
            this.startTimer()

        /*
         * 1. Handle Underflow case - All the chars should be shown as not attempted-early exit
         * 2. Handle Overflow case - Early exit
         * 3. Handle the backspace
         *      - Mark the [index+1] element as not attempted (irrespective of whether the index is less than zero) 
         *      - But, dont forget to check for the overflow case
         *          (index+1 can go outbound, when the index===length-1)
         * 4. Update the status in the testinfo
         *      - Find out the last char in the inputValue and its index
         *      - Check if the character at same index in testInfo (state) matches
         *      - Yes -> "Correct"
         *      - No -> "incorrect"
         * 5. Irrespected of the case, characters, words and speed (wpm) should be updated

        */

        const characters = inputValue.length
        const words = characters ? inputValue.split(" ").length : 0
        const index = characters - 1
        // Make a copy of testInfo
        let testInfo = this.state.testInfo

        if (index < 0) {
            testInfo = testInfo.map((individualLetterInfo, ind) => {
                individualLetterInfo.status = "notAttempted"

                return individualLetterInfo
            })
            // Setting first letter as not attempted if the index<0 means no text
            this.setState({
                testInfo: testInfo,
                characters,
                words
            })
            return
        }
        if (index >= this.state.selectedParagraph.length - 1) {
            this.setState({ characters, words })
            return;
        }


        if (!(index === this.state.selectedParagraph - 1)) {
            // testInfo[index + 1].status = "notAttempted"
            testInfo = testInfo.map((individualLetterInfo, ind) => {
                if (ind >= index + 1) {
                    individualLetterInfo.status = "notAttempted"
                }
                else {
                    individualLetterInfo.status = (inputValue[ind] === testInfo[ind].testLetter) ? "correct" : "incorrect"
                }
                // console.log(individualLetterInfo)
                return individualLetterInfo
            })


        }
        // console.log(this.state)

        // Check for the correct typed letter
        const isCorrect = inputValue[index] === testInfo[index].testLetter
        // Update the testInfo
        testInfo[index].status = isCorrect ? "correct" : "incorrect"
        // Update the state
        this.setState({
            testInfo,
            words,
            characters
        })

    }

    render() {
        // console.log("Render method called")
        return (
            <div className='app'>
                {/* Nav section */}
                <Nav />
                {/* Landing Page */}
                <Landing />
                {/* Challenge Section */}
                <ChallengeSection
                    onInputChange={this.handleUserInput}
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    testInfo={this.state.testInfo}
                    startAgain={this.startAgain}
                />
                {/* Footer */}
                <Footer />
            </div>
        )
    }
}

export default App;