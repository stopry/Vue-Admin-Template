<template>
    <header class="head-nav rflex " :style="{'width':headNavWidth+'px'}" id='header_container'>
        <div class="right-nav" ref="rightNav">
            <top-menu></top-menu>
            <div class="userinfo-right rflex" :class="{'smallPx':isSmallSize}">
                <div class="notify-row">
                    <ul class="top-menu">

                        <li class="li-badge">
                            <a href='http://wpa.qq.com/msgrd?v=3&uin=592333407&site=qq&menu=yes' target="_blank" v-popover:qqcode>
						        <icon-svg icon-class="iconqq" />
                                 <el-popover
                                    ref="qqcode"
                                    popper-class="qcodepopper"
                                    placement="bottom"
                                    trigger="hover">
                                        <div class="wechat-area cflex">
                                            <p class="titles">qq客服</p>
                                            <img :src="qq.qqImg" alt="qq客服"  />
                                        </div>
                                </el-popover>
                            </a>
                        </li>
                        <li class="li-badge">
                            <el-tooltip class="item" effect="dark" content="同步商品" placement="top">
                                <!-- <a :href='github' target="_blank"> -->
                                    <!-- <el-button type="primary" icon="el-icon-goods"></el-button> -->
                                    <el-button type="success" icon="el-icon-goods" circle></el-button>
                                      <!-- <icon-svg icon-class="icon-tongbushangpin" /> -->
                                <!-- </a> -->
                            </el-tooltip>
                        </li>
                        <li class="li-badge">
                          <el-input v-show='!isSmallSize' placeholder="请输入内容" v-model="searchKey" size="mini" style="width:140px;">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                          </el-input>
                          <el-tooltip v-show='isSmallSize'  class="item" effect="dark" content="搜索" placement="top">
                              <el-button @click="isSmallSize=false" type="primary" icon="el-icon-search" circle></el-button>  
                          </el-tooltip>
                        </li>
                        <!-- <li class="li-badge">
                            <a :href='github' target="_blank" v-popover:qcode>
                                <icon-svg icon-class="iconwechat" />
                                <el-popover
                                    ref="qcode"
                                    popper-class="qcodepopper"
                                    placement="bottom"
                                    trigger="hover">
                                        <div class="wechat-area cflex">
                                            <p class="titles">加我微信</p>
                                            <img :src="wechat.wechatImg" alt="加我微信"  />
                                        </div>
                               </el-popover>
                            </a>
                        </li> -->
                        
                    </ul>
                </div>
                <div class="userinfo">
                    <el-menu 
                        class="el-menu-demo" 
                        mode="horizontal"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#fff"
                       >
                        <!-- <el-submenu index="1" popper-class="langItem">
                            <template slot="title">
                                <img :src="langLogo" class='langAvatar' alt="">
                            </template>
                            <el-menu-item index="1-1" @click="changeLocale('zh')">
                                <img :src="chinaImg" class='langAvatar' alt="">
                                <span class="intro">中文</span>
                            </el-menu-item>
                            <el-menu-item index="1-2" @click="changeLocale('en')">
                                <img :src="americaImg" class='langAvatar' alt="">
                                <span class="intro">EngList</span>
                            </el-menu-item>
                        </el-submenu> -->

                        <el-submenu index="2"  popper-class="infoItem" :style="{background:'none'}" >
                            <template slot="title">
                                <img :src="jdLogo" class='avatar' alt="">
                                <div class='welcome' :style="{background:'none'}" >
                                    <!-- <span class='name avatarname'> {{ $t(`commons.${name}`)}}</span> -->
                                    <span class='name avatarname'>浮秋网络旗舰店</span>
                                </div>
                                
                            </template>
                            <el-menu-item index="2-1" @click="setDialogInfo('info')">{{ $t('commons.infoShow') }}</el-menu-item>
                            <el-menu-item index="2-2" @click="setDialogInfo('pass')">{{ $t('commons.infoModify') }}</el-menu-item>
                            <el-menu-item index="2-3" @click="setDialogInfo('logout')">{{ $t('commons.quit') }}</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import { mapGetters } from "vuex";
    import * as mUtils from '@/utils/mUtils'
    import { setToken,getToken } from '@/utils/auth'
    import store from "@/store";
    import topMenu from "./topMenu";
    import wechatImg from "@/assets/img/wechat.png";
    import qqImg from "@/assets/img/qq.png";
    import logoImg from "@/assets/img/logo.png";
    import jdLogo from "@/assets/img/jd.png";
    import sync_goods from "@/assets/img/sync_goods.png";
    import chinaImg from "@/assets/img/china.svg";
    import americaImg from "@/assets/img/america.svg";
    import { github } from "@/utils/env";


    export default {
          name: 'head-nav',
          data(){
            return{
                isSmallSize:false,
                searchKey:'',
                sync_goods:sync_goods,
                logo:logoImg,
                jdLogo:jdLogo,
                langLogo:getToken('langLogo') || americaImg,
                chinaImg:chinaImg,
                americaImg:americaImg,
                wechat:{
                    wechatImg:wechatImg,
                    isWechat:false
                },
                qq:{
                    qqImg:qqImg,
                    isQq:false,
                },
                github:github,
                menu:{
                    userBgcolor:'#f0f2f5'
                }
            }
          },
          components:{
            topMenu
          },
          computed:{
            ...mapGetters(['name','avatar','sidebar']),
             headNavWidth(){
                return document.body.clientWidth - this.sidebar.width
            }
              
          },
          created(){
            
          },
          mounted(){
              if(window.document.body.clientWidth<1367){
                  this.isSmallSize=true
              }else{
                  this.isSmallSize=false
              }
          },
          methods:{
              showWechat(){
                  this.wechat.isWechat = true;
              },
              hideWechat(){
                 this.wechat.isWechat = false;
              },
              showQq(){
                  this.qq.isQq = true;
              },
              hideQq(){
                  this.qq.isQq = false;
              },
              logout(){
                  this.$store.dispatch('LogOut').then(() => {
                      location.reload();
                  })
              },
             /**
             * 弹出框-修改密码或者系统设置   
             * @param {string} cmditem 弹框类型
             */
            setDialogInfo(cmditem) {
                switch (cmditem) {
                    case 'info':
                        this.$router.push('/infoManage/infoShow/infoShow1');
                        break;
                    case 'pass':
                        this.$router.push('/infoManage/infoModify/infoModify1');
                        break;
                    case 'logout':
                        this.logout();
                        break;
                }
            },
            // 切换语言
            changeLocale(type){
                setToken('lang',type);
                this.$i18n.locale = type;
                if(type === 'en'){
                    this.langLogo = this.americaImg;
                }else{
                    this.langLogo = this.chinaImg;
                }
                setToken('langLogo',this.langLogo);
            }
          }
    }
