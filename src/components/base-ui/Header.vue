<template>
	<div class="header">
		<div class="header__topbar">
			<div class="header__left">
				<Icon name="menu" class="header__icon" @click="toggleIsVisible" />
			</div>
			<div class="header__center">
				<h1 class="header__name">{{ name }}</h1>
			</div>
			<div class="header__right">
				<Icon name="search" class="header__icon" />
				<Icon name="bucket" class="header__icon" />
			</div>
		</div>
		<div class="header__sidebar">
			<SideDrawer :is-visible="isVisible" @close="toggleIsVisible" />
		</div>
	</div>
</template>

<script>
	import Icon from '@/components/base-ui/Icon';
	import SideDrawer from '@/components/base-ui/SideDrawer';

	export default {
		name: 'Header',
		components: {
			Icon,
			SideDrawer,
		},
		props: {
			name: {
				type: String,
				required: true,
			},
		},
		data: () => ({
			isVisible: false,
		}),
		methods: {
			toggleIsVisible() {
				this.isVisible = !this.isVisible;
			},
		},
	};
</script>

<style scoped lang="scss">
	.header {
		position: fixed;
    width: 100%;
    z-index: 100;
	}

	.header__topbar {
		display: flex;
		width: inherit;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: var(--primary-color);
	}

	.header__name {
		margin: 0;
		padding: 0.25rem;
		font-size: 1.25rem;
		text-transform: uppercase;
	}

	.header__left,
	.header__right {
		display: flex;
		/* align-items: flex-start; */
		align-items: center;
	}

	.header__center {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}

	.header__icon {
		&:not(:first-child) {
			margin-left: 0.25rem;
		}
	}
</style>
