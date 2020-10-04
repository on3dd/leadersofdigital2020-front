<template>
	<div class="item">
		<div class="item__wrapper">
			<img
				v-if="item.image"
				:src="item.image"
				alt="Item image"
				class="item__image"
			/>
		</div>
		<div class="item__info">
			<h1 class="item__name">{{ item.name }}</h1>
			<p class="item__description">
				{{ item.description }}
			</p>
			<span class="item__price">{{ item.price || 'Не доступен' }}</span>
		</div>
		<div class="item__amount">
			<InputAmount v-model="amount" />
		</div>
		<div class="item__control">
			<Button color="yellow" class="item__button">В корзину</Button>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
	import Button from '@/components/base-ui/Button';
	import InputAmount from '@/components/base-ui/InputAmount';

	export default {
		name: 'ShopsIdCategoryComponentItem',
		components: {
			Button,
			InputAmount,
		},
		data: () => ({
			amount: 1,
		}),
		computed: {
			...mapGetters(['item']),
		},
		methods: {
			...mapActions(['fetchItem']),
		},
		async mounted() {
			await this.fetchItem();
		},
	};
</script>

<style scoped lang="scss">
	@import '@/scss/_button.scss';

	.item {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 30px 0;
		padding: 0 30px;
	}

	.item__wrapper {
		width: 100%;
		min-height: 200px;
	}

	.item__image {
		width: 100%;
	}

	.item__info {
		text-align: center;
		margin-bottom: 2rem;
	}

	.item__name {
		margin: 0;
		margin-bottom: 1rem;
		font-size: 1.5rem;
		font-weight: 800;
		text-transform: uppercase;
	}

	.item__description {
		margin: 0;
		padding: 0;
		text-transform: uppercase;
	}

	.item__price {
		font-size: 1.5rem;
		font-weight: 800;
	}

	.item__amount {
		display: flex;
		justify-content: center;
		margin-bottom: 1rem;
	}

	.item__control {
		width: 100%;
		margin-top: auto;
	}

	.item__button {
		@include button(18px 0, 1.125rem, 30px);
		width: 100%;
	}
</style>
