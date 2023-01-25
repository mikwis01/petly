import dogAvatar from '../../assets/dog_av.png'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export const ListItem = ({
	id,
	name,
	weight
}: {
	id: number
	name: string
	weight: number
}) => {
	const { toggleAnimalInfoModal } = useContext(AppContext)

	return (
		<div
			onClick={() => {
				toggleAnimalInfoModal({ id, name, weight })
			}}
			className="bg-sky-600 w-full h-12 flex items-center px-1 gap-2 rounded-md max-w-xs cursor-pointer">
			<div className="bg-sky-700 w-14 h-5/6 rounded-md flex flex-col items-center justify-center gap-1">
				<p className="font-black text-sm">{weight}</p>
				<p className="font-black text-[10px] leading-[10px] opacity-50">
					WEIGHT
				</p>
			</div>
			<img src={dogAvatar} className="h-7 w-7 rounded-full" />
			<p className="font-black text-white text-sm">
				{name.toUpperCase()}
			</p>
		</div>
	)
}
