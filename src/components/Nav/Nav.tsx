import { Logo } from '../Logo/Logo'
import userAvater from '../../assets/user_av.png'
import { useAuth0 } from '@auth0/auth0-react'
import { BiLogOut } from 'react-icons/bi'
import { Spinner } from '../Spinner/Spinner'

export const Nav = () => {
	const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
		useAuth0()

	return (
		<nav className="w-5/6 max-w-5xl flex justify-between items-center bg-sky-500 py-4 mt-4 px-4 rounded-md">
			<Logo />

			{!isAuthenticated ? (
				<button
					className="w-36 h-10 bg-sky-600 rounded-md flex items-center justify-center px-2 text-white font-bold"
					onClick={() => loginWithRedirect()}>
					{isLoading ? <Spinner /> : <p>Sign in</p>}
				</button>
			) : (
				<div className="h-10 bg-sky-600 rounded-md flex items-center px-2 justify-between text-white gap-3">
					{isLoading ? (
						<Spinner />
					) : (
						<>
							{' '}
							<div className="flex gap-2 justify-center items-center w-5/6">
								<img
									src={userAvater}
									className="w-7 h-7 rounded-full"
								/>
								<p className="font-white text-xs font-bold">
									{user?.nickname}
								</p>
							</div>
							<button
								className="bg-sky-700 h-8 w-8 rounded-md grid place-items-center"
								onClick={() => logout()}>
								<BiLogOut />
							</button>
						</>
					)}
				</div>
			)}
		</nav>
	)
}
