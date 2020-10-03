<template>
	<div :class="classes" ref="drawer">
		<nav class="sidebar__nav">
			<ul class="sidebar__items">
				<li v-for="(item, idx) in links" :key="idx" class="sidebar__item">
					<router-link :to="item.to" class="sidebar__link">
						{{ item.name }}
					</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'SideDrawer',
		props: {
			isVisible: {
				type: Boolean,
				required: true,
			},
		},
		data: () => ({
			links: [
				{ to: '/home', name: 'Главная' },
				{ to: '/profile/1', name: 'Профиль' },
				{ to: '/orders', name: 'Заказы' },
				{ to: '/about', name: 'О нас' },
			],
		}),
		computed: {
			classes() {
				return {
					sidebar: true,
					visible: this.isVisible,
				};
			},
		},
		mounted() {
			document.addEventListener('click', (evt) => {
				if (this.isVisible && evt.target !== this.$refs.drawer) {
					this.$emit('close');
				}
			});
		},
	};
</script>

<style scoped lang="scss">
	.sidebar {
		position: fixed;
		top: 0;
		left: calc(-271px * 2);
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		max-width: 271px;
		padding: 59px 1rem;
		background-color: var(--bg-color);
		box-shadow: 0 4px 50px 0 rgba(0, 0, 0, 0.5);
		transition: all 0.5s ease-out;

		&.visible {
			left: 0;
		}
	}

	.sidebar__nav {
    height: inherit;
	}

	.sidebar__items {
		display: flex;
    flex-direction: column;
    height: inherit;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.sidebar__item {
		position: relative;
		margin-bottom: 1rem;
		color: var(--font-color);
		font-size: 1.125rem;
		font-weight: 800;

		&:last-of-type {
      margin-top: auto;
      margin-bottom: 0;
		}
	}

	.sidebar__link {
		margin-left: 26px;
		color: inherit;
		font-size: inherit;
		font-weight: inherit;
		text-decoration: none;
		text-transform: uppercase;
	}

	.sidebar__link::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 1rem;
		width: 1rem;
		border-radius: 50%;
		background-color: var(--primary-color);
	}
</style>
