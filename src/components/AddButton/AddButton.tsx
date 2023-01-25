import { FaPlus } from 'react-icons/fa'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export const AddButton = () => {
	const { toggleAnimalAddModal } = useContext(AppContext)

	return (
		<button
			onClick={toggleAnimalAddModal}
			type="button"
			className="bg-amber-500 w-40 h-12 flex items-center justify-center max-w-xs rounded-md gap-3 mt-4">
			<p className="font-black text-sm">ADD ANIMAL</p>
			<FaPlus />
		</button>
	)
}
