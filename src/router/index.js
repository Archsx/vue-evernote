import Vue from 'vue'
import Router from 'vue-router'
import Init from '@/components/Init'
import Trash from '@/components/Trash'
import NoteList from '@/components/NoteList'
import NoteDetail from '@/components/NoteDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'init',
      component: Init
    },
    {
      path:'/notebooks',
      name:'notebooks',
      component:NoteList
    },
    {
      path:'/note/:noteId',
      name:'notedetail',
      component:NoteDetail
    },
    {
      path:'/trash/:noteId',
      name:'trash',
      component:Trash
    }
  ]
})
