<template>
	<div class="container">
		<scroller 
		  :on-refresh="refresh"
		  :on-infinite="infinite" :refreshText="'下拉看看'" :noDataText="'没有更多数据'">
		  	<lbt></lbt>
			<DoctorMsg :PList="PromotionList"></DoctorMsg>
		</scroller>
		<vfooter></vfooter>
	</div>
</template>

<script>
	import lbt from '@/components/lbt.vue'
	import vfooter from '@/components/footer.vue'
	import DoctorMsg from '@/components/DoctorMsg.vue'
	export default{
		data(){
			return {
				PromotionList:[]
			}
		},
		components:{
			lbt,
			vfooter,
			DoctorMsg
		},
		mounted(){
			this.refresh();
		},
		methods:{
			refresh(done){
				 this.$http.get("http://120.78.163.105:8282/getdata").then((data)=>{
//					console.log(data.data)
				 this.PromotionList = data.data['data']['PromotionList'];
			     done()					
				})
			},
			
			infinite(done){
				setTimeout(_=>{
					
					for(var i=0;i<5;i++){
					this.PromotionList.push(this.PromotionList[0])
					}
//					console.log(3)
					done();
				},30000000)
			}
		}
	}
</script>

<style>
</style>