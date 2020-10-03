<template>
	<div class="range__wrapper">
		<Button color="yellow" :flat="true" class="range__control range__button">
			-50
		</Button>
		<Button color="gray" :flat="true" class="range__control range__button">
			-10
		</Button>

		<Input v-model="value" type="number" class="range__control range__input" />

		<Button color="gray" :flat="true" class="range__control range__button">
			+10
		</Button>
		<Button color="yellow" :flat="true" class="range__control range__button">
			+50
		</Button>
	</div>
</template>

<script>
	import Button from '@/components/base-ui/Button';
	import Input from '@/components/base-ui/Input';

	export default {
		name: 'InputRange',
		components: {
			Button,
			Input,
		},
		model: {
			prop: 'value',
			event: 'input',
		},
		props: {
			value: {
				type: Number,
				required: false,
				default: 0,
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

	.range__wrapper {
		display: flex;
	}

	.range__control {
		flex: 0;
		font-size: 14px;

		&.range__button {
			flex: 0 0 40px;
			height: 40px;
			padding: 0;
			text-align: center;
		}

		&.range__input {
			@include input(5px 10px, 1.125rem, 30px);

			flex: 1;
			min-width: 0;
			/* text-align: center; */
			background-color: #ebebeb;
		}

		&:not(:last-child) {
			margin-right: 0.5rem;
		}
	}
</style>
