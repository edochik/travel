import { useState, useEffect } from 'react';

export const useOrientation = () => {
	const [isPortrait, setIsPortrait] = useState(true);
	useEffect(() => {
		const mq = window.matchMedia("(orientation: portrait)");
		const handleChange = (e) => setIsPortrait(e.matches);
		mq.addEventListener('change', handleChange);
		setIsPortrait(mq.matches);
		return () => mq.removeEventListener('change', handleChange);
	}, []);
	return isPortrait;
};
