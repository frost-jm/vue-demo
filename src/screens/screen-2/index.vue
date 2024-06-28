<template>
	<div
		class="full-screen"
		style="background-color: #019401"
	>
		<div>
			<h1>Screen 2</h1>
			<YearEndButton
				label="Learn more"
				href="#"
				type="secondary"
				@click="goSlideDown"
			/>
		</div>
		<div
			v-if="overlayVisible"
			class="overlay"
			@click="hideOverlay"
		>
			Tap left to go back <br />
			And right to go next
		</div>
	</div>
	<div class="full-screen">
		<h1>Screen 2.1</h1>
	</div>
</template>

<script>
import YearEndButton from '../../components/Button/index.vue';

export default {
	name: 'Screen-2',
	components: {
		YearEndButton,
	},
	props: {
		overlayVisible: Boolean,
	},
	methods: {
		hideOverlay(event) {
			event.stopPropagation();
			this.$emit('hide-overlay');
		},
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

.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	color: white;
	font-size: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	cursor: pointer;
	transition: opacity 0.3s ease;
}
</style>
