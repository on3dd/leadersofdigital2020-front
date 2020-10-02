<template>
	<div :class="classes" ref="drawer"></div>
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
				if (evt.target !== this.$refs.drawer) {
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
		background-color: #fff;
		box-shadow: 0 4px 50px 0 rgba(0, 0, 0, 0.5);
		transition: all 0.5s ease-out;

		&.visible {
			left: 0;
		}
	}
</style>
