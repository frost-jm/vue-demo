<template>
	<div
		class="full-screen"
		style="background-color: #bee5eb"
	>
		<div>
			<BarGraph :categories="categories" />
		</div>
	</div>
</template>

<script>
import BarGraph from './../../components/BarGraph/index.vue';

export default {
	components: {
		BarGraph,
	},
	data() {
		return {
			categories: [
				{
					label: 'Express Send',
					points: 1000,
					icon: 'https://img.icons8.com/?size=100&id=59751&format=png&color=000000',
					color: '#96C754',
				},
				{
					label: 'Bank Transfer',
					points: 750,
					icon: 'https://img.icons8.com/?size=100&id=VbL8v3mm1qyp&format=png&color=000000',
					color: '#F0BD45',
				},
				{
					label: 'Padala',
					points: 250,
					icon: 'https://img.icons8.com/?size=100&id=23400&format=png&color=000000',
					color: '#138744',
				},
			],
		};
	},
};
</script>

<style scoped>
.full-screen {
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f0f0f0;
	opacity: 1;
	animation: fade-in-out 2s linear forwards;
	transition: background-color 0.3s;
}
</style>