</script>

<style scoped lang='less'>
    .right-nav{
        display: flex;
        flex: 1;
        width:calc(100% - 180px);
        padding-right: 15px;
        justify-content: space-between;
        box-shadow:0px 2px 5px 0px rgba(237,233,233,0.5);
        background: #545c64;
    }
    .head-nav {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 29;
        transition: width .2s;
        justify-content: space-between;
        height: 60px;
        box-sizing: border-box;
        background: #fff;
        .logout {
            vertical-align: middle;
            cursor: pointer;
        }
    }
    .middle{
       align-items: center;
       border:1px solid;
    }
    .userinfo-right{
        width:400px;
        padding: 0 10px;
        justify-content: space-between;
        &.smallPx{
            width: 320px;
        }
    }
    .userinfo {
        line-height: 60px;
        text-align:right;
    }
    .avatar{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        vertical-align: middle;
        display: inline-block;
    }
    .langAvatar{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        vertical-align: middle;
        display: inline-block;
    }
    .welcome{
        display: inline-block;
        vertical-align: middle;
        padding: 0 5px;
        .name{
            line-height: 20px;
            text-align: center;
            font-size: 12px;
        }
        .avatarname{
            color:#a9d86e;
            font-weight:bolder;
            font-size: 13px;
        }
    }

    .username {
        cursor: pointer;
        margin-right: 5px;
    }
    .border{
        border:1px solid;
    }
    .notify-row{
        line-height:60px;
        flex:1;
        ul{
           display: flex;
           justify-content: space-around;
        }
    }
   
    ul.top-menu > li {
        position: relative;
    }
</style>
