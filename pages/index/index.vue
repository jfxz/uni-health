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
		<view class="linear">
		</view>
		<view class="content">
			<view class="title">
				扫码注意事项
			</view>
			<view class="tips">
				<view class="tips-content">
					<text class="black">
						请优先选择您乘坐的航空公司，点击下方国内
						航司二维码进行申报
					</text>
					<text class="gird">
						(目前航司码支持山航、东
						航、上航、深航、吉祥航、川航、天航、航旅纵横)
					</text>
				</view>
				<view class="btn" @tap="jump('airlines')">
					国内各航空公司健康申报
				</view>
			</view>
			
			<view class="tips">
				<view class="tips-content">
					<text class="black">
						若无可选的航司二维码，请根据您的目的地点
						击下方各城市二维码进行申报
					</text>
				</view>
				<view class="btn" @tap="jump('city')">
					中国大陆各城市健康申报
				</view>
			</view>
			
			<view class="tips">
				<view class="tips-content">
					<text class="black">
						前往海口、乌鲁木齐的旅客请增加点击下方“
						通信大数据行程卡”进行申报
					</text>
				</view>
				<view class="btn" @tap="jump('operate')">
					通信大数据行程卡
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				
			};
		},
		components:{
		
		},
		onShow () {
		},
		computed: {
		},
		methods: {
			jump (path) {
				if (path === 'operate') {
					uni.navigateTo({
						url: `../code/code?name=通信大数据&pin=tong`
					})
				} else {
					uni.navigateTo({
						url: `../${path}/${path}`
					})
				}
				
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
		// padding-top: 331rpx;
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
		.linear {
			background: linear-gradient(top, #1be2ff 0%, #1be2ff 80%, #1472fa 100%);
			position: absolute;
			top: 350rpx;
			height: calc(100vh - 400rpx);
			width: calc(100% - 40rpx);
			margin: 20rpx;
			border-radius: 28rpx 28rpx 0rpx 0rpx;
			opacity: 0.49;
		}
		.content {
			background: #FFFFFF;
			position: relative;
			top: 120rpx;
			height: calc(100vh - 300rpx);
			margin: 0 50rpx;
			border-radius: 28rpx 28rpx 0rpx 0rpx;
			padding: 0 30rpx;
			.title {
				font-size: 33rpx;
				color: #262626;
				font-weight: bold;
				margin-bottom: 60rpx;
			}
			.tips {
				.tips-title {
					font-size: 29rpx;
					color: #262626
				}
				.btn {
					width: 597rpx;
					height: 97rpx;
					background-color: #1777ff;
					border-radius: 7rpx;
					font-size: 33rpx;
					line-height: 97rpx;
					color: #ffffff;
					text-align: center;
					margin: 30rpx 0;
				}
				.tips-content {
					font-size: 29rpx;
					.black {
						color: #262626;
					}
					.gird {
						color: #8c8c8c;
					}
				}
			}
		}
	}
</style>
