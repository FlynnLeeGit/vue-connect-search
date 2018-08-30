export const forEach = (obj, fn) => {
  for (let k in obj) {
    fn(obj[k], k)
  }
}
export const isDef = s => s !== undefined

// just for object shallow equal
export const isEqual = (s1, s2) => {
  const keysS1 = Object.keys(s1)
  const keysS2 = Object.keys(s2)
  if (keysS1.length !== keysS2.length) {
    return false
  } else {
    let res = true
    for (let k1 in s1) {
      if (s2[k1] !== s1[k1]) {
        res = false
      }
    }
    return res
  }
}
