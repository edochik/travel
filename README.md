// https://trip.sjp-asia.group/api/docs ручка

Логика перехода:

1. Первый раз заходит, загружаем прелоад => потом меняем на основной контент.
2. Если изменяет размеры показываем переверни телефон [NOK].
3. Если это компьютер по размерам определяем перейди в телеграмм [NOK].
4. Если он открыл комп, то мы должны показать сразу ему штрихкод, без preload.

Проблема:

1. При перезагрузке device-check, необходимо чтобы так же отображение было device-check.
2. При перезагрузке rotate то же самое.

Use this token to access the HTTP API: 7481744980:AAHicsyLVa_eRY4WSNTa404zKMXFh5f2NFc

README
1. /newBote
2. создать бота [MyFirstBot_example]
3. Получите токен для вашего бота через @BotFather.[Ok] [Toke: 7481744980:AAHicsyLVa_eRY4WSNTa404zKMXFh5f2NFc ]
4. Настройте URL для Web Login через @BotFather: 
 
- /setdomain; [Ok]
- вводим свой URL; [Ok]
- должны получить подтверждение; [Ok]

5.  Добавьте Telegram Login Widget в ваше приложение

https://trip.sjp-asia.group/api/docs

web ap
человек заходит в бота 

