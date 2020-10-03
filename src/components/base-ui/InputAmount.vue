<template>
	<div :class="classes">
		<Button
			color="none"
			:flat="true"
			class="amount__control"
			@click="decrement"
		>
			-
		</Button>

		<div class="amount__value">
			<span class="amount__text">{{ value }}</span>
		</div>

		<Button
			color="none"
			:flat="true"
			class="amount__control"
			@click="increment"
		>
			+
		</Button>
	</div>
</template>

<script>
	import Button from '@/components/base-ui/Button';

	export default {
		name: 'InputAmount',
		components: {
			Button,
		},
		model: {
			prop: 'value',
			event: 'change',
		},
		props: {
			value: {
				type: Number,
				required: false,
				default: 0,
			},
			small: {
				type: Boolean,
				required: false,
				default: false,
			},
		},
		computed: {
			classes() {
				return {
					amount__wrapper: true,
					small: this.small,
				};
			},
		},
		methods: {
			decrement() {
				this.$emit('change', this.value - 1);
			},
			increment() {
				this.$emit('change', this.value + 1);
			},
		},
	};
</script>

<style scoped lang="scss">
	.amount__wrapper {
		display: flex;
		align-items: center;

		&.small {
			.amount__control,
			.amount__value {
				height: 20px;
				width: 20px;
				line-height: 20px;
			}
		}
	}

	.amount__control {
		height: 30px;
		width: 30px;
		padding: 0 !important;
	}

	.amount__value {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 30px;
		width: 30px;
		line-height: 30px;
		font-weight: 600;
		text-align: center;
		border-radius: 50%;
		background-color: #ebebeb;
	}

	.amount__text {
	}
</style>
