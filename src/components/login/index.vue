<template>
	<div class="auth">
		<form class="auth__form" @submit.prevent="login">
			<h1 class="auth__heading">Авторизация</h1>
			<div class="auth__field">
				<label for="phone" class="auth__label">Номер телефона</label>
				<Input
					:value="phone"
					type="tel"
					color="gray"
					id="phone"
					class="auth__input"
				/>
			</div>

			<div class="auth__field">
				<label for="password" class="auth__label">Пароль</label>
				<Input
					:value="password"
					color="gray"
					type="password"
					id="password"
					class="auth__input"
				/>
			</div>

			<div class="auth__field">
				<a href="" class="auth__link">Забыли пароль?</a>
			</div>
		</form>

		<div class="auth__controls">
			<Button color="gray" class="auth__button">Зарегестрироваться</Button>
			<Button color="yellow" class="auth__button">Зарегестрироваться</Button>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';

	import Input from '@/components/base-ui/Input';
	import Button from '@/components/base-ui/Button';

	export default {
		name: 'LoginComponent',
		components: {
			Input,
			Button,
		},
		data: () => ({
			phone: '',
			password: '',
		}),
		methods: {
			...mapActions({ loginAction: 'login' }),

			async login() {
				const phone = this.phone;
				const password = this.password;

				try {
					await this.loginAction({ phone, password });
					await this.$router.push('/');
				} catch (err) {
					console.error(err);
				}
			},
		},
	};
</script>

<style scoped lang="scss">
</style>
