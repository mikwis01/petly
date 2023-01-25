import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { useQueryClient, useMutation } from 'react-query'
import { updateAnmial, deleteAnmial } from '../../api/axiosInstance'

export const useInfoModal = () => {
	const { appState, handleResetState } = useContext(AppContext)
	const [nameInput, setNameInput] = useState(appState.animalModalItem.name)
	const [weightInput, setWeightInput] = useState(
		String(appState.animalModalItem.weight)
	)
	const [save, setSave] = useState(false)
	const [del, setDel] = useState(false)

	const queryClient = useQueryClient()

	const updateAnimalsMutation = useMutation(updateAnmial, {
		onSuccess: () => {
			queryClient.invalidateQueries('getAnimals')
		}
	})

	const deleteAnimalsMutation = useMutation(deleteAnmial, {
		onSuccess: () => {
			queryClient.invalidateQueries('getAnimals')
		}
	})

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		save &&
			updateAnimalsMutation.mutate({
				id: appState.animalModalItem.id,
				name: nameInput,
				weight: Number(weightInput)
			})

		del &&
			deleteAnimalsMutation.mutate({
				id: appState.animalModalItem.id
			})

		setNameInput('')
		setWeightInput('')
		setSave(false)
		setDel(false)
		handleResetState()
	}

	return [
		handleSubmit,
		nameInput,
		setNameInput,
		weightInput,
		setWeightInput,
		setSave,
		setDel,
		handleResetState
	] as const
}
