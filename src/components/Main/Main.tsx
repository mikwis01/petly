type Props = {
	children?: React.ReactNode
}

export const Main: React.FC<Props> = ({ children }) => {
	return (
		<div className="w-5/6 max-w-5xl py-4 px-4 bg-sky-500 rounded-md grid place-items-center font-bold text-white">
			<h1 className="text-center text-2xl py-4 landscape:py-2 landscape:text-xl">
				Dogs ready to be taken for a walk!
			</h1>
			{children}
		</div>
	)
}
