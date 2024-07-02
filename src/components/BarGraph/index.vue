<!-- <template>
	<div class="bar-graph">
		<div
			v-for="(category, index) in categories"
			:key="index"
			class="bar-container"
		>
			<div
				class="bar"
				:style="{
					backgroundColor: category.color,
					height: '0%',
				}"
				:data-height="calculateHeight(category.points) + '%'"
			>
				<img
					:src="category.icon"
					alt="icon"
					class="icon"
				/>
				<span class="points">{{ category.points }}</span>
			</div>
			<div class="label">{{ category.label }}</div>
		</div>
	</div>
</template> -->

<template>
	<div class="YearEndBarGraph">
		<div
			v-for="(category, index) in categories"
			:key="index"
			class="YearEndBarGraph__bar-container"
		>
			<div
				class="YearEndBarGraph__bar"
				:style="{
					backgroundColor: category.color,
					height: '2%',
				}"
				:data-height="calculateHeight(category.points) + '%'"
			>
				<span class="YearEndBarGraph__points">{{ category.points }}</span>

				<img
					:src="category.icon"
					alt="icon"
					class="YearEndBarGraph__icon"
				/>
			</div>
			<div class="YearEndBarGraph__label">{{ category.label }}</div>
		</div>
	</div>
</template>

<script>
import './style.less';
import { ref, onMounted } from 'vue';

export default {
	name: 'BarGraph',
	props: {
		categories: {
			type: Array,
			required: true,
			validator(value) {
				return value.every((category) => 'label' in category && 'points' in category && 'icon' in category && 'color' in category);
			},
		},
	},
	setup(props) {
		const maxPoints = ref(0);

		const calculateMaxPoints = () => {
			maxPoints.value = Math.max(...props.categories.map((cat) => cat.points));
		};

		const calculateHeight = (points) => {
			return (points / maxPoints.value) * 100;
		};

		const animateBars = () => {
			const bars = document.querySelectorAll('.YearEndBarGraph__bar');
			bars.forEach((bar) => {
				setTimeout(() => {
					bar.style.height = bar.dataset.height;
					bar.style.transition = 'height 1s ease-in-out';
				}, 100);
			});
		};

		onMounted(() => {
			calculateMaxPoints();
			animateBars();
		});

		return {
			maxPoints,
			calculateHeight,
		};
	},
};
</script>
