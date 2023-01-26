import { useQuery } from 'react-query'
import { getAnimals } from '../../api/axiosAnimalInstance'

export const useGetAnimals = () => {
	const query = useQuery('getAnimals', getAnimals)
	return query
}
