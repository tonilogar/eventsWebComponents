import './components/compSignal.js'
import './components/compSlot.js'

import {rVariable, pepe} from './components/compSlot.js'


document.addEventListener('click', (e) => {
  //console.log('Clic en ', e.target)
  if (e.target.matches('button')) {
   
    console.log('rVariable()', rVariable())
    console.log('pepe', pepe)
  }
}) 