import { useState } from 'react';

export function useToggle(initialValue: boolean) {
	const [isToggle, setIsToggle] = useState(initialValue);

	return [isToggle, setIsToggle] as const;
}
