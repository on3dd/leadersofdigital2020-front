<template>
	<button @click="handleClick" class="icon">
		<img :src="imageUrl" alt="Icon" @click="handleClick" :class="classes" />
	</button>
</template>

<script>
	export default {
		name: 'Icon',
		props: {
			name: {
				type: String,
				required: true,
			},
			big: {
				type: Boolean,
				required: false,
				default: false,
			},
		},
		computed: {
			imageUrl() {
				const images = require.context('@/assets/icons', false, /\.svg$/);
				return images(`./${this.name}.svg`);
			},

			classes() {
				return {
					icon__image: true,
					big: this.big,
				};
			},
		},
		methods: {
			handleClick(evt) {
				evt.stopPropagation();
				this.$emit('click', evt);
			},
		},
	};
</script>

<style scoped lang="scss">
	.icon {
		margin: 0;
    /* padding: 0.25rem; */
    padding: 0;
		background-color: transparent;
		border: none;
	}

	.icon__image {
    height: inherit;
    width: inherit;

		&.big {
			height: 100%;
			width: 100%;
		}
	}
</style>
