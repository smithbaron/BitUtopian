<template>
    <div class="trade-column-wrapper">
        <div class="trade-column-header">
            <div class="left">
                <span>Pending Order</span>
                <span>Order History</span>
            </div>
            <div class="right">
                <span class="active">Limit</span>
                <span>Market</span>
            </div>
        </div>
        <div class="trade-column-cont">
            <div class="box">
                <div class="buy-box">
                    <div class="title">Buy --</div>
                    <div class="price">
                        <span class="left">Price:</span>
                        <span class="right">USDT</span>
                    </div>
                    <div class="amount">
                        <span class="left">Amount:</span>
                        <span class="right">BTC</span>
                    </div>
                    <div class="column">
                        <span class="left"></span>
                        <span class="right">
                            <span>20%</span>
                            <span>50%</span>
                            <span>75%</span>
                            <span>100%</span>
                        </span>
                    </div>
                    <div class="total">
                        <span class="left">Total:</span>
                        <span class="right">USDT</span>
                    </div>
                    <div class="btn">
                        <span class="orange">Log in</span>
                        <span>or</span>
                        <span class="orange">Register</span>
                        <span>to trade</span>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="sell-box">
                    <div class="title">Sell BTC</div>
                    <div class="price">
                        <span class="left">Price:</span>
                        <span class="right">USDT</span>
                    </div>
                    <div class="amount">
                        <span class="left">Amount:</span>
                        <span class="right">BTC</span>
                    </div>
                    <div class="column">
                        <span class="left"></span>
                        <span class="right">
                            <span>20%</span>
                            <span>50%</span>
                            <span>75%</span>
                            <span>100%</span>
                        </span>
                    </div>
                    <div class="total">
                        <span class="left">Total:</span>
                        <span class="right">USDT</span>
                    </div>
                    <div class="btn">
                        <span class="orange">Log in</span>
                        <span>or</span>
                        <span class="orange">Register</span>
                        <span>to trade</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal">
            COMING SOON
        </div>
    </div>
</template>
<script>

export default {
  name: 'TradeColumn',
  data () {
    return {
      containerId: 'tv_chart_container'
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.trade-column-wrapper{
    height: 300px;
    width: 100%;
    background-color: #272B3D;
    position: relative;
    .modal{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.4);
        font-size: 24px;
        color: #666;
        line-height: 200px;
        text-align: center;
    }
    .trade-column-header{
        height: 40px;
        background-color: #1C1F2C;
        span{
            display: inline-block;
            padding: 0 20px;
            font-size: 18px;
            line-height: 40px;
            color: #999;
        }
        .left{
            float: left;
        }
        .right{
            float: right;
            border-left: 3px #000 solid;
        }
        .active{
            background-color: #272B3D;
            position: relative;
            &:before{
                content: '';
                position: absolute;
                width: 100%;
                height: 3px;
                background-color: #FF9900;
                left: 0;
                top: 0;
            }
        }
    }
    .trade-column-cont{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        .box {
            flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            padding: 15px 0 10px;
            color: #999;
            font-size: 12px;
            line-height: 16px;
            .title{
                color: #ccc;
                font-size: 14px;
                line-height: 18px;
                margin-bottom: 8px;
            }
            .left{
                display: inline-block;
                width: 70px;
            }
            .right{
                display: inline-block;
                width: 230px;
                text-align: right;
                background-color: #1C1F2C;
            }
            .column{
                .right{
                    background-color: transparent;
                    &>span {
                        display: inline-block;
                        text-align: center;
                        background-color: #1C1F2C;
                        color: #fff;
                        width: 50px;
                        margin-right: 10px;
                        &:last-child{
                            margin-right: 0;
                        }
                    }
                }
            }
            .btn{
                border: 1px #ccc solid;
                border-radius: 4px;
                color: #fff;
                text-align: center;
                width: 300px;
                line-height: 20px;
                .orange{
                    color: #FF9900;
                    padding: 0 4px;
                }
            }
        }
        .buy-box{
            padding: 0 75px;
            &>div{
                margin-bottom: 8px;
            }
            border-right: 1px #ccc solid;
        }
        .sell-box{
            padding: 0 75px;
            &>div{
                margin-bottom: 8px;
            }
        }
    }
}
</style>
