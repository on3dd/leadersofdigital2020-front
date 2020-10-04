<template>
	<div class="orders screen">
		<h2 class="orders__section">Актуальные</h2>
		<ul class="orders__list">
			<li v-for="(item, idx) in currentOrders" :key="idx" class="orders__item">
				<span class="orders__info">{{ item.name }}</span>
				<Button color="yellow" class="orders__button">Узнать статус</Button>
			</li>
		</ul>

		<h2 class="orders__section">Предыдущие</h2>
		<ul class="orders__list">
			<li v-for="(item, idx) in previousOrders" :key="idx" class="orders__item">
				<span class="orders__info">{{ item.name }}</span>
				<Button color="gray" class="orders__button">Повторить</Button>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import Button from '@/components/base-ui/Button';

	export default {
		name: 'AboutComponent',
		components: {
			// Icon,
			Button,
		},
		data: () => ({}),
		computed: {
			...mapGetters(['currentOrders', 'previousOrders']),
		},
	};
</script>

<style scoped lang="scss">
	.orders {
		align-items: flex-start;
	}

	.orders__section {
		margin: 0;
		margin-bottom: 1.5rem;
		font-weight: 800;
		letter-spacing: 0.15px;
		text-transform: uppercase;
	}

	.orders__list {
		display: block;
		margin: 0;
		margin-bottom: 50px;
		padding: 0;
		width: 100%;
		list-style: none;
	}

	.orders__item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: nowrap;
		margin-bottom: 0.5rem;
	}

	.orders__info {
		flex: 1;
	}

	.orders__button {
		font-size: 14px;
		line-height: 32px;
		height: 32px;
		padding: 0 10px;
	}
</style>
