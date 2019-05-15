import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/authorize/Register'
import ForgotPass from '@/authorize/ForgotPass'
import UserCenter from '@/authorize/UserCenter'
import Center from '@/components/operation/Center'
import HonorShow from '@/components/operation/center/honorOper/HonorShow'
import PaperShow from '@/components/operation/center/paperOper/PaperShow'
import PatentShow from '@/components/operation/center/patentOper/PatentShow'
import AcadExchShow from '@/components/operation/center/acadExchOper/AcadExchShow'
import CompetitionShow from '@/components/operation/center/competitionOper/CompetitionShow'
import EngiProShow from '@/components/operation/center/engiProOper/EngiProShow'
import EntrProShow from '@/components/operation/center/entrProOper/EntrProShow'
import InnoProShow from '@/components/operation/center/innoProOper/InnoProShow'
import MasterPaperShow from '@/components/operation/center/masterPaperOper/MasterPaperShow'
import WorkShow from '@/components/operation/center/workOper/WorkShow'
import ProjectShow from '@/components/operation/center/projectOper/ProjectShow'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/register',
    	name: 'Register',
    	component: Register
    },
    {
      path: '/forgotpass',
      name: 'ForgotPass',
      component: ForgotPass
    },
    {
      path: '/usercenter',
      name: 'UserCenter',
      component: UserCenter
    },
    {
      path: '/center',
      name: 'Center',
      component: Center,
      meta: {authRequired: true}
    },
    {      
      path: '/honorshow',
      name: 'HonorShow',
      component: HonorShow,
      meta: {authRequired: true}
    },
    {      
      path: '/paperShow',
      name: 'PaperShow',
      component: PaperShow,
      meta: {authRequired: true}
    },
    {     
      path: '/patentshow',
      name: 'PatentShow',
      component: PatentShow,
      meta: {authRequired: true}
    },
    {     
      path: '/acadExchShow',
      name: 'AcadExchShow',
      component: AcadExchShow,
      meta: {authRequired: true}
    },
    {     
      path: '/competitionShow',
      name: 'CompetitionShow',
      component: CompetitionShow,
      meta: {authRequired: true}
    },
    {     
      path: '/engiProShow',
      name: 'EngiProShow',
      component: EngiProShow,
      meta: {authRequired: true}
    },
    {     
      path: '/entrProShow',
      name: 'EntrProShow',
      component: EntrProShow,
      meta: {authRequired: true}
    },
    {     
      path: '/innoProShow',
      name: 'InnoProShow',
      component: InnoProShow,
      meta: {authRequired: true}
    },
    {     
      path: '/masterPaperShow',
      name: 'MasterPaperShow',
      component: MasterPaperShow,
      meta: {authRequired: true}
    },
    {     
      path: '/workShow',
      name: 'WorkShow',
      component: WorkShow,
      meta: {authRequired: true}
    },
    {     
      path: '/projectShow',
      name: 'ProjectShow',
      component: ProjectShow,
      meta: {authRequired: true}
    },


    // {     
    //   path: '/orderedit',
    //   name: 'OrderEdit',
    //   component: OrderEdit,
    //   meta: {authRequired: true}
    // }
  ]
})

// router.beforeEach((to, from, next) => {    //判断是否需要登录拦截
//   if (to.meta.authRequired) {        //存在token正常跳转
//     if (sessionStorage.getItem('status') != 0) {
//       next()
//     } else {
//       next({path: '/'})
//       // next()
//     }
//   } else {
//     next()
//   }
// })

export default router
