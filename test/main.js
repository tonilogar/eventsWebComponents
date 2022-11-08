import './components/compSignal.js'
import { ClassSlot } from './components/classSlot.js'

let variableFromSignal
const classSlot = new ClassSlot()
console.log('classSlot.returVariable()', classSlot.returnVariable())
let arrayData = []
document.addEventListener('click', (e) => {
  //console.log('Clic en ', e.target)
  if (e.target.matches('button')) {
    console.log('hi', classSlot.returnVariable())
    variableFromSignal =classSlot.returnVariable()
    //document.querySelector(classd).remove()
    arrayData.push(variableFromSignal)
    console.log('arrayData', arrayData)
  }
}) 

console.log('fuera del addEventListener', arrayData)