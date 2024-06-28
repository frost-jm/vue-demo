<template>
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
</template>

<script>
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
	data() {
		return {
			maxPoints: 0,
		};
	},
	mounted() {
		this.calculateMaxPoints();
		this.animateBars();
	},
	methods: {
		calculateMaxPoints() {
			this.maxPoints = Math.max(...this.categories.map((cat) => cat.points));
		},
		calculateHeight(points) {
			return (points / this.maxPoints) * 100;
		},
		animateBars() {
			this.$nextTick(() => {
				const bars = this.$el.querySelectorAll('.bar');
				bars.forEach((bar) => {
					setTimeout(() => {
						bar.style.height = bar.dataset.height;
						bar.style.transition = 'height 1s ease-in-out';
					}, 100);
				});
			});
		},
	},
};
</script>

<style scoped>
.bar-graph {
	display: flex;
	align-items: baseline;
	justify-content: space-around;
	height: 300px;
	border: 1px solid #ccc;
	padding: 10px;
}

.bar-container {
	text-align: center;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
}

.bar {
	position: relative;
	width: 50px;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	border-radius: 5px;
}

.icon {
	position: absolute;
	top: 5px;
	width: 20px;
	height: 20px;
}

.points {
	position: absolute;
	bottom: 5px;
	color: white;
	font-weight: bold;
}

.label {
	margin-top: 10px;
}
</style>
