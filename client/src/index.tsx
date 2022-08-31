import * as React from 'react'
import ReactDOM from 'react-dom'
import { DAppProvider } from '@usedapp/core'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import reportWebVitals from './reportWebVitals'
import { config } from './shared/constants/eth'
import { GlobalStyle } from './shared/globalStyles'
import { GovernancePage } from './pages/governance/GovernancePage'

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <>
        <GlobalStyle />
        <GovernancePage />
        <ToastContainer />
      </>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
