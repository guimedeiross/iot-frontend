const API_BASE = 'http://127.0.0.1:3000/api'

const basicFetch = async endpoint => {
    const result = await fetch(`${API_BASE}${endpoint}`)
    const json = await result.json()
    return json
}

const getAll = async () => {
    const allValues = await basicFetch('/getAll')
    return allValues
}

export { getAll }