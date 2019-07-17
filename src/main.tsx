import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
ReactDOM.render(<App></App>, document.querySelector("#root"))
if (process.env.NODE_ENV === 'development') {
    if ((module as any)) {
        (module as any).hot.accept()
    }
}
