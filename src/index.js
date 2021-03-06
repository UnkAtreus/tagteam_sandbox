import React from 'react'
import ReactDOM from 'react-dom'
import 'themes/styles/helpers/reset'
import 'themes/styles/helpers/scaffolding'
import 'themes/styles/global'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import 'antd/dist/antd.css';
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
