<template>
	<a
		:href="href"
		:class="['YearEndReview-Btn', type ? `YearEndReview-Btn__${type}` : '']"
		:alt="label"
		@click="handleClick"
	>
		<img
			v-if="icon"
			:src="icon"
		/>
		<slot></slot>
		<span>{{ label }}</span>
	</a>
</template>

<script setup>
import './style.less';

defineProps({
	label: String,
	href: String,
	icon: String,
	type: String,
	handleClick: {
		type: Function,
		default: () => {},
	},
});
</script>
