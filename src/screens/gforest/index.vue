<script>
import './style.less';
import BarGraph from './../../components/BarGraph/index.vue';

export default {
	data() {
		return {
			visibleSection: 'intro',
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
	components: {
		BarGraph,
	},
	mounted() {
		this.fadeSections();
	},
	methods: {
		fadeSections() {
			setTimeout(() => {
				this.visibleSection = 'sub-intro';
				setTimeout(() => {
					this.visibleSection = 'main';
				}, 1500);
			}, 1500);
		},
	},
};
</script>

<template>
	<!-- <div class="wrapper">
		
	</div> -->
	<div class="wrapper">
		<BarGraph :categories="categories" />
	</div>
</template>

<style>
.wrapper {
	background: linear-gradient(180deg, #052312 0%, #0f3e24 100%);
	height: 100%;
}
</style>
