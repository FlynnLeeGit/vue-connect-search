# vue-connect-search

> simple route search sync manager

### install

```js
import Vue from 'vue'
import VueConnectSearch from 'vue-connect-search'

Vue.use(VueConnectSearch)
```

in your component

when url is `[path]?a=3&b=3&c=6` 
$search will be {a:3,b:'3',c:'6'}
```html
<template>
    <!-- auto merged by route.query && default schema -->
    {{$search}}
</template>

<script>
import { getList } from '@/api/custom-service'
export default {
  connectSearch:{
    schema:{
      a: {type: Number,default: 0},
      b: {type: String,default: ''}
    },
    // will called when query changed
    onQueryChange(){

    }
  }
}
</script>
```


### Development Setup

``` bash
# install deps
npm install

# serve demo at localhost:8080
npm run dev

# build library and demo
npm run build

# build library
npm run build:library

# build demo
npm run build:demo
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018 FlynnLee
