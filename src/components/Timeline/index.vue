<template>
	<div class="timeline-container">
		<div class="progress-bars">
			<ProgressBar
				v-for="(screen, index) in screens"
				:key="index"
				:isActive="currentScreen === index"
				:isCompleted="currentScreen > index"
				@progress-complete="handleProgressComplete"
			/>
		</div>
		<div
			class="screen"
			ref="screen"
			@click="handleScreenClick"
		>
			<component
				:is="screens[currentScreen]"
				:key="currentScreen"
				:overlayVisible="overlayVisible && currentScreen === 1"
				@goToNext="goToNextScreen"
				@hide-overlay="hideOverlay"
			></component>
		</div>
	</div>
</template>

<script>
import ProgressBar from './../ProgressBar/index.vue';
import Screen1 from '../../screens/screen-1/index.vue';
import Screen2 from '../../screens/screen-2/index.vue';
import Screen3 from '../../screens/screen-3/index.vue';
import Screen4 from '../../screens/screen-4/index.vue';
import YearEndMood from '../../screens/year-end-mood/index.vue';

export default {
	name: 'TimeLine',
	components: {
		ProgressBar,
		Screen1,
		Screen2,
		Screen3,
		Screen4,
		YearEndMood,
	},
	data() {
		return {
			currentScreen: 0,
			screens: ['Screen1', 'Screen2', 'Screen3', 'Screen4', 'YearEndMood'],
			overlayVisible: true,
		};
	},

	methods: {
		handleProgressComplete() {
			if (this.currentScreen < this.screens.length - 1) {
				this.currentScreen += 1;
			} else {
				this.currentScreen = 0;
			}
		},
		handleScreenClick(event) {
			if (this.currentScreen === 0) return;

			const screenWidth = this.$refs.screen.clientWidth;
			const clickX = event.clientX - this.$refs.screen.getBoundingClientRect().left;
			const clickPosition = clickX / screenWidth;

			if (clickPosition < 0.3) {
				this.goToPreviousScreen();
			} else if (clickPosition > 0.7) {
				this.goToNextScreen();
			}
		},
		goToNextScreen() {
			if (this.currentScreen < this.screens.length - 1) {
				this.currentScreen += 1;
			}
		},
		goToPreviousScreen() {
			if (this.currentScreen > 0) {
				this.currentScreen -= 1;
			}
		},
		hideOverlay() {
			this.overlayVisible = false;
		},
	},
};
</script>
<!-- <script setup>
import { ref, onMounted } from 'vue';
import ProgressBar from './../ProgressBar/index.vue';
import Screen1 from '../../screens/screen-1/index.vue';
import Screen2 from '../../screens/screen-2/index.vue';
import Screen3 from '../../screens/screen-3/index.vue';
import YearEndMood from '../../screens/year-end-mood/index.vue';

const currentScreen = ref(0);
const overlayVisible = ref(true);
const screens = ref([Screen1, Screen2, Screen3, YearEndMood]);
const screen = ref(null);

const handleProgressComplete = () => {
	if (currentScreen.value < screens.value.length - 1) {
		currentScreen.value += 1;
	} else {
		currentScreen.value = 0;
	}
};

const handleScreenClick = (event) => {
	if (currentScreen.value === 0) return;

	const screenElement = screen.value;
	if (!screenElement) return;

	const screenWidth = screenElement.clientWidth;
	const clickX = event.clientX - screenElement.getBoundingClientRect().left;
	const clickPosition = clickX / screenWidth;

	if (clickPosition < 0.3) {
		goToPreviousScreen();
	} else if (clickPosition > 0.7) {
		goToNextScreen();
	}
};

const goToNextScreen = () => {
	if (currentScreen.value < screens.value.length - 1) {
		currentScreen.value += 1;
	}
};

const goToPreviousScreen = () => {
	if (currentScreen.value > 0) {
		currentScreen.value -= 1;
	}
};

const hideOverlay = () => {
	overlayVisible.value = false;
};

onMounted(() => {
	if (screen.value) {
		console.log('Screen element is available:', screen.value);
	}
});
</script> -->

<style lang="less">
.timeline-container {
	width: 100%;
	position: relative;
	margin: 0 auto;
	border: 1px solid #ccc;
}

.progress-bars {
	display: flex;
	width: 100%;
	gap: 8px;
	padding: 16px 8px;
	box-sizing: border-box;
	position: absolute;
	z-index: 2;
}
</style>
