import React, { useState, useEffect } from 'react';
import { fetchData } from './services/fetchData';

interface AppProps {}

const App = (props: AppProps) => {
	const [data, setData] = useState('');

	useEffect(() => {
		fetchData('/api/chirps')
			.then(res => res.json())
			.then(data => setData(data.message))
			.catch(e => console.log('[fetch erorr]', e));
	}, []);

	return (
		<div className="mx-auto mt-5 w-25">
			
		</div>
	);
};

export default App;