import { Main } from './components/Main/Main'
import { List } from './components/List/List'
import { Nav } from './components/Nav/Nav'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import { AnimalAddModal } from './components/AnimalAddModal/AnimalAddModal'
import { AnimalInfoModal } from './components/AnimalInfoModal/AnimalInfoModal'
import { useAuth0 } from '@auth0/auth0-react'
import { SignInRequest } from './components/SignInRequest/SignInRequest'

const App = () => {
	const { appState } = useContext(AppContext)
	const { isAuthenticated } = useAuth0()

	return (
		<div className="bg-sky-400 flex justify-start items-center flex-col gap-4">
			<Nav />

			{!isAuthenticated ? (
				<SignInRequest />
			) : (
				<Main>
					<List />
				</Main>
			)}

			{appState.animalAddModal && <AnimalAddModal />}
			{appState.animalInfoModal && <AnimalInfoModal />}
		</div>
	)
}

export default App
