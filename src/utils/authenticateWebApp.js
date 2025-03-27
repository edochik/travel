async function authenticateWebApp(dispatch) {
	if (
		window.Telegram &&
		window.Telegram.WebApp &&
		window.Telegram.WebApp.initDataUnsafe
	) {
		const initData = window.Telegram.WebApp.initDataUnsafe;
		console.log("initData:", initData);

		if (!initData.user) {
			console.log("Ошибка: Telegram не передает данные пользователя!");
			// dispatch({ type: "ERROR_POPUP", payload: "Telegram не передает данные пользователя" });
			return;
		}

		try {
			const response = await fetch(
				"https://ebox-la.global/api/v2/auth",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(initData),
				}
			);

			if (response.ok) {
				const data = await response.json();
				const token = response.headers.get("authorization"); // Извлекаем токен из заголовков ответа

				if (token) {
					localStorage.setItem("authToken", token);
					// toast.success("Вы успешно авторизованы!");
					console.log("Вы успешно авторизованы!");
					fetchUserHistory(token, dispatch);
				} else if (data.token) {
					// Если токен в теле ответа
					localStorage.setItem("authToken", data.token);
					// toast.success("Вы успешно авторизованы!");
					console.log("Вы успешно авторизованы!");
					fetchUserHistory(data.token, dispatch);
				} else {
					throw new Error("Токен не найден в ответе");
				}
			} else {
				throw new Error("Ошибка авторизации");
			}
		} catch (error) {
			console.error("Ошибка авторизации:", error);
			// dispatch({ type: "ERROR_POPUP", payload: "Ошибка авторизации через Telegram." });
		} finally {
			// dispatch({ type: "LOADER_POPUP", payload: "" });
		}
	} else {
		console.error("initData не найден, Telegram WebApp возможно не загружен.");
	}
}