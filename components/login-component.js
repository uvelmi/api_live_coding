import { loginUser } from "../api.js";

export function renderLoginComponent({ appEl, setToken, fetchTodosAndRender }) {
	const appHtml = `<h1>Список задач</h1>

				<div class="form">
      <h3 class="form-title">Форма входа</h3>
      <div class="form-row">
       Логин
        <input type="text" id="login-input" class="input"/>
		  <br />
		  <br />
		  Пароль
        <input type="password" id="password-input" class="input"/>
      </div>
      <br />
      <button class="button" id="login-button">Войти</button>
    </div>
	`;
      appEl.innerHTML = appHtml;

		document.getElementById('login-button').addEventListener('click', () => {
			const login = document.getElementById("login-input").value;
			const password = document.getElementById("password-input").value;

			if (!login) {
				alert("Введите логин");
				return;
			}
			
			if (!password) {
				alert("Введите пароль");
				return;
			}

			loginUser({
				login: login,
				password: password,
			}).then((user) => {
					// setToken("Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k");
				setToken(`Bearer ${user.user.token}`);
				fetchTodosAndRender();
		})
		.catch((error) => {
			//TODO: Выводить алерт красиво
			alert(error.message);
		});
	});
}