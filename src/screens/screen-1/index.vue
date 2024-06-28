<template>
	<div
		class="full-screen"
		:style="{ backgroundColor: backgroundColor }"
	>
		<div
			v-if="showIntro"
			class="intro"
		>
			<transition-group
				tag="div"
				name="fade"
			>
				<div
					v-for="(sentence, index) in sentences"
					:key="index"
					v-show="currentSentenceIndex === index"
					class="intro-sentence"
				>
					{{ sentence }}
				</div>
			</transition-group>
		</div>

		<div
			v-else
			class="main"
		>
			<div>
				<h1>Screen 1</h1>
				<YearEndButton
					label="Go to Next"
					href="#"
					type="secondary"
					@click="showPullUpDrawer = true"
				></YearEndButton>
			</div>
		</div>

		<Drawer v-model:isOpen="showPullUpDrawer">
			<div class="year">
				2024
				<YearEndButton
					label="Close"
					href="#"
					type="secondary"
					@click="closeDrawer"
				/>
			</div>
			<div class="achievements">
				<YearEndButton
					label="Go to Next"
					href="#"
					type="secondary"
					@click="goToNextScreen"
				/>
			</div>
		</Drawer>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import YearEndButton from '../../components/Button/index.vue';
import Drawer from '../../components/Drawer/index.vue';

export default {
	name: 'Yearend-Milestone',
	components: {
		YearEndButton,
		Drawer,
	},
	emits: ['goToNext'],
	setup(props, { emit }) {
		const showIntro = ref(true);
		const currentSentenceIndex = ref(0);
		const sentences = ref(['Grabe ang 2024!', 'Ang dami natin ginawa', 'Ang dami nating goals.', 'At ang dami din nating wins.']);
		const backgroundColor = ref('#cccccc');
		const showPullUpDrawer = ref(false);

		const goToNextScreen = () => {
			emit('goToNext');
		};

		const nextSentence = () => {
			if (currentSentenceIndex.value < sentences.value.length - 1) {
				currentSentenceIndex.value++;
			} else {
				showIntro.value = false;
				backgroundColor.value = '#f5c6cb';
			}
		};

		const closeDrawer = () => {
			showPullUpDrawer.value = false;
		};

		onMounted(() => {
			setInterval(() => {
				nextSentence();
			}, 2000);
		});

		return {
			showIntro,
			currentSentenceIndex,
			sentences,
			backgroundColor,
			showPullUpDrawer,
			goToNextScreen,
			nextSentence,
			closeDrawer,
		};
	},
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.intro {
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 100%;
}
.intro-sentence {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 5vw;
	width: 100%;
}
.full-screen {
	position: relative;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	transition: background-color 0.3s;
}

.main,
.drawer {
	height: 100%;
	width: 100%;
}

.main > div,
.year,
.achievements {
	height: 100vh;
	display: flex;
	justify-content: center;
	width: 100%;
}

.year {
	background: aqua;
}
.achievements {
	background: rebeccapurple;
}
</style>
