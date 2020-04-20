let pots = []

export const makePot = (shape, weight, height) => {
    
    const newPot = {
        shape: shape,
        weight: weight,
        height: height,
        fired: false,
        cracked: false,
        price: 0

    }

    return fetch('http://localhost:8088/pottery', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPot)
    })
    .then(getPots)
}

export const getPots = () => {
    return fetch('http://localhost:8088/pottery')
        .then(resp => resp.json())
        .then(parsed => {
            pots = parsed
        })
}

export const usePots = () => pots.slice()

