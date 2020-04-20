import { potHTML } from './potComponent.js'
import { toSell, usePotteryToSell } from './potteryForSale.js'
import { usePots, getPots } from './pottery.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('#inventory')

getPots().then( () => {
    
    
    const pots = usePots()
    toSell(pots)
    const potteryToSell = usePotteryToSell()

contentTarget.innerHTML = `
<br>
<div>All My Pots</div>
<br>
${potteryToSell.map(pot=> potHTML(pot)).join("")}
`
})


eventHub.addEventListener("click", e=> {
    if(e.target.id.includes('sale--')) {
        const pots = usePots()
        const id = parseInt(e.target.id.split('--')[1])
        const pot = pots.find(pot => pot.id === id)
        window.alert(`${pot.shape} was sold for ${pot.price}`)
    }
})