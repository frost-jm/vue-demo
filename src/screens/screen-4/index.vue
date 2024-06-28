<template>
	<div class="container">
		<div class="full-screen screen-1">
			<div>
				<h1>Screen 4</h1>
				<YearEndButton
					label="Learn more"
					href="#"
					type="secondary"
					@click="goSlideDown"
				/>
			</div>
		</div>
		<div
			v-show="currentScreen === 1"
			class="full-screen screen-2"
		>
			<h1>Screen 4.1</h1>
		</div>
	</div>
</template>

<script>
import YearEndButton from '../../components/Button/index.vue';
import useSlideDown from '../../utils/slideDown.js';

export default {
	name: 'Screen-4',
	components: {
		YearEndButton,
	},

	setup() {
		const { currentScreen, goSlideDown } = useSlideDown();

		return {
			currentScreen,
			goSlideDown,
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

.screen-1 {
	background: aqua;
}

.screen-2 {
	background: rebeccapurple;
}
</style>
