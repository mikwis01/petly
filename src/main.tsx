import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import { ContextProvider } from './context/AppContext'
import { Auth0Provider } from '@auth0/auth0-react'
import './styles/index.css'

const queryClient = new QueryClient()
const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Auth0Provider
		domain={domain}
		clientId={clientId}
		authorizationParams={{
			redirect_uri: window.location.origin
		}}>
		<QueryClientProvider client={queryClient}>
			<ContextProvider>
				<App />
			</ContextProvider>
		</QueryClientProvider>
	</Auth0Provider>
)
