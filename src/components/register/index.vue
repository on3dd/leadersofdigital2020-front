<template>
	<div class="auth">
		<form class="auth__form" @submit.prevent="register">
			<h1 class="auth__heading">Регистрация</h1>
			<div class="auth__field">
				<label for="phone" class="auth__label">Номер телефона</label>
				<Input
					v-model="phone"
					type="tel"
					color="gray"
					id="phone"
					class="auth__input"
				/>
			</div>

			<div class="auth__field">
				<label for="password" class="auth__label">Пароль</label>
				<Input
					v-model="password"
					color="gray"
					type="password"
					id="password"
					class="auth__input"
				/>
			</div>

			<div class="auth__field">
				<router-link to="/login" class="auth__link">Уже с нами?</router-link>
			</div>
		</form>

		<div class="auth__controls">
			<Button color="yellow" class="auth__button" @click="register">
				Зарегистрироваться
			</Button>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';

	import Input from '@/components/base-ui/Input';
	import Button from '@/components/base-ui/Button';

	export default {
		name: 'RegisterComponent',
		components: {
			Input,
			Button,
		},
		data: () => ({
			phone: '',
			password: '',
		}),
		computed: {
			phoneComputed: {
				get() {
					return this.phone;
				},

				set(val) {
					this.phone = val;
				},
			},
			passwordComputed: {
				get() {
					return this.password;
				},

				set(val) {
					this.password = val;
				},
			},
		},
		methods: {
			...mapActions({ registerAction: 'register' }),

			async register() {
				const phone = this.phone;
				const password = this.password;

				try {
					await this.registerAction({ phone, password });
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
