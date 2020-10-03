<template>
	<button :disabled="disabled" :class="classes" @click="handleClick">
		<slot>Изменить</slot>
	</button>
</template>

<script>
	import { COLORS } from '@/utils/constants';

	export default {
		name: 'Button',
		props: {
			disabled: {
				type: Boolean,
				required: false,
				default: false,
			},
			color: {
				type: String,
				required: false,
				default: () => COLORS.gray,
			},
			flat: {
				type: Boolean,
				required: false,
				default: false,
			},
		},
		computed: {
			classes() {
				return {
					button: true,
					flat: this.flat,
					[this.color]: this.color,
				};
			},
		},
		methods: {
			handleClick(evt) {
				this.$emit('click', evt);
			},
		},
	};
</script>

<style scoped lang="scss">
	@import '@/scss/_button.scss';

	.button {
		@include button;
	}
</style>
