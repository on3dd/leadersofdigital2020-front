<template>
	<label class="radio" :for="id" @click="handleClick">
		<input
			type="radio"
			:id="id"
			:name="name"
			:value="value"
			:checked="shouldBeChecked"
			class="radio-input"
		/>
		<span :for="id" class="radio-label">{{ label }}</span>
	</label>
</template>

<script>
	export default {
		name: 'BaseInputRadio',
		model: {
			prop: 'modelValue',
			event: 'input',
		},
		props: {
			id: {
				type: String,
				required: true,
			},
			name: {
				type: String,
				required: false,
				default: 'radio',
			},
			value: {
				type: String,
				requied: true,
			},
			label: {
				type: String,
				requied: true,
			},
			modelValue: {
				type: String,
				default: '',
			},
		},
		computed: {
			shouldBeChecked() {
				return this.modelValue === this.value;
			},
		},
		methods: {
			handleClick() {
				this.$emit('input', this.value);
			},
		},
	};
</script>

<style scoped lang="scss">
	.radio {
		display: block;
		position: relative;
	}
	[type='radio']:checked,
	[type='radio']:not(:checked) {
		position: absolute;
		margin: 0;
		height: 22px;
		width: 22px;
		top: -1px;
		left: -1px;
	}
	[type='radio']:checked + span,
	[type='radio']:not(:checked) + span {
		position: relative;
		padding-left: 29px;
		cursor: pointer;
		line-height: 20px;
		display: inline-block;
	}
	[type='radio']:checked + span:before,
	[type='radio']:not(:checked) + span:before {
		content: '';
		position: absolute;
		left: -1px;
		top: -1px;
		width: 18px;
		height: 18px;
		border-radius: 100%;
		background: var(--bg-color);
	}
	[type='radio']:checked + span:before {
		border: 2px solid var(--primary-color);
	}
	[type='radio']:not(:checked) + span:before {
		border: 2px solid var(--secondary-color);
	}
	[type='radio']:checked + span:after,
	[type='radio']:not(:checked) + span:after {
		content: '';
		width: 10px;
		height: 10px;
		background: var(--primary-color);
		position: absolute;
		top: 5px;
		left: 5px;
		border-radius: 100%;
		-webkit-transition: all 0.2s ease;
		transition: all 0.2s ease;
	}
	[type='radio']:not(:checked) + span:after {
		opacity: 0;
		-webkit-transform: scale(0);
		transform: scale(0);
	}
	[type='radio']:checked + span:after {
		opacity: 1;
		-webkit-transform: scale(1);
		transform: scale(1);
	}

	.radio-label {
		text-transform: uppercase;
	}

	.radio-label {
		font-size: 0.75rem;
	}

	[type='radio']:checked + .radio-label {
		font-weight: 800;
	}
</style>
