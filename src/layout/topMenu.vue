
<template>
    <div class="menu_top wflex rflex" ref="menuTop" style="overflow:hidden;">
        <!-- <el-menu 
            mode="horizontal" 
            class="el-menu-demo rflex el-scrollbar2 top-scrollbar2" 
            :background-color="menuObj.bgColor"
            :text-color="menuObj.textColor"
            :active-text-color="menuObj.activeTextColor"
            :default-active="$route.path" 
            >
            <template v-for="(item,index) in topRouters">
                <router-link :to="$route.matched[1].path+'/'+item.path" :key="index">
                    <el-menu-item :index="$route.matched[1].path+'/'+item.path">
                      {{ $t(`commons.${item.path}`) }}
                    </el-menu-item>
                </router-link>
            </template>
        </el-menu> -->
        <el-menu :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="changeRouter"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#fff">

            <template v-for="(item,index) in topMenus">
                 <el-menu-item v-if="!item.children" :key="index" :index="index+''">
                     <router-link :to="item.path" :style="{width:'300%',height:'100%',display:'block'}">
                        {{item.name}}
                    </router-link>
                </el-menu-item>
                <el-submenu v-if="item.children" :key="index" :index="index+''">
                    <template slot="title">
                         {{item.name}}
                    </template>
                    <el-menu-item v-for="(child,indexC) in item.children" :key="index+'_'+indexC" :index="index+'_'+indexC" @click="navTo(item.path+child.path)">
                        {{child.name}}
                    </el-menu-item>
                </el-submenu>
            </template>

            <!-- <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
        </el-menu>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import {indexRouterMap,constantRouterMap,goodsMgrRouterMap,keyChangeRouterMap,toolRouterMap,baseRouterMap,videoRouterMap} from '@/router';

    export default {
        name:'top-menu',
        data(){
            return {
                activeIndex:"0",
                menuObj:{
                    bgColor:'',
                    textColor:'#303133',
                    activeTextColor:'#ff6428',
                },
                //顶部菜单
                topMenus:[
                    {
                        name:'首页',
                        path:'/index/index'
                    },
                    {
                        name:'上货搬家',
                        path:'/index/batch',
                        // children:[
                        //     {
                        //         name:'上货搬家-1',
                        //         path:'/1'
                        //     },
                        //     {
                        //         name:'上货搬家-2',
                        //         path:'/2'
                        //     } 
                        // ]
                    },
                    {
                        name:'商品管理',
                        path:'/index/goodsEdit',
                        // children:[
                        //     {
                        //         name:'商品管理-1',
                        //         path:'/1'
                        //     },
                        //     {
                        //         name:'商品管理-2',
                        //         path:'/2'
                        //     } 
                        // ]
                    },
                    {
                        name:'一键修改',
                        path:'/index/keyChange1',
                        // children:[
                        //     {
                        //         name:'一键修改-1',
                        //         path:'/1'
                        //     },
                        //     {
                        //         name:'一键修改-2',
                        //         path:'/2'
                        //     } 
                        // ]
                    },
                    {
                        name:'实用工具',
                        path:'/index/tool1',
                        // children:[
                        //     {
                        //         name:'实用工具-1',
                        //         path:'/1'
                        //     },
                        //     {
                        //         name:'实用工具-2',
                        //         path:'/2'
                        //     } 
                        // ]
                    },
                    {
                        name:'基础设置',
                        path:'/index/base1',
                        // children:[
                        //     {
                        //         name:'基础设置-1',
                        //         path:'/1'
                        //     },
                        //     {
                        //         name:'基础设置-2',
                        //         path:'/2'
                        //     } 
                        // ]
                    },
                    {
                        name:'视屏教程',
                        path:'/index/videoCourse',
                    }
                ]
            }
        },
        computed:{
            // ...mapGetters(['topRouters'])
        },
        created(){
        //    this.setLeftInnerMenu();  // 针对刷新页面时，也需要加载顶部菜单
        },
        mounted(){
        },
        methods:{
            changeRouter(i){
                let mapRoute = [
                    indexRouterMap,
                    constantRouterMap,
                    goodsMgrRouterMap,
                    keyChangeRouterMap,
                    toolRouterMap,
                    baseRouterMap,
                    videoRouterMap,
                ]
                // console.log(i)
                console.log(typeof i)
                this.$store.commit('CHANGE_ROUTERS', mapRoute[i])
            },
            navTo(path){
                this.$router.push({ path: path })
            },
            setLeftInnerMenu(){
                const titleList = this.$route.matched[1].meta.titleList;
                const currentTitle = titleList && this.$route.matched[2].meta.title;
                if( titleList && this.$route.matched[1].meta.routerType === 'leftmenu'){ // 点击的为 左侧的2级菜单
                    this.$store.dispatch('ClickLeftInnerMenu',{'titleList':titleList});
                    this.$store.dispatch('ClickTopMenu',{'title':currentTitle});
                }else{ // 点击左侧1级菜单
                    this.$store.dispatch('ClickLeftInnerMenu',{'titleList':[]});
                    this.$store.dispatch('ClickTopMenu',{'title':''});
                }
            },
            getPath(){
               this.setLeftInnerMenu();
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        watch:{
            "$route":"getPath" 
        }
    }

</script>

<style lang="less" scoped>
    .menu_top{
        // width:calc(100% - 350px);
        .el-menu-demo{
            overflow:hidden;
            flex:1;
        }
        .el-menu-item:focus, .el-menu-item:hover {
            outline: 0;
            background-color: #ceeda8;
        }
        .router-link-active{
          
        }
    }
</style>