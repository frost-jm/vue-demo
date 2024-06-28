<template>
	<div
		class="drawer"
		:class="{ open: isOpen, 'fade-out': !isOpen && isVisible }"
		@transitionend="handleTransitionEnd"
	>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	name: 'PullUpDrawer',
	props: {
		isOpen: {
			type: Boolean,
			required: true,
		},
	},
	setup(props, { emit }) {
		const isVisible = ref(false);

		const closeDrawer = () => {
			emit('update:isOpen', false);
		};

		const handleTransitionEnd = () => {
			if (!props.isOpen) {
				isVisible.value = false;
			}
		};

		watch(
			() => props.isOpen,
			(newVal) => {
				if (newVal) {
					isVisible.value = true;
				}
			}
		);

		return {
			isVisible,
			closeDrawer,
			handleTransitionEnd,
		};
	},
};
</script>

<style>
.drawer {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #ffffff;
	transition: opacity 0.3s ease, transform 0.3s ease;
	transform: translateY(100%);
	opacity: 0;
	overflow: scroll;
	z-index: 5;

	&.open {
		transform: translateY(0);
		opacity: 1;
	}
	&.fade-out {
		transform: translateY(0) !important;
		opacity: 0;
	}
}
</style>
