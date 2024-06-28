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
					label: 'Category 1',
					points: 500,
					icon: 'https://img.icons8.com/?size=100&id=59751&format=png&color=000000',
					color: '#3498db',
				},
				{
					label: 'Category 2',
					points: 300,
					icon: 'https://img.icons8.com/?size=100&id=VbL8v3mm1qyp&format=png&color=000000',
					color: '#e74c3c',
				},
				{
					label: 'Category 3',
					points: 100,
					icon: 'https://img.icons8.com/?size=100&id=23400&format=png&color=000000',
					color: '#2ecc71',
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
