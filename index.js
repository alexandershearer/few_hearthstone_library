import getRandomCardFromSet from './RandomCardFromSet'

async function getCardByName(apiKey, cardName) {

    const path = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${cardName}`
    const headers = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
        }
    }
    const response = await fetch(path, headers)
    const json = await response.json()

    const { name, img, cardSet, type, faction } = json[0]
    const info = {
        'name': name,
        'img': img ? img : 'https://static.wikia.nocookie.net/hearthstone/images/c/c4/Card_back-Default.png/revision/latest/scale-to-width-down/340?cb=20140823204025',
        'cardSet': cardSet,
        'type': type,
        'faction': faction
    }
    return info
}



export {
    getCardByName,
}