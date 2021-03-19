// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css' // 图标样式

import './assets/css/index.css'

import DefaultLayout from '~/layouts/Default.vue'

import moment from "moment";

export default function (Vue, { router, head, isClient }) {
  // 混入一个全局属性
  Vue.mixin({
    data() {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    }
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // 定义时间格式全局过滤器
  Vue.filter('dateFormat', function (daraStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(daraStr).format(pattern)
  })
}
