import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);

		fetch(url, { signal: controller.signal })
			.then((res) => res.json())
			.then((json) => setData(json))
			.catch((err) => setError(err))
			.finally(() => setLoading(false));

		return () => {
			controller.abort();
		};
	}, [url]);

	return { data, loading, error };
};

export default useFetch;
