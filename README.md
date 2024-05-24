# Hyper Type
    - A website for checking your typing speed.

### LifeCycle Methods
- Constructor is called 
- Later Render method is called
- **componentDidMount** is a function that will be called as soon as component is rendered or mounted on to the DOM tree(for only once or first time of component rendering).
- **componentWillUnmount** is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount(). 
- **componentDidUpdate** is invoked immediately after updating occurs. This method is not called for the initial render.


### setTimeout & setInterval
 - setTimeout means it will runs the piece of code after the given period of time.
 - setInterval means it will runs the piece of code again and again after the given period of time.
 - The only difference is , setTimeout() triggers the expression only once while setInterval() keeps triggering expression regularly after the given interval of time. (unless you tell it to stop). To stop further calls, we should call clearInterval(timerId

### Algorithm for typing speed
  1. Handle Underflow case - All the chars should be shown as not attempted
  2. Handle Overflow case - Early exit
  3. Handle the backspace
       - Mark the [index+1] element as not attempted (irrespective of whether the index is less than zero) 
       - But, dont forget to check for the overflow case
           (index+1 can go outbound, when the index===length-1)
  4. Update the status in the testinfo
      - Find out the last char in the inputValue and its index
      - Check if the character at same index in testInfo (state) matches
      - Yes -> "Correct"
      - No -> "incorrect"
  5. Irrespected of the case, characters, words and speed (wpm) should be updated

### Deployment
`npm install gh-pages --save-dev`
- Update package.json
- "homepage":""
- Push to git
<!--In Scripts -->
- "predeploy": "npm run build"
- "deploy":"gh-pages -d build"

### Paragraph generator API
- In this project, I have used the below api for generating paragraphs.
[https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text](https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text)
- And also used txtgen package to generate paragraphs

