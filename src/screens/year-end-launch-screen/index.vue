<template>
	<div
		class="YearEndReview YearEndReview-Page2"
		:class="init ? 'active' : ''"
		ref="$element"
	>
		<img
			:src="`/src/assets/images/launch-screen-2.png`"
			alt=""
			class="YearEndReview-Page2__bkg-img position-absolute"
		/>
		<div class="YearEndReview-Page2__top">
			<img
				:src="`/src/assets/images/gcash-logo.svg`"
				alt=""
				class="YearEndReview-Page2__logo position-relative"
			/>
			<div class="YearEndReview-Page2__title">
				<img
					:src="`../../assets/images/fash-text.png`"
					alt=""
					class="YearEndReview-Page2__title-1"
				/>
				<img
					:src="`../../assets/images/back-text.png`"
					alt=""
					class="YearEndReview-Page2__title-2"
				/>
				<div class="YearEndReview-Page2__title-3">2023</div>
			</div>
		</div>
		<div class="YearEndReview-Page2__animate">
			<div class="YearEndReview-Page2__star-green position-absolute">
				<img
					:src="`../../assets/images/icons/global-icons/star-green-icon.svg`"
					alt=""
				/>
			</div>
			<div class="YearEndReview-Page2__semicircle position-absolute">
				<img
					:src="`../../assets/images/icons/global-icons/semicircle-icon.svg`"
					alt=""
				/>
			</div>
			<div class="YearEndReview-Page2__globe position-absolute">
				<img
					:src="`../../assets/images/icons/global-icons/globe-icon.svg`"
					alt=""
				/>
			</div>
			<div class="YearEndReview-Page2__star-blue position-absolute">
				<img
					:src="`../../assets/images/icons/global-icons/star-blue-icon.svg`"
					alt=""
				/>
			</div>
			<div class="YearEndReview-Page2__snowflake position-absolute">
				<img
					:src="`../../assets/images/icons/global-icons/snowflake-icon.svg`"
					alt=""
				/>
			</div>
		</div>
		<div class="YearEndReview-Page2__content">
			<div class="YearEndReview-Page2__heading">Let’s rewind your most memorable moments</div>
			<div class="YearEndReview-Page2__description">Learn more about your habits and discover the milestones you’ve made. This is only available until <strong>January 15, 2024</strong> so don’t miss it.</div>
		</div>
		<div class="YearEndReview-Page2__cta">
			<Button
				label="Let's go"
				href="#"
				type="primary"
				@click="onLetsGoTap"
			>
			</Button>
			<Button
				label="Show me later"
				href="#"
				type="secondary"
				@click="onShowMeLaterTap"
			>
			</Button>
			<Button
				label="Privacy policy"
				href="#"
				type="policy"
				@click="onPrivacyPolicyTap"
			>
			</Button>
		</div>
		<Loading :show="show" />
	</div>
</template>

<script setup>
import './style.less';
import Button from '../../components/Button/index.vue';

import { ref, onMounted } from 'vue';
import { BackgroundLoad } from '../../../utils/html.js';

const init = ref(false);
const show = ref(true);

const $element = ref(null);

defineProps({
	onLetsGoTap: Function,
	onShowMeLaterTap: Function,
	onPrivacyPolicyTap: Function,
});

onMounted(async () => {
	const bkg = await import('../../assets/images/gforest-general-stats-bkg.png');

	Promise.all([BackgroundLoad(bkg)]).then(([backgroundUrl]) => {
		if ($element.value) {
			$element.value.style.backgroundImage = `url(${backgroundUrl.url})`;
		}
		setTimeout(() => {
			init.value = true;
			show.value = false;
		}, 200);
	});
});
</script>
