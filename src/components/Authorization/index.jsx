import { useEffect, useState } from "react";
import { fakeUser } from "./fakeUser.js";
import { API_URL } from "../../api/api.js";


const Authorization = () => {
	const [user, setUser] = useState(null); // Для хранения данных о пользователе
	const [error, setError] = useState(null); // Для хранения ошибки

	// Функция для имитации авторизации
	const authenticateWebApp = async () => {

		if (
			window.Telegram &&
			window.Telegram.WebApp &&
			window.Telegram.WebApp.initDataUnsafe
		) {
			const initData = window.Telegram.WebApp.initDataUnsafe;
			console.log("initData:", initData);

			// if (!initData.user) {
			//   console.log("Ошибка: Telegram не передает данные пользователя!");
			//   return;
			// }

			try {
				const response = await fetch(
					API_URL, // Замените на ваш API endpoint
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(fakeUser),
					}
				);
				if (response.ok) {
					// не используем так как достаем данные из заголовка
					// const data = await response.json();
					const token = response.headers.get("authorization"); // Извлекаем токен из заголовков ответа
					// if (token) {
					localStorage.setItem("authToken", token); // Сохраняем токен в localStorage
					// console.log("Вы успешно авторизованы!");
					setUser(token); // Сохраняем данные пользователя в локальное состояние
					// } else if (data.token) {
					// 	localStorage.setItem("authToken", data.token); // Сохраняем токен в localStorage
					// 	console.log("Вы успешно авторизованы!");
					// 	setUser(data.user); // Сохраняем данные пользователя в локальное состояние
					// } else {
					// 	throw new Error("Токен не найден в ответе");
					// }
				} else {
					throw new Error("Ошибка авторизации");
				}
			} catch (error) {
				console.error("Ошибка авторизации:", error);
				setError("Ошибка авторизации через Telegram");
			}
		} else {
			console.error("initData не найден, Telegram WebApp возможно не загружен.");

			// Имитация фейкового пользователя

			// Сохраняем фейкового пользователя в локальное состояние
			console.log("Используется фейковый пользователь:", fakeUser);
			setUser(fakeUser);
		}
	};

	useEffect(() => {
		console.log("~~~~RenderedWebApp~~~~");
		if (window.Telegram && window.Telegram.WebApp) {
			window.Telegram.WebApp.ready();
			window.Telegram.WebApp.expand();
			window.Telegram.WebApp.disableVerticalSwipes();
			window.Telegram.WebApp.setHeaderColor("#F9F9F9");
			window.Telegram.WebApp.setBackgroundColor("#F9F9F9");
			window.Telegram.WebApp.enableClosingConfirmation();

			authenticateWebApp(); // Вызываем авторизацию при загрузке
		} else {
			// Если Telegram WebApp не доступен, авторизуем фейкового пользователя
			authenticateWebApp();
		}
	}, []);

	return (
		<div>
			{/* {error && <p>{error}</p>}
			{user ? (
				<div>
					<h2>Добро пожаловать, {user.first_name}!</h2>
					<p>Фамилия: {user.last_name}</p>
					<p>Пользователь: {user.username}</p>
					<img src={user.photo_url} alt="User" />
				</div>
			) : (
				<p>Загрузка...</p>
			)} */}
		</div>
	);
};

export { Authorization };
