import axios from 'axios'
const API_URI = import.meta.env.VITE_API_URI

export const animalApi = axios.create({
	baseURL: API_URI
})

const checkError = (textStatus: string, numberStatus: number) => {
	if (textStatus !== 'OK') {
		if (numberStatus === 400) throw new Error('Eror 400 - Bad request')
		if (numberStatus === 404) throw new Error('Eror 404 - Not found')
		if (numberStatus === 500)
			throw new Error('Eror 500 - Internal server error')
	}
}

export const getAnimals = async () => {
	const response = await animalApi.get('/')

	checkError(response.statusText, response.status)

	return response.data
}

export const createAnmial = async (animal: {
	name: string
	weight: number
}) => {
	const response = await animalApi.post('/', animal)
}

export const updateAnmial = async (animal: {
	id: number
	name: string
	weight: number
}) => {
	const response = await animalApi.put(`/${animal.id}`, animal)
}

export const deleteAnmial = async ({ id }: { id: number }) => {
	const response = await animalApi.delete(`/${id}`)
}
