import axios from 'axios'
const API_URI = import.meta.env.VITE_API_URI_WEATHER

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

export const getWeather = async () => {
	const response = await animalApi.get('/')

	checkError(response.statusText, response.status)

	return response.data
}
