import Vue from "vue";
import Router from "vue-router";
import Init from "@/components/Init";
import Trash from "@/components/Trash";
import NotebookList from "@/components/NotebookList";
import NoteDetail from "@/components/NoteDetail";
import Home from "@/components/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "init",
      component: Init
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      children: [
        {
          path: "notebooks",
          name: "notebooks",
          component: NotebookList
        },
        {
          path: "note/:noteId",
          name: "notedetail",
          component: NoteDetail
        },
        {
          path:'note',
          name:'note',
          // component:BG
        },
        {
          path: "trash/:noteId",
          name: "trashdetail",
          component: Trash
        },
        {
          path:'trash',
          name:'trash',
        
        }
      ]
    }
  ]
});
