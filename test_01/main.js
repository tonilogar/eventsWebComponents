import './components/compSignal.js'
import './components/compSlot.js'

import {rVariable} from './components/compSlot.js'

let pepe
document.addEventListener('click', (e) => {
  //console.log('Clic en ', e.target)
  if (e.target.matches('button')) {
    pepe= rVariable()
    console.log('rVariable()', rVariable())
    console.log('pepe', pepe)
  }
}) 