import { forEach, isDef } from "./util";
export const generateSearch = (schema, route, vm) => {
  const search = Object.assign({}, route.query)
  forEach(schema, (v, k) => {
    const searchValue = search[k]
    // for Number Type but '',we keep it
    if (searchValue) {
      switch (v.type) {
        case String:
          search[k] = searchValue + ''
          break
        case Number:
          search[k] = +searchValue
          break
        default:
          break
      }
    }
    if (!isDef(searchValue) && isDef(v.default)) {
      search[k] = v.default
    }
  })
  return search
}
