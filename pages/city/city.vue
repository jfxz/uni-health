<template>
	<view class="layout">
		<view class="title">
			<image style="left: -30rpx;" src="../../static/right.png" mode="aspectFit"></image>
			<text>填报/查询</text>
			<image style="right: -30rpx;" src="../../static/left.png" mode="aspectFit"></image>
		</view>
		<view class="second-title">
			<text class="left">旅客</text><text class="right">健康申明</text>
		</view>
		<view class="contend-city">
			<view class="input">
				<input type="text" placeholder="请输入城市" :value="name" @input="change"/>
			</view>
			<view class="title" style="top: 65rpx;">
				请选择城市
			</view>
			<view class="content">
				<view class="item" :style="{color: index === currenIndex ? '#1472fa' : '#ffffff', background: index === currenIndex ? '#ffffff' : ''}" 
				v-for="(item, index) in cityList" @tap="jump(item, index)" :key="index">
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import cityList from '../../common/util/city.js'
	export default {
		data() {
			return {
				name: '',
				currenIndex: '',
				cityList: []
			};
		},
		components:{
		
		},
		onShow () {
			this.currenIndex = ''
			console.log(cityList)
		},
		onLoad () {
			this.cityList = cityList['list']
		},
		computed: {
		},
		methods: {
			change (e) {
				this.name = e.detail.value
				this.currenIndex = this.cityList.findIndex(item => item.name === this.name)
			},
			jump(item, index) {
				this.currenIndex = index
				if (item.url === 'code') {
					setTimeout (() => {
						uni.navigateTo({
							url: `../code/code?name=${item.name}&pin=${item.pin}`
						})
					}, 500)
					
				} else {
					window.location.href = item.url
				}
				console.log(item)
			}
		}
	}
</script>

<style lang="scss">
	.layout {
		height: 100vh;
		width: 100vw;
		background:url(../../static/bg.png);
		background-size:100% 100%;
		background-repeat:no-repeat;
		padding: 0 40rpx;
		overflow: auto;
		// padding-top: 331rpx;
		.contend-city {
			position: relative;
			top: 50rpx;
			.input {
				position: relative;
				top: 30rpx;
				input {
					height: 97rpx;
					background-color: #ffffff;
					border-radius: 10rpx;
					font-size: 33rpx;
					padding: 0 30rpx;
				}
			}
			.title {
				color: #e4effe;
				letter-spacing: 2rpx;
				font-size: 33rpx;
				text-align: left;
			}
			.content {
				position: relative;
				top: 100rpx;
				display: grid;
				grid-template-columns: 30% 30% 30%;
				grid-row-gap: 10px;
				grid-column-gap: 20px;
				// grid-template-rows: 33.33% 33.33% 33.33%;
			}
			.item {
				text-align: center;
				border-radius: 39rpx;
				border: solid 2rpx #fafafa;
				height: 78rpx;
				font-size: 29rpx;
				line-height: 78rpx;
				letter-spacing: 1rpx;
				color: #ffffff;
				// margin-right: 30rpx;
			}
		}
		.second-title {
			position: relative;
			top: 60rpx;
			text-align: center;
			font-size: 79rpx;
			font-weight: bold;
			letter-spacing: 4rpx;
			// font-style: italic;
			transform:skewX(-15deg);
			.left {
				color: #fffeff;
			}
			.right {
				color: #fbe715;
			}
			
		}
		.title {
			position: relative;
			width: 100%;
			top: 45rpx;
			text-align: center;
			image {
				width: 130rpx;
				height: 10rpx;
				top: -6rpx;
			}
			text {
				font-size: 33rpx;
				letter-spacing: 2rpx;
				color: #fffeff;
				font-weight: bold;
			}
		}
	}
</style>
