async function getRandomCardFromSet(apiKey, setName) {
    const path = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${setName}`
    const headers = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
        }
    }
    const response = await fetch(path, headers)
    const json = await response.json()


    const randomNum = Math.floor(Math.random() * Math.floor(json.length))
    const randomCard = json[randomNum]

    const { name, type, img, playerClass, text } = randomCard

    const info = {
        'name': name,
        'type': type,
        'img': img ? img : 'https://static.wikia.nocookie.net/hearthstone/images/c/c4/Card_back-Default.png/revision/latest/scale-to-width-down/340?cb=20140823204025',
        'playerClass': playerClass,
        'text': text
    }

    return info
}

export default getRandomCardFromSet