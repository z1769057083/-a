<template>
	<div id="w">
		<div class="wrap" v-for="(val,index) in PList" :key="index">
			<div class="left">
				<img :src="val['Doctor'].avatar" alt=""/>
			</div>
			<div class="right">
				<section><mark>{{val['Doctor'].name}}</mark><span>{{val['Doctor'].departments}}</span></section>
				<section>{{val['Doctor'].hospital}}</section>
				<article>{{val['Doctor'].diseaselabel}}</article>
				<p><aside>{{val.consult_Times}}次咨询</aside><span class="wdoct">问医生{{val.ask_price}}</span></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['PList'],
		data(){
			return {
				msg:[{
					imgUrl:require("../assets/img/pic_05.png"),
					name:"吴园丁",
					department:['耳鼻喉科','副主任医师'],
					hospital:'北京大学第一医院',
					skill:'中耳炎、鼻窦炎、慢性咽炎、头颈肿瘤、过敏性鼻炎等疾病的诊治。',
					consultation:'91次咨询',
					price:'￥8'
				}]
			}
		},
		mounted(){
//			console.log('组件'+this.PList)
		},
		watch:{
			PList:function(old,news){
//				console.log("子组件1"+old)
//				console.log("子组件2"+news)
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
#w{
	/*padding-bottom:4rem;*/
}
.wrap{
	width:100%;
	display: flex;
	padding:1rem 0.2rem;
	.left{
		flex:1;
		
		img{
			height: auto;
			width: 2.35rem;
			border-radius: 100%;
		}
	}
	.right{
		text-align: left;
		font-size:0.6rem;
		flex:3;
		align-content: flex-start;
		line-height: 0.9rem;
		mark{
			font-size:0.7rem;
			background-color: #fff;
			font-weight: bold;
		}
		span{
			margin:0 0.5rem;	
		}
		article{
			color:#ccc;
		}
		aside{
			display: inline-block;
			vertical-align: middle;
		}
		.wdoct{
			color: #00BFFF;
			padding:0.2rem;
			border-radius: 0.2rem;
			display: inline-block;
			border: 1px solid #00BFFF;
			float:right;
			vertical-align: middle;
		}
	}
}
</style>