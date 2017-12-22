<template>
	<footer>
		<router-link to="/" class="home" :class="{active:this.$route.meta.home}">首页</router-link>
		<router-link to="/mine" class="mine" :class="{active:this.$route.meta.mine}">我的</router-link>
	</footer>
</template>

<script>
	export default{
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
	footer{
		position:fixed;
		bottom:0;
		left:0;
	    display: flex;
	    width:100%;
	    background-color: #f5f5f5;
	    padding-top:0.5rem;
	    text-align: center;
	    a{
	    	font-size:0.7rem;
	    	font-family: "微软雅黑";
	    	flex:1;
	    	padding-top:1.1rem;
    		height:1.5rem;
    		line-height: 1.5rem;
    		display: inline-block;
    		
	    	&.home{
	    		background: url(../assets/img/tab_1_normal@2x.png) center -5px  no-repeat;
	    		-webkit-background-size: 1.5rem 1.5rem;
    			background-size: 1.5rem 1.5rem;
	    	}
	    	&.home.active{
	    		background: url(../assets/img/tab_1_selected@2x.png) center -5px  no-repeat;
	    		-webkit-background-size: 1.5rem 1.5rem;
    			background-size: 1.5rem 1.5rem;
    			color:deepskyblue;
	    	}
	    	&.mine{
	    		background: url(../assets/img/tab_2_normal@2x.png) center -3px  no-repeat;
	    		-webkit-background-size: 1.5rem 1.5rem;
    			background-size: 1.5rem 1.5rem;
	    	}
	    	&.mine.active{
	    		background: url(../assets/img/tab_2_selected@2x.png) center -5px  no-repeat;
	    		-webkit-background-size: 1.5rem 1.5rem;
    			background-size: 1.5rem 1.5rem;
    			color:deepskyblue;
	    	}
	    }
	    
	}
</style>