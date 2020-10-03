<template>
	<div class="about screen">
		<h1 class="about__title">Swiftly</h1>
		<p class="about__description">
			Мы - служба курьерской доставки товаров на кампус ДВФУ на о. Русский для
			сотрудников, студентов и преподавателей.
		</p>
		<div class="about__contancts">
			<h2 class="about__contact-us">Связаться с нами</h2>
			<div v-for="(item, idx) in contacts" :key="idx" class="about__contact">
				<Icon :name="item.icon" class="about__icon" />
				<span class="about__text">{{ item.text }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import Icon from '@/components/base-ui/Icon';

	export default {
		name: 'AboutComponent',
		components: {
			Icon,
		},
		data: () => ({
			contacts: [
				{ text: '+7 914 182-75-79', icon: 'phone' },
				{ text: 'limbus@gmail.com', icon: 'mail' },
			],
		}),
	};
</script>

<style scoped lang="scss">
	.about {
		color: var(--font-color-secondary);
		letter-spacing: 0.15px;
	}

	.about__title {
		margin: 0;
		margin-bottom: 45px;
		color: var(--font-color);
		font-size: 3rem;
		font-weight: 800;
		line-height: 3.5rem;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 0.065em;
	}

	.about__description {
		margin: 0;
		margin-bottom: 70px;
		font-size: 1rem;
		line-height: 1.5rem;
		text-align: center;
	}

	.about__contacts {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.about__contact-us {
		margin: 0;
		margin-bottom: 3.5rem;
		font-size: 1.5rem;
		font-weight: 800;
		line-height: 1.5rem;
		text-align: center;
		text-transform: uppercase;
	}

	.about__contact {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 3rem;
	}

	.about__icon {
		height: 3.5rem;
		width: 3.5rem;
		margin-bottom: 20px;
	}

	.about__text {
		font-size: 1.125rem;
		font-weight: 600;
		line-height: 1.5rem;
	}
</style>
