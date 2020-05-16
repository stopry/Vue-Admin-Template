import Vue from 'vue'
import Router from 'vue-router'
import { Layout,Content }  from "../layout"; // 页面整体布局
import { topRouterMap } from "./topRouter";

process.env.NODE_ENV === "development" ? Vue.use(Router) : null;

function filterTopRouterMap(name){
	let router = topRouterMap.find((item) => {
		return item.parentName === name;
	});
	return router.data; // arr
}

/**
 * 1、roles:后台返回的权限结构;
 * 
 */
//手动跳转的页面白名单
const whiteList = [
	'/'
];
/**
 * path:''与path:'*'的区别：
 * 1、path:'*', 会匹配所有路径
 * 2、path:''，也是会匹配到路由
 * 
 */
export const indexRouterMap = [
	{
    path: '/index',
		name: 'index',
		component:Layout,
		meta:{
			title:'首页',
		  icon: 'icon-plsh',
		},
		noDropdown:true,
		children:[ 
			{
				path:'index', 
				meta:{
					title:'首页', 
					icon:'icon-plsh',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/index/index'),
			}
		]
	},
]

export const videoRouterMap = [
	{
    path: '/index',
		name: 'videoCourse',
		component:Layout,
		meta:{
			title:'视频教程',
		  icon: 'icon-plsh',
		},
		noDropdown:true,
		children:[ 
			{
				path:'videoCourse', 
				meta:{
					title:'视频教程', 
					icon:'icon-plsh',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/index/index'),
			}
		]
	},
]

//上货搬家对应导航
export const constantRouterMap = [
	{
    path: '',  
    component: Layout,
		redirect: '/index/index',
		hidden:true
  },
	{ path: '/login',name: 'login',component:() => import('@/page/login'),hidden: true},
	{ path: '/404', component: () => import('@/page/errorPage/404'), hidden: true },
	{ path: '/401', component: () => import('@/page/errorPage/401'), hidden: true },
	
	{
		path: '/index',
		name: 'batch',
		component:Layout,
		meta:{
			title:'批量上货',
		  icon: 'icon-plsh',
		},
		noDropdown:true,
		children:[ 
			{
				path:'batch', 
				meta:{
					title:'批量上货', 
					icon:'icon-plsh',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/index/index'),
			}
		]
	},

	{
		path: '/index',
		name: 'shopUp',
		component:Layout,
		meta:{
			title:'整店上货',
		  icon: 'icon-zdsh',
		},
		noDropdown:true,
		children:[ 
			{
				path:'shopUp', 
				meta:{
					title:'整店上货', 
					icon:'icon-zdsh',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/infoManage/infoShow')
			}
		]
	},

	{
		path: '/index',
		name: 'platformUP',
		component:Layout,
		meta:{
			title:'平台上货',
		  icon: 'icon-ptsh',
		},
		noDropdown:true,
		children:[ 
			{
				path:'platformUP', 
				meta:{
					title:'平台上货', 
					icon:'icon-ptsh',
				  routerType:'leftmenu'
				},
				component: () => import('@/page/share'),
			}
		]
	},

	{
		path: '/index',
		name: 'upRecoder',
		component:Layout,
		meta:{
			title:'上货记录',
		  icon: 'icon-shjl',
		},
		noDropdown:true,
		children:[ 
			{
				path:'upRecoder', 
				meta:{
					title:'上货记录', 
					icon:'icon-shjl',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/infoManage/infoModify')
			}
		]
	},

	{
		path: '/index',
		name: 'authMove',
		component:Layout,
		meta:{
			title:'授权搬家',
		  icon: 'icon-sqbj',
		},
		noDropdown:true,
		children:[ 
			{
				path:'authMove', 
				meta:{
					title:'授权搬家', 
					icon:'icon-sqbj',
				  routerType:'leftmenu'
				},
				component: () => import('@/page/fundData/typePosition')
			}
		]
	},

	{
		path: '/index',
		name: 'originSync',
		component:Layout,
		meta:{
			title:'源商品同步',
		  icon: 'icon-sptb',
		},
		noDropdown:true,
		children:[ 
			{
				path:'originSync', 
				meta:{
					title:'源商品同步', 
					icon:'icon-sptb',
				  routerType:'leftmenu'
				},
				component: () => import('@/page/fundData/incomePayPosition')
			}
		]
	},

	{
		path: '/index',
		name: 'descMrg',
		component:Layout,
		meta:{
			title:'暂存描述管理',
		  icon: 'icon-yspgl',
		},
		noDropdown:true,
		children:[ 
			{
				path:'descMrg', 
				meta:{
					title:'暂存描述管理', 
					icon:'icon-yspgl',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/fundList/chinaTabsList'),
			}
		]
	},

	{
	  path:'/goodsCollect',
	  name: 'goodsCollect',
	  meta: {
			title:'商品采集',
			icon: 'icon-spcj',
	  },
	  component:Layout,
	  children:[
		{
		   path:'goodsCollect1',
		   name:'goodsCollect1',
		   meta: {
					title:'商品采集1',
					icon: 'icon-spcj',
					routerType:'leftmenu',
			 },
			 component: () => import('@/page/userList/userList'),
			 children:filterTopRouterMap('infoShow')
		},
		{
			path:'goodsCollect2',
			name:'goodsCollect2',
			meta: {
				title:'商品采集2',
				icon: 'icon-spcj',
				routerType:'leftmenu',
			},
			component: () => import('@/page/fundList/fundList'),
			children:filterTopRouterMap('infoModify')
		 }
	  ]
	},

	{
	  path:'/cloudGoodsMgr',
	  name: 'cloudGoodsMgr',
	  meta: {
			title:'云商品管理',
			icon: 'icon-yunshangpinku',
	  },
	  component:Layout,
	  children:[
		{
		   path:'cloudGoodsMgr1',
		   name:'cloudGoodsMgr1',
		   meta: {
					title:'云商品管理1',
					icon: 'icon-yunshangpinku',
					routerType:'leftmenu',
			 },
			 component: () => import('@/page/fundList/chinaTabsList'),
			 children:filterTopRouterMap('infoShow')
		},
		{
			path:'cloudGoodsMgr2',
			name:'cloudGoodsMgr2',
			meta: {
				title:'云商品管理2',
				icon: 'icon-yunshangpinku',
				routerType:'leftmenu',
			},
			component: () => import('@/page/fundData/fundPosition'),
			children:filterTopRouterMap('infoModify')
		 }
	  ]
	},



	// {
	// 	path: '/index',
	// 	name: 'index',
	// 	component:Layout,
	// 	meta:{
	// 		title:'首页',
	// 	  icon: 'icondashboard',
	// 	},
	// 	noDropdown:true,
	// 	children:[ 
	// 		{
	// 			path:'index', 
	// 			meta:{
	// 				title:'首页', 
	// 				icon:'icondashboard',
	// 			  routerType:'leftmenu'
	// 			},
  //       component: () => import('@/page/index/index'),
	// 		}
	// 	]
	// }
]

//商品管理对于导航
export const goodsMgrRouterMap = [
	
	{
		path: '/index',
		name: 'goodsEdit',
		component:Layout,
		meta:{
			title:'商品编辑',
		  icon: 'icon-plsh',
		},
		noDropdown:true,
		children:[ 
			{
				path:'goodsEdit', 
				meta:{
					title:'goodsEdit', 
					icon:'icon-plsh',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/index/index'),
			}
		]
	},

	{
		path: '/index',
		name: 'pngPic',
		component:Layout,
		meta:{
			title:'透明图',
		  icon: 'icon-zdsh',
		},
		noDropdown:true,
		children:[ 
			{
				path:'pngPic', 
				meta:{
					title:'透明图', 
					icon:'icon-zdsh',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/infoManage/infoShow')
			}
		]
	},

	{
	  path:'/saleWater',
	  name: 'saleWater',
	  meta: {
			title:'促销水印',
			icon: 'icon-spcj',
	  },
	  component:Layout,
	  children:[
		{
		   path:'saleWater1',
		   name:'saleWater1',
		   meta: {
					title:'促销水印1',
					icon: 'icon-spcj',
					routerType:'leftmenu',
			 },
			 component: () => import('@/page/userList/userList'),
			 children:filterTopRouterMap('infoShow')
		},
		{
			path:'saleWater2',
			name:'saleWater2',
			meta: {
				title:'促销水印2',
				icon: 'icon-spcj',
				routerType:'leftmenu',
			},
			component: () => import('@/page/fundList/fundList'),
			children:filterTopRouterMap('infoModify')
		 }
	  ]
	},

	{
	  path:'/videoPic',
	  name: 'videoPic',
	  meta: {
			title:'主视频图',
			icon: 'icon-yunshangpinku',
	  },
	  component:Layout,
	  children:[
		{
		   path:'videoPic1',
		   name:'videoPic1',
		   meta: {
					title:'主视频图1',
					icon: 'icon-yunshangpinku',
					routerType:'leftmenu',
			 },
			 component: () => import('@/page/fundList/chinaTabsList'),
			 children:filterTopRouterMap('infoShow')
		},
		{
			path:'videoPic2',
			name:'videoPic2',
			meta: {
				title:'主视频图2',
				icon: 'icon-yunshangpinku',
				routerType:'leftmenu',
			},
			component: () => import('@/page/fundData/fundPosition'),
			children:filterTopRouterMap('infoModify')
		 }
	  ]
	},
]

//一键修改对于导航
export const keyChangeRouterMap = [
	
	{
		path: '/index',
		name: 'keyChange1',
		component:Layout,
		meta:{
			title:'一键修改1',
		  icon: 'icon-plsh',
		},
		noDropdown:true,
		children:[ 
			{
				path:'keyChange1', 
				meta:{
					title:'keyChange1', 
					icon:'icon-plsh',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/index/index'),
			}
		]
	},

	{
		path: '/index',
		name: 'keyChange2',
		component:Layout,
		meta:{
			title:'一键修改2',
		  icon: 'icon-plsh',
		},
		noDropdown:true,
		children:[ 
			{
				path:'keyChange2', 
				meta:{
					title:'keyChange2', 
					icon:'icon-plsh',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/index/index'),
			}
		]
	},
	


	{
	  path:'/saleWater',
	  name: 'keyChange3',
	  meta: {
			title:'一键修改3',
			icon: 'icon-spcj',
	  },
	  component:Layout,
	  children:[
		{
		   path:'keyChange31',
		   name:'keyChange31',
		   meta: {
					title:'一键修改31',
					icon: 'icon-spcj',
					routerType:'leftmenu',
			 },
			 component: () => import('@/page/userList/userList'),
			 children:filterTopRouterMap('infoShow')
		},
		{
			path:'keyChange32',
			name:'keyChange32',
			meta: {
				 title:'一键修改32',
				 icon: 'icon-spcj',
				 routerType:'leftmenu',
			},
			component: () => import('@/page/userList/userList'),
			children:filterTopRouterMap('infoShow')
	 },
	  ]
	},

	{
		path: '/index',
		name: 'keyChange4',
		component:Layout,
		meta:{
			title:'一键修改4',
		  icon: 'icon-plsh',
		},
		noDropdown:true,
		children:[ 
			{
				path:'keyChange4', 
				meta:{
					title:'keyChange4', 
					icon:'icon-plsh',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/index/index'),
			}
		]
	},

	
]

//实用工具对应导航
export const toolRouterMap = [
	
	{
		path: '/index',
		name: 'tool1',
		component:Layout,
		meta:{
			title:'实用工具1',
		  icon: 'icon-plsh',
		},
		noDropdown:true,
		children:[ 
			{
				path:'tool1', 
				meta:{
					title:'tool1', 
					icon:'icon-plsh',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/index/index'),
			}
		]
	},

	{
		path: '/index',
		name: 'tool2',
		component:Layout,
		meta:{
			title:'实用工具2',
		  icon: 'icon-plsh',
		},
		noDropdown:true,
		children:[ 
			{
				path:'tool2', 
				meta:{
					title:'tool2', 
					icon:'icon-plsh',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/index/index'),
			}
		]
	},
	


	{
	  path:'/index',
	  name: 'tool3',
	  meta: {
			title:'实用工具3',
			icon: 'icon-spcj',
	  },
	  component:Layout,
	  children:[
		{
		   path:'tool31',
		   name:'tool31',
		   meta: {
					title:'实用工具31',
					icon: 'icon-spcj',
					routerType:'leftmenu',
			 },
			 component: () => import('@/page/userList/userList'),
			 children:filterTopRouterMap('infoShow')
		},
		{
			path:'tool32',
			name:'tool32',
			meta: {
				 title:'实用工具32',
				 icon: 'icon-spcj',
				 routerType:'leftmenu',
			},
			component: () => import('@/page/userList/userList'),
			children:filterTopRouterMap('infoShow')
	 },
	  ]
	},

	{
		path: '/index',
		name: 'tool4',
		component:Layout,
		meta:{
			title:'实用工具4',
		  icon: 'icon-plsh',
		},
		noDropdown:true,
		children:[ 
			{
				path:'tool4', 
				meta:{
					title:'tool4', 
					icon:'icon-plsh',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/index/index'),
			}
		]
	},

	
]

//基础设施对应导航
export const baseRouterMap = [
	
	{
		path: '/index',
		name: 'base1',
		component:Layout,
		meta:{
			title:'基础设施1',
		  icon: 'icon-plsh',
		},
		noDropdown:true,
		children:[ 
			{
				path:'base1', 
				meta:{
					title:'base1', 
					icon:'icon-plsh',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/index/index'),
			}
		]
	},

	{
		path: '/index',
		name: 'base2',
		component:Layout,
		meta:{
			title:'基础设施2',
		  icon: 'icon-plsh',
		},
		noDropdown:true,
		children:[ 
			{
				path:'base2', 
				meta:{
					title:'base2', 
					icon:'icon-plsh',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/index/index'),
			}
		]
	},

	{
		path: '/index',
		name: 'base3',
		component:Layout,
		meta:{
			title:'基础设施3',
		  icon: 'icon-plsh',
		},
		noDropdown:true,
		children:[ 
			{
				path:'base3', 
				meta:{
					title:'base3', 
					icon:'icon-plsh',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/index/index'),
			}
		]
	},

	{
		path: '/index',
		name: 'base4',
		component:Layout,
		meta:{
			title:'基础设施4',
		  icon: 'icon-plsh',
		},
		noDropdown:true,
		children:[ 
			{
				path:'base4', 
				meta:{
					title:'base4', 
					icon:'icon-plsh',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/index/index'),
			}
		]
	},

	{
		path: '/index',
		name: 'videoCourse',
		component:Layout,
		meta:{
			title:'视频教程',
		  icon: 'icon-plsh',
		},
		hidden:true,
		noDropdown:true,
		children:[ 
			{
				path:'videoCourse', 
				meta:{
					title:'videoCourse', 
					icon:'icon-plsh',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/infoManage/infoShow'),
			}
		]
	},
	
	
]


	//注册路由
export default new Router({
	mode:'hash', // 默认为'hash'模式
	base: '/permission/', // 添加跟目录,对应服务器部署子目录
	routes: constantRouterMap.concat(goodsMgrRouterMap).concat(keyChangeRouterMap).concat(toolRouterMap).concat(baseRouterMap)
})

  //异步路由（需要权限的页面）
export const asyncRouterMap = [

	

	/*
	{
		path:'/userManager',
		name: 'userManage',
		component:Layout,
		meta: {
			title:'用户管理',
			icon: 'iconuser',
		},
		noDropdown:true,
		children:[
			{
				path:'userList', 
				meta:{
					title:'用户管理', 
					icon:'iconuser',
				  routerType:'leftmenu'
				},
				component: () => import('@/page/userList/userList'),
			}
		]
	},
	{
		path:'/share',
		name: 'share',
		component:Layout,
		meta: {
			title:'分享功能',
			icon: 'iconshare',
		},
		noDropdown:true,
		children:[
			{
				path:'share', 
				meta:{
				  title:'分享功能', 
				  icon:'iconshare',
				  routerType:'leftmenu'
				},
				component: () => import('@/page/share'),
			}
		]
	},
	{
	  path:'/infoManage',
	  name: 'infoManage',
	  meta: {
			title:'信息管理',
			icon: 'iconinfo',
	  },
	  component:Layout,
	  children:[
		{
		   path:'infoShow',
		   name:'infoShow',
		   meta: {
					title:'个人信息',
					icon: 'iconinfo',
					routerType:'leftmenu',
					titleList:[
						{"path":"infoShow1","title":"个人信息子菜单1"},
						{"path":"infoShow2","title":"个人信息子菜单2"},
						{"path":"infoShow3","title":"个人信息子菜单3"},
						{"path":"infoShow4","title":"个人信息子菜单4"},
						{"path":"infoShow5","title":"个人信息子菜单5"}
					]	
			 },
	  	 component:Content,
			 children:filterTopRouterMap('infoShow')
		},
		{
			path:'infoModify',
			name:'infoModify',
			meta: {
				title:'修改信息',
				icon: 'iconinfo',
				routerType:'leftmenu',
				titleList:[
					{"path":"infoModify1","title":"修改信息子菜单1"},
					{"path":"infoModify2","title":"修改信息子菜单2"},
					{"path":"infoModify3","title":"修改信息子菜单3"}
				]
			},
			component:Content,
			children:filterTopRouterMap('infoModify')
		 }
	  ]
	},
	{
		path:'/fundManage',
		name: 'fundManage',
		meta: {
		  title:'资金管理',
		  icon: 'iconpay3',
		},
		component:Layout,
		children:[
		  {
			path:'fundList',
			name:'fundList',
			meta: {
					title:'资金流水',
					routerType:'leftmenu'
			},
			component: () => import('@/page/fundList/fundList'),
		  },
		  {
			path:'chinaTabsList',
			name:'chinaTabsList',
			meta: {
				title:'区域投资',
				routerType:'leftmenu'
			},
			component: () => import('@/page/fundList/chinaTabsList'),
			}
		]
	},
	{
		path:'/fundData',
		name: 'fundData',
		meta: {
		  title:'资金数据',
		  icon: 'iconecharts',
		},
		component:Layout,
		redirect: '/fundData/fundPosition',
		children:[
		  {
			 path:'fundPosition',
			 name:'fundPosition',
			 meta: {
				  title:'投资分布'
			 },
			 component: () => import('@/page/fundData/fundPosition')
		  },
		  {
			  path:'typePosition',
			  name:'typePosition',
			  meta: {
				   title:'项目分布'
				},
				component: () => import('@/page/fundData/typePosition')
		   },
		   {
				path:'incomePayPosition',
				name:'incomePayPosition',
				meta: {
					title:'收支统计'
				},
				component: () => import('@/page/fundData/incomePayPosition')
		    }
		]
	},
	{
    path: '/permission',
		name: 'permission',
		meta: {
      title: '权限设置',
      icon: 'iconpermission',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    component: Layout,
    redirect: '/permission/page',
    children: [{
			path: 'page',
			name: 'pagePer',
      meta: {
        title: '页面权限',
        roles: ['admin'] // or you can only set roles in sub nav
      },
      component: () => import('@/page/permission/page'),
    }, {
			path: 'directive',
			name: 'directivePer',
      meta: {
				title: '按钮权限',
				roles:['editor']
      },
      component: () => import('@/page/permission/directive'),
    }]
	},*/
	


  {
    path: '/error',
    component: Layout,
		name: 'errorPage',
		hidden:true,
    meta: {
      title: '错误页面', 
      icon: 'iconError'
    },
    children: [
			{  
				path: '401', 
				name: 'page401', 
				component: () => import('@/page/errorPage/401'), 
				meta: { 
					title: '401', 
					noCache: true 
			  }
			},
			{
				path: '404', 
				name: 'page404', 
				component: () => import('@/page/errorPage/404'), 
				meta: { 
					title: '404', 
					noCache: true
				}
			}
    ]
	},
	
	//头部导航
	{
		path: '/index',
		name: 'index',
		component:Layout,
		meta:{
			title:'首页',
		  icon: 'icondashboard',
		},
		noDropdown:true,
		hidden:true,
		children:[ 
			{
				path:'index', 
				meta:{
					title:'首页', 
					icon:'icondashboard',
				  routerType:'leftmenu'
				},
        component: () => import('@/page/index/index'),
			}
		]
	},

	{ path: '*', redirect: '/404', hidden: true }
	];
	
	/**
	 *  路由设置要求：
	 * 1、该路由有子菜单,可以设置多层嵌套路由children;如果没有子菜单,不需要设置children;通过item.children.length来判断路由的级数;
	 * 2、登录成功后,定位到系统首页时,需要加载页面整体布局组件Layout并进行子路由定向加载;
	 * 
	 * 按需加载路由组件的2种方法：
	 * 1、component: () => import('@/page/login')
	 * 2、component:resolve => require(['@/page/fundPosition'], resolve)
	 * 
	 * 
	 * 
	 * 什么情况下，路由会定位到404页面?
	 * 路由中redirect:'',不起作用？
	 * 三级子菜单要在顶部展示？
	 * 
	 * 
	 * 
	 */

