import { FaSave, FaTrash } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { useAddModal } from './useAddModal'

export const AnimalAddModal = () => {
	const [
		handleSubmit,
		nameInput,
		setNameInput,
		handleResetState,
		weightInput,
		setWeightInput,
		inputError
	] = useAddModal()

	return (
		<div className="absolute z-10 h-full w-full flex items-center justify-center backdrop-blur-md">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col w-4/5 max-w-sm bg-sky-600 h-auto py-20 rounded-md justify-center items-center gap-8 relative">
				<h4 className="text-white font-bold text-xl">Add animal</h4>
				<div className="w-5/6">
					<label
						htmlFor="name"
						className="w-full text-white font-bold">
						Name
					</label>
					<input
						id="name"
						value={nameInput}
						onChange={(e) => setNameInput(e.target.value)}
						className="w-full h-8 rounded-md mt-1 indent-2"
						type="text"
						placeholder="Name"
					/>
				</div>

				<div className="w-5/6">
					<label
						className="w-full text-white font-bold"
						htmlFor="weight">
						Weight
					</label>
					<input
						id="weight"
						value={weightInput}
						onChange={(e) => setWeightInput(e.target.value)}
						className="w-full h-8 rounded-md mt-1 indent-2"
						type="text"
						placeholder="Weight"
					/>
				</div>

				<div className="w-5/6 flex flex-col gap-3">
					{inputError && (
						<div className="w-full bg-red-500 h-8 grid items-center rounded-md text-center">
							<p className="text-white text-xs font-bold">
								Validation error - enter proper values!
							</p>
						</div>
					)}

					<button className="bg-amber-500 w-full h-12 flex items-center justify-center rounded-md gap-3 text-white font-bold">
						<p>SAVE</p>
						<FaSave />
					</button>
				</div>

				<button
					className="w-8 h-8 bg-red-500 rounded-md grid place-items-center text-white absolute top-4 left-4"
					onClick={handleResetState}>
					<IoMdClose />
				</button>
			</form>
		</div>
	)
}
