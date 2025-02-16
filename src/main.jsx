import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react'
import ColorModeSwitcher from './components/ColorModeSwitcher.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript />
      <ChakraProvider theme={theme}>
        <ColorModeSwitcher />
        <App />
      </ChakraProvider>
  </React.StrictMode>,
)

export const server = `https://api.coingecko.com/api/v3`
