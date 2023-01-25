import { AddButton } from '../AddButton/AddButton'
import { ListItem } from '../ListItem/ListItem'
import { Spinner } from '../Spinner/Spinner'
import { useGetAnimals } from './useGetAnimals'

export const List = () => {
	const { data, isSuccess, isLoading } = useGetAnimals()

	return (
		<>
			<div className="w-11/12 py-4 max-w-5xl max-h-96 bg-sky-500 rounded-md grid place-items-center font-bold text-lg text-white gap-4 overflow-y-auto">
				{isLoading && <Spinner />}
				{isSuccess &&
					data.animals.map(
						(animal: {
							id: number
							name: string
							weight: number
						}) => (
							<ListItem
								key={animal.id}
								id={animal.id}
								name={animal.name}
								weight={animal.weight}
							/>
						)
					)}
			</div>
			<AddButton />
		</>
	)
}
