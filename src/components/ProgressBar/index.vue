<template>
	<div class="progress-bar">
		<div
			class="progress"
			:style="{ width: `${progress}%` }"
		></div>
	</div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
	duration: {
		type: Number,
		default: 1500,
	},
	isActive: {
		type: Boolean,
		default: false,
	},
	isCompleted: {
		type: Boolean,
		default: false,
	},
});

const progress = ref(0);

watch(
	() => props.isActive,
	(newVal) => {
		if (newVal) {
			progress.value = 100;
		} else {
			resetProgress();
		}
	}
);

watch(
	() => props.isCompleted,
	(newVal) => {
		if (newVal) {
			progress.value = 100;
		}
	}
);

function resetProgress() {
	if (!props.isCompleted) {
		progress.value = 0;
	}
}

onMounted(() => {
	if (props.isActive) {
		progress.value = 100;
	}
});
</script>

<style lang="less">
.progress-bar {
	height: 4px;
	background-color: #e0e0e0;
	border-radius: 2px;
	overflow: hidden;
	max-width: 50px;
	width: 100%;

	.progress {
		height: 100%;
		background-color: #3b82f6;
		transition: width 0.3s linear;
	}
}
</style>
