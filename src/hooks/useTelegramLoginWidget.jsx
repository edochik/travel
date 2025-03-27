// TelegramLogin.jsx
import { useEffect } from 'react';

const useTelegramLoginWidget = (botUsername) => {
	useEffect(() => {
		if (!document.getElementById('telegram-login-script')) {
			const script = document.createElement('script');
			script.src = 'https://telegram.org/js/telegram-widget.js?7';
			script.id = 'telegram-login-script';
			script.async = true;
			script.setAttribute('data-telegram-login', botUsername);
			script.setAttribute('data-size', 'large');
			script.setAttribute('data-userpic', 'false');
			script.setAttribute('data-request-access', 'write');
			script.setAttribute('data-callback', 'handleTelegramResponse');
			document.body.appendChild(script);
		}
		return () => {
			const script = document.getElementById('telegram-login-script');
			if (script) {
				script.remove();
			}
		};
	}, [botUsername]);
};