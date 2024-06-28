<template>
	<div
		class="YearEndReview-Overlay"
		@click="onOverlayClick"
	>
		Tap left to go back <br />
		And right to go next
	</div>
</template>

<script setup>
import './style.less';

const props = defineProps({
	onOverlayClick: {
		type: Function,
		default: () => {},
	},
});

const onOverlayClick = () => {
	props.onOverlayClick();
};
</script>
