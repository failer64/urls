import { useState } from 'react';

export function useError(initialValue: string) {
	const [error, setError] = useState(initialValue);

	return {
		error,
		setError,
	}
}
