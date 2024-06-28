<template>
	<YearEndLaunchScreen
		v-if="showLaunchScreen"
		:onLetsGoTap="handleLetsGoTap"
		:onShowMeLaterTap="handleShowMeLaterTap"
		:onPrivacyPolicyTap="handlePrivacyPolicyTap"
	/>
	<Timeline v-else />
</template>

<script setup>
import { ref } from 'vue';
import YearEndLaunchScreen from './screens/year-end-launch-screen/index.vue';
import Timeline from './components/Timeline/index.vue';
import './assets/less/style.less';

const showFadeTransition = ref(false);
const showLaunchScreen = ref(true);

function handleLetsGoTap() {
	console.log('lets go');
	showLaunchScreen.value = false;
	showFadeTransition.value = true;
}

function handleShowMeLaterTap() {
	console.log('clicked show me later');
}

function handlePrivacyPolicyTap() {
	console.log('clicked privacy policy');
}
</script>
