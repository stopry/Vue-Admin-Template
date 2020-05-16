<template>
    <div class="home rflex">
        <left-menu></left-menu>
        <div class="menu_right wflex el-scrollbar" ref="menu_right" :style="{left:sidebar.width+'px',width:smallWidth}">
            <head-nav></head-nav>
            <div class="menu_content" ref="menu_content">
                <bread></bread>
                <router-view></router-view><!--页面渲染入口-->
            </div>
            <footerNav></footerNav>
            <backTop :ele="$refs.menu_right"></backTop>
        </div>
    </div>
</template>
<script>
    import { mapState, mapGetters } from 'vuex'

    import HeadNav from './headNav.vue';
	import LeftMenu from './leftMenu.vue';
	import Bread from './bread.vue';
	import FooterNav from './footerNav.vue';
	import backTop from 'cps/backTop';

    export default {
        name: 'home',
        data(){
            return {
                smallWidth:'auto'
            }
        },
        computed:{
            ...mapGetters(['sidebar']),
        },
        components:{
            HeadNav,
            LeftMenu,
            Bread,
            FooterNav,
            backTop
        },
        created() {
            if(!this.IsPC()){
                this.smallWidth = '112%';
            }
        },
        mounted (){
        },
        watch:{
          
        },
        methods:{

            IsPC() {
                var userAgentInfo = navigator.userAgent;
                var Agents = ["Android", "iPhone",
                            "SymbianOS", "Windows Phone",
                            "iPad", "iPod"];
                var flag = true;
                for (var v = 0; v < Agents.length; v++) {
                    if (userAgentInfo.indexOf(Agents[v]) > 0) {
                        flag = false;
                        break;
                    }
                }
                return flag;
            }
        }    
    }
</script>
<style lang="less">
@media screen and (max-width: 300px) {
    body{
        display: none !important;
    }
    .home{
        display: none;
        .menu_right{
            width: 112%;
        }
    }
}
</style>
<style scoped lang='less'>

    .home{
        .menu_right{
            overflow: auto;
            position: absolute;
            right:0;
            top:0;
            bottom:0;
            background:#F6F7FC;
            .menu_content{
                position: relative;
                margin-top:60px;
                width:100%;
                background:#f0f2f5;
                padding-bottom: 50px;
            }

        }
    }
</style>
