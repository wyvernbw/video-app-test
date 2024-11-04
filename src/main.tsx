import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './components/ui/theme-provider';
import App from './app/app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
