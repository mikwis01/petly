import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { useQueryClient, useMutation } from 'react-query'
import { createAnmial } from '../../api/axiosAnimalInstance'
import { nameRegex, weightRegex } from './inputRegex'

export const useAddModal = () => {
	const queryClient = useQueryClient()

	const { handleResetState } = useContext(AppContext)
	const [nameInput, setNameInput] = useState('')
	const [weightInput, setWeightInput] = useState('')
	const [inputError, setInputError] = useState(false)

	const createAnimalsMutation = useMutation(createAnmial, {
		onSuccess: () => {
			queryClient.invalidateQueries('getAnimals')
		}
	})

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const validateName = nameRegex(nameInput)
		const validateWeight = weightRegex(weightInput)

		if (validateName && validateWeight) {
			createAnimalsMutation.mutate({
				name: nameInput,
				weight: Number(weightInput)
			})

			handleResetState()
		} else {
			setInputError(true)

			setTimeout(() => {
				setInputError(false)
			}, 3000)
		}
	}

	return [
		handleSubmit,
		nameInput,
		setNameInput,
		handleResetState,
		weightInput,
		setWeightInput,
		inputError
	] as const
}
