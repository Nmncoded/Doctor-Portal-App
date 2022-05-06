import React from 'react'
import {createRoot} from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './components/App'
import store from './store/store';
// import { ChakraProvider } from '@chakra-ui/react';
import './stylesheets/main.scss';

createRoot(document.getElementById('root')).render(
  // <ChakraProvider>
    <Provider store={store} >
      <App />
    </Provider>
  // </ChakraProvider>
)
