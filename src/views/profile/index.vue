<template>
	<div class="app">
		<head class="head">
			<Header :name="name" />
		</head>
		<main class="main">
			<ProfileComponent />
		</main>
	</div>
</template>

<script>
	import Header from '@/components/base-ui/Header';
	import ProfileComponent from '@/components/profile';

	export default {
		name: 'Profile',
		components: {
			Header,
			ProfileComponent,
		},
		data: () => ({
			name: 'Профиль',
		}),
	};
</script>

<style scoped lang="scss">
</style>
