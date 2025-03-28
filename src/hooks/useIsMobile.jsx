import { useState, useEffect } from 'react';

const size = 600
// Хук для определения, является ли устройство мобильным (ширина экрана < 768px)
export const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < size);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < size);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return isMobile;
};