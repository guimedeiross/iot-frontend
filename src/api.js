const API_BASE = 'http://10.10.10.100:3000/api'

const basicFetch = async endpoint => {
    const result = await fetch(`${API_BASE}${endpoint}`)
    const json = await result.json()
    return json
}

const getAll = async () => {
    const allValues = await basicFetch('/getAll')
    return allValues
}

const getSingle = async () => {
    const card = await basicFetch('/getSingle/18')
    return card
}

export { getAll, getSingle }