<template>
    <layout class="wallet-view">
        <Header class="wallet-header">
            <CommonHeader :language="language" :changeState="changeState" :isLogin="isLogin"></CommonHeader>
        </Header>
        <Content class="wallet-content">
            <div class="content-card-view ivu-menu-dark">
                <div class="card-group" ref="cardGroup">
                    <div class="card-inner" ref="cardInner">
                        <div class="card-item add-item" @click="handleAddAccount">
                            <div class="item-title">
                                <img src="@/images/u4600.png">
                                <span class="item-text">{{language === 'en' ? 'Add an exchange account' : '添加交易所账户'}}</span>
                            </div>
                        </div>
                        <div class="card-item" v-for="(item, index) in cardList" :key="index"
                             :class="cardClickActive === index ? 'card-item-active' : ''"
                             @click="handleCardDivClick($event, item, index)">
                            <div class="card-item-tool">
                                <img src="@/images/u4615.png" @click="handleCardSettingImgClick">
                                <img src="@/images/u5335.png" @click="handleCardRemoveImgClick">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-point-view">
                    <div class="point-item"
                         v-for="item in Math.ceil((cardList.length + 1) / 3)"
                         :key="item"
                         :class="item === cardPointActive ? 'card-point-active' : ''">
                    </div>
                </div>
                <div class="card-arrow-btn" @click="handleCardArrowDivClick">
                    <div class="card-arrow"
                         :style="showMoreCard ? 'transform: translateX(-50%) rotate(180deg);' : 'transform: translateX(-50%) rotate(0deg);'"></div>
                </div>
            </div>
            <div class="content-tab">
                <Tabs v-model="tabActive" @on-click="handleTabClick" class="custom-tab">
                    <TabPane v-for="(item, index) in walletTab" :key="index" :label="item[language]" :name="item.en">
                        <template v-if="tabActive === 'Account'">
                            <div class="account-checkbox">
                                <div>
                                    <Checkbox v-model="accountCheck">{{language === 'en' ? 'Hide small amounts' :
                                        '隐藏少量'}}
                                    </Checkbox>
                                    <img src="@/images/u4640.png">
                                </div>
                            </div>
                            <Table :columns="accountColumnsList"
                                   :data="accountList">
                                <template slot-scope="{row}" slot="action">
                                    <div :style="{color: '#f2982f', cursor: 'pointer'}">{{row.action}}</div>
                                </template>
                            </Table>
                        </template>
                        <template v-else-if="tabActive === 'Orders'">
                            <Tabs v-model="orderTabActive" class="order-tab">
                                <TabPane v-for="orderItem in orderTab" :key="orderItem.en" :label="orderItem[language]"
                                         :name="orderItem.en">
                                    <Table :columns="ordersColumnsList" :data="ordersList">
                                        <template slot-scope="{row}" slot="Pair">
                                            <div :style="{color: '#f2982f'}">{{row.Pair}}</div>
                                        </template>
                                        <template slot-scope="{row}" slot="side">
                                            <div :style="{color: '#EF534F'}">{{row.side}}</div>
                                        </template>
                                        <template slot-scope="{row}" slot="Operation">
                                            <div :style="{color: '#f2982f'}">{{row.Operation}}</div>
                                        </template>
                                    </Table>
                                </TabPane>
                            </Tabs>
                        </template>
                        <template v-else>
                            <div class="tab-order">
                                <div class="order-jump">
                                    Deposit with <span>binance.com</span>
                                </div>
                                <p>For the security of your account, the platform is not connected to the recharge
                                    entrance.</p>
                            </div>
                        </template>
                    </TabPane>
                </Tabs>
            </div>
            <transition name="wallet-dialog">
                <div class="dialog-tool" v-show="updateCardModelVisible" ref="walletDialog">
                    <div class="dialog-header">
                        <div>{{dialogTitle}}</div>
                        <div><img src="@/images/u5335.png" @click="handleCloseDialog"></div>
                    </div>
                    <div class="dialog-body">
                        <div class="dialog-input-view">
                            <div class="input-container">
                                <input class="dialog-body-input" type="text" v-model="dialogInput"
                                       :placeholder="language === 'en' ? 'Independent payment password' : '独立支付密码'">
                            </div>
                            <div class="input-forget">
                                <span>{{language === 'en' ? 'Forget password' : '忘记密码'}}</span>
                            </div>
                        </div>
                        <div class="dialog-btn-view">
                            <img src="@/images/u5334.png">
                            <div class="btn-text">{{dialogBtnText}}</div>
                        </div>
                    </div>
                </div>
            </transition>
        </Content>
    </layout>
