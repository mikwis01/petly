import { Spinner } from '../Spinner/Spinner'
import { useGetWeatherInfo } from './useGetWeatherInfo'

export const WeatherInfo = () => {
	const { data, isSuccess, isLoading } = useGetWeatherInfo()

	return (
		<div className="w-5/6 max-w-5xl py-4 px-4 bg-sky-500 rounded-md flex flex-col items-center justify-center text-white font-bold">
			{isLoading && <Spinner />}
			{isSuccess && (
				<>
					<p className="text-lg">{data.current.temp_c} &#8451;</p>
					<img
						className="w-12 h-12"
						src={data.current.condition.icon}
						alt={data.current.condition.text}
					/>
				</>
			)}
		</div>
	)
}
