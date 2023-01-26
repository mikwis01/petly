import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { useQueryClient, useMutation } from 'react-query'
import { createAnmial } from '../../api/axiosAnimalInstance'

export const useAddModal = () => {
	const { handleResetState } = useContext(AppContext)
	const [nameInput, setNameInput] = useState('')
	const [weightInput, setWeightInput] = useState('')

	const queryClient = useQueryClient()

	const createAnimalsMutation = useMutation(createAnmial, {
		onSuccess: () => {
			queryClient.invalidateQueries('getAnimals')
		}
	})

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		createAnimalsMutation.mutate({
			name: nameInput,
			weight: Number(weightInput)
		})

		setNameInput('')
		setWeightInput('')
		handleResetState()
	}

	return [
		handleSubmit,
		nameInput,
		setNameInput,
		handleResetState,
		weightInput,
		setWeightInput,
		handleResetState
	] as const
}