</template>
<script>
  import { Layout, Tabs, TabPane, Icon, Table, Checkbox } from 'iview'
  import CommonHeader from '@/components/CommonHeader'
  import { walletTab, orderTab } from '@/constants/textContents'

  export default {
    name: 'Wallet',
    components: {
      Layout,
      Tabs,
      TabPane,
      Icon,
      Table,
      Checkbox,
      CommonHeader
    },
    data () {
      return {
        tabActive: 'Account', // 当前选中的tab
        orderTabActive: 'Pending Orders',
        walletTab, // tab标签数据
        orderTab, // order tab
        language: 'en', // 语言
        isLogin: true, // 是否登录
        accountCheck: false,
        cardList: [
          { name: '' },
          { name: '' },
          { name: '' }
        ], // 卡片列表
        accountColumnsList: [
          { title: 'Coin', key: 'coin' },
          { title: 'Total', key: 'total' },
          { title: 'Available', key: 'available' },
          { title: 'In Order', key: 'inorder' },
          { title: 'BTC Value', key: 'btcvalue' },
          {
            title: 'Action',
            slot: 'action',
            width: 150,
            align: 'center',
            key: 'action'
          }
        ], // 第一个 account 的表格column
        ordersColumnsList: [
          { title: 'Date', key: 'Date' },
          { title: 'Pair', slot: 'Pair' },
          { title: 'side', slot: 'side' },
          { title: 'Trade Radio', key: 'Trade' },
          { title: 'Filled | Volume', key: 'Filled' },
          { title: 'Avg.Price | Price', key: 'Avg' },
          { title: 'Status', key: 'Status' },
          { title: 'Operation', slot: 'Operation' }
        ],
        tableData: [],
        accountList: [
          { coin: 'BTC', total: 0.0000, available: 0.0000, inorder: 0.0000, btcvalue: 0.0000, action: 'Trade' },
          { coin: 'BTC', total: 0.0000, available: 0.0000, inorder: 0.0000, btcvalue: 0.0000, action: 'Trade' },
          { coin: 'BTC', total: 0.0000, available: 0.0000, inorder: 0.0000, btcvalue: 0.0000, action: 'Trade' },
          { coin: 'BTC', total: 0.0000, available: 0.0000, inorder: 0.0000, btcvalue: 0.0000, action: 'Trade' },
          { coin: 'BTC', total: 0.0000, available: 0.0000, inorder: 0.0000, btcvalue: 0.0000, action: 'Trade' },
          { coin: 'BTC', total: 0.0000, available: 0.0000, inorder: 0.0000, btcvalue: 0.0000, action: 'Trade' },
          { coin: 'BTC', total: 0.0000, available: 0.0000, inorder: 0.0000, btcvalue: 0.0000, action: 'Trade' },
          { coin: 'BTC', total: 0.0000, available: 0.0000, inorder: 0.0000, btcvalue: 0.0000, action: 'Trade' },
          { coin: 'BTC', total: 0.0000, available: 0.0000, inorder: 0.0000, btcvalue: 0.0000, action: 'Trade' },
          { coin: 'BTC', total: 0.0000, available: 0.0000, inorder: 0.0000, btcvalue: 0.0000, action: 'Trade' },
          { coin: 'BTC', total: 0.0000, available: 0.0000, inorder: 0.0000, btcvalue: 0.0000, action: 'Trade' },
          { coin: 'BTC', total: 0.0000, available: 0.0000, inorder: 0.0000, btcvalue: 0.0000, action: 'Trade' },
          { coin: 'BTC', total: 0.0000, available: 0.0000, inorder: 0.0000, btcvalue: 0.0000, action: 'Trade' },
          { coin: 'BTC', total: 0.0000, available: 0.0000, inorder: 0.0000, btcvalue: 0.0000, action: 'Trade' },
          { coin: 'BTC', total: 0.0000, available: 0.0000, inorder: 0.0000, btcvalue: 0.0000, action: 'Trade' }
        ],
        ordersList: [
          {
            Date: '2019-07-15 16:03:58',
            Pair: 'BUT/USDT',
            side: 'Buy',
            Trade: '0.00%',
            Filled: '0.000 | 2.313(BTC)',
            Avg: '0.00 | 0.00234(USDT)',
            Status: 'Open',
            Operation: 'Cancel'
          },
          {
            Date: '2019-07-15 16:03:58',
            Pair: 'BUT/USDT',
            side: 'Buy',
            Trade: '0.00%',
            Filled: '0.000 | 2.313(BTC)',
            Avg: '0.00 | 0.00234(USDT)',
            Status: 'Open',
            Operation: 'Cancel'
          }
        ],
        cardClickActive: -1, // 选中的卡片
        cardPointActive: -1, // 选中的点
        showMoreCard: false, // 显示编辑卡片的dialog
        dialogTitle: '', // dialog 的 title
        dialogInput: '', // dialog-input
        dialogBtnText: 'asd', // dialog-button-text
        updateCardModelVisible: false
      }
    },
    mounted () {
      const urlParams = this.$route.query
      this.language = urlParams.lang || 'en'
      this.tableData = this.accountList
    },
    computed: {},
    watch: {
      '$route' (to) {
        const urlParams = to.query
        this.language = urlParams.lang || 'en'
      }
    },
    methods: {
      changeState (state, value) {
        this[state] = value
      },
      setCardGroupHeight () {
        let cardItemMargin = this.$refs['cardInner'].clientWidth * 0.02
        let pointLength = Math.ceil((this.cardList.length + 1) / 3)
        let sum = (pointLength * 200) + (pointLength * cardItemMargin) + 20
        return sum + 'px'
      },
      setDialogFrame (event) {
        if (this.updateCardModelVisible) {
          this.dialogInput = ''
        }
        const walletDialog = this.$refs['walletDialog']
        walletDialog.style.left = event.target.x - 294 + 'px'
        walletDialog.style.top = event.target.y - 25 + 'px'
        this.updateCardModelVisible = true
      },
      handleAddAccount () {
        this.$router.push({
          name: 'addAccount'
        })
      },
      handleCardDivClick (event, item, index) {
        if (event.target.nodeName === 'IMG') {
          return
        }
        this.cardClickActive = index
        // + 2 : 将第一个add-item算进去和索引默认加1
        this.cardPointActive = Math.ceil((index + 2) / 3)
      },
      handleTabClick (val) {
      },
      handleCardSettingImgClick (event) {
        this.setDialogFrame(event)
      },
      handleCardRemoveImgClick (event) {
        this.setDialogFrame(event)
      },
      handleCloseDialog () {
        this.updateCardModelVisible = false
      },
      handleCardArrowDivClick () {
        this.showMoreCard = !this.showMoreCard
        this.$refs['cardGroup'].style.height = this.showMoreCard ? this.setCardGroupHeight() : '252px'
      }
    }
  }
