let potteryObjId = 1

const potteryMaker = (shape, weight, height) => {

    let potteryObj = {
        shape: shape,
        weight: weight,
        height: height,
        price: 20,
        id: potteryObjId,
        cracked: false,
        fired: false,
        
    }
    
    potteryObjId++
    return potteryObj
}
const potteryExample = potteryMaker("circle", 1, 50,)
const potteryExample2 = potteryMaker("long", 10, 4,)
const potteryExample3 = potteryMaker("circle", 3, 44,)
const potteryExample4 = potteryMaker("square", 2, 4,)
const potteryExample5 = potteryMaker("long", 3, 67,)
const potteryExample6 = potteryMaker("oval", 110, 4,)


const potteryToSell = []
const potteryNotToSell = []

const kilnRep = (pottery, tempature) => {
    {
        pottery.fired = true

        if (tempature > 2200) {
            pottery.cracked = true
            potteryNotToSell.push(pottery)
            
        }
        else {
            pottery.cracked = false
            potteryToSell.push(pottery)
           
        }
    }
}

const setPrice = (pottery) => {
    
    if (pottery.weight > 3) {
        pottery.price = 40

    }
    else (pottery.weight <= 3)
    pottery.price = 20
    
    return pottery
}

potteryToSell.forEach(pottery => {
   setPrice(pottery)
    
})

const kiln1 = kilnRep(potteryExample, 2201)
const kiln2 = kilnRep(potteryExample2, 100)
const kiln3 = kilnRep(potteryExample3, 222222)
const kiln4 = kilnRep(potteryExample4, 100)
const kiln5 = kilnRep(potteryExample5, 222201)
const kiln6 = kilnRep(potteryExample6, 1100)
console.log("sellable pottery", potteryToSell)
console.log("not sellable pottery", potteryNotToSell)

const usePottery = () => {
    return potteryToSell
}

const potteryComponent = (pottery) => {
    return `
    <section class="singlePot">
    <button id="sell--${pottery.id}">SELL POTTERY</button
    <br>
    <div id="shape">Shape: ${pottery.shape}</div>
    <div>Weight: ${pottery.weight} lbs</div>
    <div>Height: ${pottery.height} inches</div>
    <div id="price">Price: $${pottery.price}</div>
    </section>
    `
}

const contentTarget = document.querySelector("#inventory")
const eventHub = document.querySelector("#inventory")

const potteryListComponent = () => {
    const potteryList = usePottery()

    contentTarget.innerHTML += `
        <section>
            ${potteryList.map(
                    (potteryList) => {
                        return potteryComponent(potteryList)
                    }).join("")}
        </section>`
}
potteryListComponent()


eventHub.addEventListener("click", event => {
    if(event.target.id.includes('sell--')) {
        const myPottery = usePottery()
        const id = parseInt(event.target.id.split('--')[1])
        const pottery = myPottery.find(pottery => pottery.id === id)
        window.alert(`A ${pottery.shape} pot was sold for $${pottery.price}`)
    }
}) 
