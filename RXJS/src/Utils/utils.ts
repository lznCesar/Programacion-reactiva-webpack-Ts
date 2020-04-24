export const displayLog = (content:any)=> {
    const element = document.createElement('div')
    element.innerHTML = content
    const logContainer = document.querySelector('#log-container')
    logContainer?.appendChild(element)
}