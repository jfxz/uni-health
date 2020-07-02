<template>
	<view class="layout-code">
		<view class="title">
			<image style="left: -30rpx;" src="../../static/right.png" mode="aspectFit"></image>
			<text>填报/查询</text>
			<image style="right: -30rpx;" src="../../static/left.png" mode="aspectFit"></image>
		</view>
		<view class="second-title">
			<text class="left">旅客</text><text class="right">健康申明</text>
		</view>
		<view class="img">
			<image :src="require(`../../static/city/${codeObj.pin}.png`)" mode="aspectFit"></image>
			<view class="name">
				{{codeObj.name}}
			</view>
		</view>
		<view class="tips">
			<view>填报操作：</view>
			<view>
				1、长按上方二维码，点击“前往图中包含的公众号”或“前往图中包含的小程序”。
			</view>
			<view>
				2、在进入的页面，根据对应引导填报相关信息。
			</view>
			<view>
				3、建议填报完成后点击右上方三个点，选择浮窗。便于到达后查看填报信息。
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				codeObj: {
					name: '',
					pin: ''
				}
			}
		},
		onLoad (val) {
			this.codeObj = val
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.layout-code {
		height: 100vh;
		width: 100vw;
		background:url(../../static/bg.png);
		background-size:100% 100%;
		background-repeat:no-repeat;
		padding: 30rpx;
		// position: absolute;
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
		.tips {
			position: relative;
			top: 200rpx;
			color: #FFFFFF;
			font-size: 28rpx;
			text-align: left;
		}
		.name {
			font-weight: bold;
			font-size: 35rpx;
			color: #FFFFFF;
		}
		.img {
			position: relative;
			width: 100%;
			top: 100rpx;
			text-align: center;
			image {
				width: 400rpx;
				height: 400rpx;
			}
		}
	}
</style>
