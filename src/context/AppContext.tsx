import { createContext, Dispatch, SetStateAction, useState } from 'react'

type Props = {
	children?: React.ReactNode
}

type Animal = {
	id: number
	name: string
	weight: number
}

type AppState = {
	animalInfoModal: boolean
	animalAddModal: boolean
	animalModalItem: Animal
}

type Context = {
	appState: AppState
	handleResetState: () => void
	toggleAnimalAddModal: () => void
	toggleAnimalInfoModal: (animal: Animal) => void
}

const initailStateValue = {
	animalInfoModal: false,
	animalAddModal: false,
	animalModalItem: {} as Animal
}

export const AppContext = createContext({} as Context)

export const ContextProvider: React.FC<Props> = ({ children }) => {
	const [appState, setAppState] = useState(initailStateValue)

	const handleResetState = () => setAppState(initailStateValue)

	const toggleAnimalAddModal = () => {
		setAppState((prev) => ({
			...prev,
			animalAddModal: !prev.animalAddModal
		}))
	}

	const toggleAnimalInfoModal = (animal: Animal) => {
		setAppState((prev) => ({
			...prev,
			animalInfoModal: !prev.animalInfoModal,
			animalModalItem: animal
		}))
	}

	return (
		<AppContext.Provider
			value={{
				appState,
				handleResetState,
				toggleAnimalAddModal,
				toggleAnimalInfoModal
			}}>
			{children}
		</AppContext.Provider>
	)
}
