<template>
	<div class="home">
		<head class="head">
			<Header :name="name" />
		</head>
		<main class="main">
			<router-view />
		</main>
	</div>
</template>

<script>
	import Header from '@/components/base-ui/Header';

	export default {
		name: 'Home',
		components: {
			Header,
		},
		data: () => ({
			name: 'Swifty',
		}),
	};
</script>

<style scoped lang="scss">
	.home {
	}

	.head {
		position: relative;
		display: flex;
		margin-bottom: 59px;
	}
</style>
