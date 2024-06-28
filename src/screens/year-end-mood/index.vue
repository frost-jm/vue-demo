<template>
	<div
		v-show="currentDiv === 1"
		class="full-screen fade"
		style="background-color: #019401"
	>
		<h1>First Div</h1>
	</div>
	<div
		v-show="currentDiv === 2"
		class="full-screen fade"
		style="background-color: #3498db"
	>
		<h1>Second Div</h1>
	</div>
	<div
		v-show="currentDiv === 3"
		class="full-screen fade-in mood-container"
		:style="{ backgroundColor: currentMood.color }"
	>
		<div class="mood-display">
			<span class="emoji">{{ currentMood.emoji }}</span>
			<span class="mood-text">{{ currentMood.text }}</span>
		</div>
		<input
			type="range"
			min="0"
			max="4"
			v-model="moodIndex"
			class="slider"
		/>
		<div class="cta-buttons">
			<button @click="ctaAction(currentMood.text)">Next</button>
			<button @click="ctaAction('Skip')">Skip</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentDiv: 1,
			moodIndex: 0,
			moods: [
				{ emoji: '😞', color: '#f5c6cb', text: 'Awful' },
				{ emoji: '😕', color: '#ffeeba', text: 'Could be better' },
				{ emoji: '😐', color: '#d1ecf1', text: 'Just OK' },
				{ emoji: '🙂', color: '#c3e6cb', text: "It's getting there" },
				{ emoji: '😁', color: '#bee5eb', text: 'Amazing' },
			],
		};
	},
	mounted() {
		setTimeout(this.nextDiv, 1500);
	},
	computed: {
		currentMood() {
			return this.moods[this.moodIndex];
		},
		moodClass() {
			return this.currentMood.class;
		},
	},
	methods: {
		nextDiv() {
			if (this.currentDiv < 3) {
				this.currentDiv++;
				setTimeout(this.nextDiv, 1500);
			}
		},
		ctaAction(action) {
			alert(`${action}`);
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

.fade {
	animation: fade-in-out 2s linear forwards;
}

.fade-in {
	animation: fade-in 2s linear forwards;
}

@keyframes fade-in-out {
	0% {
		opacity: 0;
	}
	25% {
		opacity: 1;
	}
	75% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}

@keyframes fade-in {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.mood-display {
	font-size: 2rem;
	margin: 20px 0;
	display: flex;
	flex-direction: column;
	text-align: center;
}
.slider {
	width: 100%;
	margin: 20px 0;
}

.mood-container {
	flex-direction: column;
	padding: 0 48px;
	box-sizing: border-box;
}

.awful {
	background-color: #ff4d4d;
}
.could-be-better {
	background-color: #ff944d;
}
.just-ok {
	background-color: #ffd24d;
}
.getting-there {
	background-color: #bfff4d;
}
.amazing {
	background-color: #4dff88;
}
</style>
