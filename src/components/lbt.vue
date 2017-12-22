<template>
	<div>
	 <carousel :indicators="true" :auto="3000" :loop="true" :responsive="46">
	 	<div v-for="val in imgs"><img :src="val" alt="" width="100%"/></div>
    </carousel>
	</div>
</template>

<script>
	import Carousel from 'vue-m-carousel'
	export default {
		data(){
			return {
				imgs:[require('../assets/img/pic_02.png'),require('../assets/img/IMG_1569_02.jpg'),require('../assets/img/IMG_1570_02.jpg')]
			}
		},
	    components: {
	        Carousel
	    },
	    mounted(){
	    
	    }
	}
</script>

<style scoped="scoped" lang="scss">


</style>