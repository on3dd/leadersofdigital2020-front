<template>
	<div class="profile">
		<div class="profile__wrapper">
			<Icon name="profile" :big="true" />
		</div>
		<div class="profile__rating">
			<Icon name="star" class="profile__star" />
			<span class="profile__score">2.28</span>
		</div>
		<div class="profile__info">
			<h1 class="profile__name">Иван Базанов</h1>
			<span class="profile__phone">+7 (800) 555 35 35</span>
			<span class="profile__address">Кампус ДВФУ, Корпус 7.2</span>
		</div>
		<div class="profile__control">
			<button class="profile__button">Изменить</button>
		</div>
	</div>
</template>

<script>
	import Icon from '@/components/base-ui/Icon';

	export default {
		name: 'ProfileComponent',
		components: {
			Icon,
		},
	};
</script>

<style scoped lang="scss">
	.profile {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 50px 42px;
	}

	.profile__wrapper {
		display: flex;
		height: 292px;
		width: 292px;
	}

	.profile__rating {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1.5rem 0;
	}

	.profile__rating .profile__star {
		height: 28px;
		width: 28px;
		margin-right: 0.25rem;
	}

	.profile__score {
		color: var(--primary-color);
		font-size: 2.25rem;
		font-weight: 600;
	}

	.profile__info {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-transform: uppercase;
		margin-bottom: 2rem;
	}

	.profile__name {
		margin: 0;
		margin-bottom: 1rem;
		font-size: 2.25rem;
		text-align: center;
	}

	.profile__phone {
		margin-bottom: 1rem;
		color: var(--font-color-secondary);
		font-weight: 600;
	}

	.profile__address {
		color: var(--font-color-secondary);
		font-weight: 600;
	}
</style>