</script>
<style lang="scss">
    .wallet-view {
        position: relative;
        background: white;

        .ivu-tabs-nav .ivu-tabs-tab-active {
            color: black;
            font-weight: bold;
        }

        .ivu-tabs-ink-bar {
            background: #f2982f;
        }

        .ivu-tabs-bar {
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.349019607843137);
        }

        .ivu-tabs-nav .ivu-tabs-tab {
            padding: 16px;

            &:hover {
                color: #000;
            }
        }
    }

    .wallet-header {
        height: 50px;
    }

    .wallet-content {
        position: relative;
        width: 100%;
        height: auto;
    }

    .dialog-tool {
        position: absolute;
        width: 294px;
        z-index: 10;
        top: 0px;
        left: 0px;

        .dialog-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 40px;
            background: rgba(250, 250, 250, 1);
            padding: 6px;

            img {
                height: 18px;
                width: 18px;
                transform: translateY(3px);
                cursor: pointer;
            }
        }

        .dialog-body {
            background: white;
            padding: 0px 5% 5%;

            .dialog-input-view {
                .dialog-body-input {
                    width: 100%;
                    height: 34px;
                    border: none;
                    outline: none;
                }

                .input-forget {
                    padding: 5px 0px;
                    border-top: 1px solid #ccc;
                    text-align: right;
                    color: #ff9900;
                }
            }

            .dialog-btn-view {
                position: relative;
                margin-top: 10px;

                .btn-text {
                    position: absolute;
                    height: 25px;
                    width: 100%;
                    top: 0px;
                    left: 0px;
                    line-height: 25px;
                    text-align: center;
                    font-size: 16px;
                    color: white;
                }
            }
        }
    }

    .content-card-view {
        position: relative;

        .card-group {
            width: 100%;
            height: 252px;
            transition: height .5s cubic-bezier(0.4, 0, 1, 1);
            overflow: hidden;
        }

        .card-inner {
            display: flex;
            flex-wrap: wrap;
            width: 90%;
            margin: 0 auto;
            padding: 20px 60px 0px 60px;
        }

        .card-item {
            position: relative;
            height: 200px;
            width: 31%;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            border: 1px solid rgba(102, 102, 102, 1);
            margin-right: 2%;
            margin-bottom: 2%;

            .card-item-tool {
                position: absolute;
                top: 10px;
                right: 10px;
            }

            img {
                height: 18px;
                width: 18px;
                margin-left: 8px;
                cursor: pointer;
            }
        }

        .add-item {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            background: #1f222f;

            img {
                height: 20px;
                width: 20px;
                margin-right: 10px;
                transform: translateY(3px);
            }

            .item-text {
                font-size: 18px;
            }

        }

        .card-item-active {
            border-color: #bf5f30;
        }

        .card-point-view {
            position: absolute;
            top: 20px;
            right: 5%;
            height: 200px;
            width: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .point-item {
                height: 15px;
                width: 15px;
                background: #666666;
                border-radius: 50%;
                margin-bottom: 7px;
            }

            .card-point-active {
                background: #f2982f;
            }
        }

        .card-arrow-btn {
            position: absolute;
            z-index: 10;
            bottom: -13px;
            left: 50%;
            height: 10px;
            width: 34px;
            border-width: 0px;
            transform: translateX(-50%);
            background: rgba(39, 43, 61, 1);
            cursor: pointer;
            border-radius: 5px;

            .card-arrow {
                position: absolute;
                top: 2px;
                left: 50%;
                transform: translateX(-50%) rotate(0deg);
                transition: all .5s cubic-bezier(0.4, 0, 1, 1);
                border: 3px solid transparent;
                border-top-color: white;
            }
        }
    }

    .content-tab {
        position: relative;
        width: 80%;
        margin: 0 auto;

        .account-checkbox {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            height: 34px;

            img {
                height: 18px;
                width: 18px;
                vertical-align: middle;
            }
        }

        .order-tab {
            .ivu-tabs-bar {
                box-shadow: none;
                border-bottom-color: transparent;
            }
        }

        .tab-order {
            text-align: center;
            color: #999999;

            p {
                font-size: 14px;
                margin-top: 10px;
            }
        }

        .order-jump {
            border: 1px dashed #f2982f;
            background: white;
            padding: 10px;
            font-size: 18px;

            span {
                color: #f2982f;
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }

    .wallet-dialog-enter-active {
        transition: all .3s ease;
    }

    .wallet-dialog-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .wallet-dialog-enter, .wallet-dialog-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
