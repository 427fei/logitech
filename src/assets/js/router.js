import VueRouter from 'vue-router'
import first from '../../components/first.vue'
import index from '../../components/index.vue'
import type from '../../components/type.vue'
import find from '../../components/find.vue'
import shopcar from '../../components/shopcar.vue'
import log from '../../components/log.vue'
import detail from '../../components/detail.vue'
import reg from '../../components/reg.vue'
import my from '../../components/my.vue'

var router = new VueRouter({
	routes: [{
		path:'/',
		component:first,
		children:[
		{
			path:'/index',
			component:index
		}],
		redirect:'/index'
	},
	{
		path:'/type',
		component:first,
		children:[
		{
			path:'/type',
			component:type
		}],
		redirect:'/type'
	},
	{
		path:'/find',
		component:find
	},
	{
		path:'/shopcar',
		component:first,
		children:[
		{
			path:'/shopcar',
			component:shopcar
		}],
		redirect:'/shopcar'
	},
	{
		path:'/log',
		component:log
	},
	{
		path:'/reg',
		component:reg
	},
	{
		path:'/detail',
		component:detail
	},
	{
		path:'/my',
		component:first,
		children:[
		{
			path:'/my',
			component:my
		}],
		redirect:'/my'
	},
	{
		path:'/*',
		redirect:'/index'
	}
	]
})
export default router;