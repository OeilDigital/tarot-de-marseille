const un = process.env.PUBLIC_URL + '/un.jpg'
const deux = process.env.PUBLIC_URL + '/deux.jpg'
const trois = process.env.PUBLIC_URL + '/trois.jpg'
const quatre = process.env.PUBLIC_URL + '/quatre.jpg'
const cinq = process.env.PUBLIC_URL + '/cinq.jpg'
const six = process.env.PUBLIC_URL + '/six.jpg'
const sept = process.env.PUBLIC_URL + '/sept.jpg'
const huit = process.env.PUBLIC_URL + '/huit.jpg'
const neuf = process.env.PUBLIC_URL + '/neuf.jpg'
const dix = process.env.PUBLIC_URL + '/dix.jpg'
const onze = process.env.PUBLIC_URL + '/onze.jpg'
const douze = process.env.PUBLIC_URL + '/douze.jpg'
const treize = process.env.PUBLIC_URL + '/treize.jpg'
const quatorze = process.env.PUBLIC_URL + '/quatorze.jpg'
const quinze = process.env.PUBLIC_URL + '/quinze.jpg'
const seize = process.env.PUBLIC_URL + '/seize.jpg'
const dixsept = process.env.PUBLIC_URL + '/dix-sept.jpg'
const dixhuit = process.env.PUBLIC_URL + '/dix-huit.jpg'
const dixneuf = process.env.PUBLIC_URL + '/dix-neuf.jpg'
const vingt = process.env.PUBLIC_URL + '/vingt.jpg'
const vingtun = process.env.PUBLIC_URL + '/vingt-un.jpg'
const vingtdeux = process.env.PUBLIC_URL + '/vingt-deux.jpg'

const initialData = {
    cards: {
        "arc1": { id: "arc1", content: "Bateleur", design: `${un}`, arcane: `unA.png` },
        "arc2": { id: "arc2", content: "Pretresse", design: `${deux}`, arcane: `deuxA.png` },
        "arc3": { id: "arc3", content: "Imperatrice", design: `${trois}`, arcane: `troisA.png` },
        "arc4": { id: "arc4", content: "Empereur", design: `${quatre}`, arcane: `quatreA.png` },
        "arc5": { id: "arc5", content: "Pape", design: `${cinq}`, arcane: `cinqA.png` },
        "arc6": { id: "arc6", content: "Amoureux", design: `${six}`, arcane: `sixA.png` },
        "arc7": { id: "arc7", content: "Chariot", design: `${sept}`, arcane: `septA.png` },
        "arc8": { id: "arc8", content: "Force", design: `${huit}`, arcane: `huitA.png` },
        "arc9": { id: "arc9", content: "Hermite", design: `${neuf}`, arcane: `neufA.png` },
        "arc10": { id: "arc10", content: "Roue de fortune", design: `${dix}`, arcane: `dixA.png` },
        "arc11": { id: "arc11", content: 'Justice', design: `${onze}`, arcane: `onzeA.png` },
        "arc12": { id: "arc12", content: 'Pendu', design: `${douze}`, arcane: `douzeA.png` },
        "arc13": { id: "arc13", content: 'Arcane sans Nom', design: `${treize}`, arcane: `treizeA.png` },
        "arc14": { id: "arc14", content: 'Temperance', design: `${quatorze}`, arcane: `quatorzeA.png` },
        "arc15": { id: "arc15", content: 'Diable', design: `${quinze}`, arcane: `quinzeA.png` },
        "arc16": { id: "arc16", content: 'Tour', design: `${seize}`, arcane: `seizeA.png` },
        "arc17": { id: "arc17", content: 'Etoile', design: `${dixsept}`, arcane: `dix-septA.png` },
        "arc18": { id: "arc18", content: 'Lune', design: `${dixhuit}`, arcane: `dix-huitA.png` },
        "arc19": { id: "arc19", content: 'Soleil', design: `${dixneuf}`, arcane: `dix-neufA.png` },
        "arc20": { id: "arc20", content: 'Jugement', design: `${vingt}`, arcane: `vingtA.png` },
        "arc21": { id: "arc21", content: 'Monde', design: `${vingtun}`, arcane: `vingt-unA.png` },
        "arc22": { id: "arc22", content: 'Fou', design: `${vingtdeux}`, arcane: `vingt-deuxA.png` },
    },

    columns: {
        "initialDeck": {
            id: "initialDeck",
            title: "Les Arcanes",
            titleUK: "Arcana",
            taskIds: ["arc1", "arc2", "arc3", "arc4", "arc5", "arc6", "arc7", "arc8", "arc9", "arc10", "arc11", "arc12", "arc13", "arc14", "arc15", "arc16", "arc17", "arc18", "arc19", "arc20", "arc21", "arc22"]
        },
        "pos1": {
            id: "pos1",
            title: "Situation initiale",
            titleUK: "Initial situation",
            taskIds: []
        },
        "pos2": {
            id: "pos2",
            title: "En opposition",
            titleUK: "In opposition",
            taskIds: []
        },
        "pos3": {
            id: "pos3",
            title: "En atout",
            titleUK: "As an asset",
            taskIds: []
        },
        "pos4": {
            id: "pos4",
            title: "En résultante",
            titleUK: "Resulting",
            taskIds: []
        },
    },

    // columnOrder: ["initialDeck"],
    columnOrder: ["initialDeck", "pos1", "pos2", "pos3", "pos4"],
}

export default initialData;