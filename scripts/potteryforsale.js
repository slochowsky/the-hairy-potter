import { usePots, getPots } from "./potteryProvider.js"
import { potHTML } from "./potComponent.js"

let potteryToSell = []

export const usePotteryToSell = () => potteryToSell.slice()

export const toSell = () => {
    const pots = usePots()
    
    potteryToSell = pots.filter(pot => pot.cracked === false)    
    potteryToSell.map(pot => {
        if(pot.weight > 3) {
            pot.price = 40
        }
        else {
            pot.price = 20
        }
    })
}

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('#inventory')

export const potteryList = () => {
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
}
)
}


eventHub.addEventListener("click", e=> {
    if(e.target.id.includes('sale--')) {
        const pots = usePots()
        const id = parseInt(e.target.id.split('--')[1])
        const pot = pots.find(pot => pot.id === id)
        window.alert(`${pot.shape} was sold for ${pot.price}`)
    }
})