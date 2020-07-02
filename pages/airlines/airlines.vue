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
		<view class="contend-airline">
			<view class="top-content">
				<view class="title">
					<view class="text">请选择航司</view>
				</view>
				<view class="content">
					<view class="item" :style="{ background: index === currenIndex ? '#33b833' : '#1472fa'}" 
					v-for="(item, index) in cityList" @tap="jump(item, index)" :key="index">
						{{item.name}}
					</view>
				</view>
			</view>
			<view class="radus">
				<view class="left">
					
				</view>
				<view class="right">
					
				</view>
			</view>
			<view class="bottom-content">
				<view class="title">
					填报操作:
				</view>
				<view class="content">
					<view class="tips">
						<view class="">
							1、长按右方二维码，点击“前往图中包含的公众号”或“前往图中包含的小程序。
						</view>
						<view class="">
							2、在进入的页面，根据对应引导填报相关信息。
						</view>
						<view class="">
							3、建议填报完成后点击右上方三个点，选择浮窗。便于到达后查看填报信息。
						</view>
					</view>
					<view class="code">
						<image v-if="item.pin" :src="require(`../../static/airlines/${item.pin}.jpg`)" mode="aspectFit"></image>
						<image v-else src="" mode="aspectFit"></image>
					</view>
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
				currenIndex: '',
				item: {},
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
			this.cityList = cityList['airlines']
		},
		computed: {
		},
		methods: {
			jump (item, index) {
				this.currenIndex = index
				this.item = item
			}
		}
	}
</script>

<style lang="scss">
	.layout {
		overflow-y: hidden;
		height: 100vh;
		width: 100vw;
		background:url(../../static/bg.png);
		background-size:100% 100%;
		background-repeat:no-repeat;
		padding: 0 40rpx;
		// padding-top: 331rpx;
		.contend-airline {
			position: relative;
			top: 150rpx;
			width: 100%;
			height: calc(100vh - 350rpx);
			background: #FFFFFF;
			border-radius: 30rpx;
			.radus {
				display: flex;
				justify-content: space-between;
				position: relative;
				top: 150rpx;
				.left {
					height: 50rpx;
					width: 50rpx;
					border-radius: 50%;
					background: #1472fa;
					transform: translateX(-50%);
				}
				.right {
					height: 50rpx;
					width: 50rpx;
					border-radius: 50%;
					background: #1472fa;
					transform: translateX(50%);
				}
			}
			.top-content {
				.title {
					position: absolute;
					top: -30rpx;
					left: 50%;
					transform: translateX(-50%);
					font-size: 33rpx;
					letter-spacing: 2rpx;
					color: #ffffff;
					
					text-align: center;
					// margin: 0 auto;
					background-color: #ffae00;
					border-radius: 28rpx;
					width: 233rpx;
					height: 60rpx;
					line-height: 60rpx;
					.text {
						font-size: 33rpx;
						display: inline-block;
						transform:skewX(-15deg);
					}
				}
				.content {
					position: relative;
					top: 80rpx;
					// width: 100vw;
					margin: 0 auto;
					text-align: center;
					display: grid;
					grid-template-columns: 40% 40%;
					grid-row-gap: 20rpx;
					grid-column-gap: 20rpx;
					margin-left: 15%;
					// left: 50%;
					// transform: translateX(-42%);
					// grid-template-rows: 33.33% 33.33% 33.33%;
				}
				.item {
					z-index: 999;
					// position: relative;
					// left: 50%;
					// transform: translateX(-50%);
					text-align: center;
					border-radius: 39rpx;
					border: solid 2rpx #fafafa;
					height: 78rpx;
					font-size: 29rpx;
					line-height: 78rpx;
					letter-spacing: 1rpx;
					color: #ffffff;
					background: #1472fa;
					// margin-right: 30rpx;
				}
			}
			.bottom-content {
				position: absolute;
				bottom: 0rpx;
				padding: 0 20rpx;
				height: 500rpx;
				.title {
					top: 150rpx;
					font-size: 29rpx;
					color: #262626;
					text-align: left;
					font-weight: bold;
				}
				.content {
					display: flex;
					// justify-content: space-between;
					.tips {
						width: calc(100% - 223rpx);
						font-size: 24rpx;
						line-height: 33rpx;
						letter-spacing: 0rpx;
						color: #262626;
						height: 390rpx;
						position: relative;
						bottom: -180rpx;
					}
					.code {
						position: relative;
						bottom: -60rpx;
						left: 10rpx;
						width: 223rpx;
						image {
							
						}
					}
				}
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
