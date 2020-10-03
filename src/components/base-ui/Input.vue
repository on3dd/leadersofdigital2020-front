<template>
	<input :value="value" :type="type" class="input" @input="handleInput" />
</template>

<script>
	export default {
		name: 'Input',
		model: {
			prop: 'value',
			event: 'input',
		},
		props: {
			value: {
				required: false,
				default: '',
			},
			type: {
				type: String,
				required: false,
				default: 'text',
			},
		},
		methods: {
			handleInput(value) {
				this.$emit('input', value);
			},
		},
	};
</script>

<style scoped lang="scss">
	@import '@/scss/_input.scss';

	.input {
    @include input;

		text-align: center;
		background-color: #ebebeb;
	}
</style>
