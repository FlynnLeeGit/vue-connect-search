import { isEqual } from "./util";
import { generateSearch } from "./generate-search";

/**
 * vue-connect-search
 * (c) 2018 FlynnLee
 * @license MIT
 */

const vueConnectSearch = {
  name: 'vue-connect-search'
}

/**
 * Plugin API
 */
vueConnectSearch.install = function(Vue) {
  Vue.mixin({
    beforeCreate() {
      if (this.$options.connectSearch) {
        const { schema } = this.$options.connectSearch
        Vue.util.defineReactive(
          this,
          '$search',
          generateSearch(schema, this.$route, this)
        )
      }
    },
    watch: {
      $route(newRoute, oldRoute) {
        if (this.$options.connectSearch) {
          const {
            onParamsChange,
            onQueryChange,
            schema
          } = this.$options.connectSearch

          const newParams = newRoute.params
          const oldParams = oldRoute.params

          // 更新search 字端值
          this.$search = generateSearch(schema, newRoute, this)

          // // 根据新的路由 更新query绑定模型
          if (isEqual(newParams, oldParams)) {
            onQueryChange && onQueryChange.call(this)
          } else {
            onParamsChange && onParamsChange.call(this)
          }
        }
      }
    }
  })
}

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueConnectSearch)
}

export default vueConnectSearch
