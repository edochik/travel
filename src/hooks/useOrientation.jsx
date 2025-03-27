import { useState, useEffect } from 'react';


// Хук для определения ориентации экрана (портретная или ландшафтная)
export const useOrientation = () => {
	const [isPortrait, setIsPortrait] = useState(true);
	useEffect(() => {
		// Создаём media query для отслеживания ориентации экрана
		const mq = window.matchMedia("(orientation: portrait)");
		// Обработчик изменения ориентации
		const handleChange = (e) => setIsPortrait(e.matches);
		// Подписываемся на изменения ориентации
		mq.addEventListener('change', handleChange);
		// Устанавливаем начальное значение
		setIsPortrait(mq.matches);
		// Отписываемся при размонтировании компонента
		return () => mq.removeEventListener('change', handleChange);
	}, []);
	return isPortrait;
};
