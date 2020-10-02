<template>
	<button @click="handleClick" class="icon">
		<img :src="imageUrl" alt="Icon" @click="handleClick" class="icon__image" />
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
		},
		computed: {
			imageUrl() {
				const images = require.context('@/assets/icons', false, /\.svg$/);
				return images(`./${this.name}.svg`);
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
		padding: 0.25rem;
		background-color: transparent;
		border: none;
	}

	.icon__image {
    height: 16px;
	}
</style>
