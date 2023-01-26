import { useQuery } from 'react-query'
import { getWeather } from '../../api/axiosWeatherInstance'

export const useGetWeatherInfo = () => {
	const query = useQuery('getWeather', getWeather)
	return query
}
