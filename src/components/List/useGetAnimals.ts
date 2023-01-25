type Animal = {
	id: number
	name: string
	weight: number
}

import { useQuery } from 'react-query'
import { getAnimals } from '../../api/axiosInstance'

export const useGetAnimals = () => {
	const query = useQuery('getAnimals', getAnimals)
	return query
}
