import { usePots } from "./pottery.js"

let potteryToSell = []

export const usePotteryToSell = () => potteryToSell.slice()

export const toSell = () => {
    const pots = usePots()
    
    potteryToSell = pots.filter(pot => pot.cracked === false)
    
    console.log("pot to sell", potteryToSell)
    potteryToSell.map(pot => {
        if(pot.weight > 3) {
            pot.price = 40
        }
        else {
            pot.price = 20
        }
    })
}