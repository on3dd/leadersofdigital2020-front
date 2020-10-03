<template>
	<nav class="navbar">
		<ul class="navbar__list">
			<li v-for="(item, idx) in links" :key="idx" class="navbar__item">
				<router-link
					:to="item.to"
					:disabled="item.disabled"
					:event="item.disabled ? null : 'click'"
					class="navbar__link"
				>
					{{ item.name }}
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'HomeNavbar',
		data: () => ({
			links: [
				{ name: 'Магазины', to: '/home/shops' },
				{ name: 'Товары', to: '/home/products', disabled: true },
			],
		}),
	};
</script>

<style scoped lang="scss">
	.navbar {
		display: block;
	}

	.navbar__list {
		display: flex;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.navbar__item {
		flex: 1;
		display: flex;
	}

	.navbar__link {
		height: 100%;
		width: 100%;
		padding: 1rem 0.5rem;
		text-align: center;
		text-transform: uppercase;
		text-decoration: none;
		color: var(--bg-color);
		font-size: 1.3rem;
		font-weight: 800;
		background-color: var(--secondary-color);
		/* transition: all 0.1s ease-out; */

		&.router-link-active {
			color: var(--font-color);
			background-color: var(--bg-color);
		}
	}
</style>
