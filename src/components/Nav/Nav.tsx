import { Logo } from '../Logo/Logo'
import userAvater from '../../assets/user_av.png'

export const Nav = () => {
	return (
		<nav className="w-5/6 max-w-5xl flex justify-between items-center bg-sky-500 py-4 mt-4 px-4 rounded-md">
			<Logo />
			<div className="w-36 h-10 bg-sky-600 rounded-md flex items-center px-2 gap-2">
				<img src={userAvater} className="w-7 h-7 rounded-full" />
				<p className="font-black text-xs text-white">MAREK</p>
			</div>
		</nav>
	)
}
