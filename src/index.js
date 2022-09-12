import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
