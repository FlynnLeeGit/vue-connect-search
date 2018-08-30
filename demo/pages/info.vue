<template>
    <div>
        <h4>
            Info Page (Open Console See Detail)
        </h4>
        <ul class="aside">
            <li>
                <router-link :to="{query:{}}">should use default</router-link>
            </li>
            <li>
                <router-link :to="{query:{name:'angelina'}}">should merge name</router-link>
            </li>
            <li>
                <router-link :to="{query:{status:''}}"> should keep ''</router-link>
            </li>
            <li>
                <router-link :to="{query:{extra:'hello'}}"> should append</router-link>
            </li>
            <li>
                <router-link :to="{query:{version:'6'}}">should version to Number</router-link>
            </li>
            <li>
                <router-link :to="{query:{version:'0'}}">should version '0' correct</router-link>
            </li>
            <li>
                <router-link :to="{query:{unknown:'8'}}">should no default correct</router-link>
            </li>
            <li>
                <a href="/info?name=angel&version=3&extra=6">should a link ok</a>
            </li>
            <li>
                <button @click="goto('/info?a=1&name=test')">manual go to</button>
            </li>
        </ul>
        <div class="content">
            <p>
                $search is
            </p>
            <p>
                {{$search}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
  connectSearch: {
    schema: {
      version: { type: Number, defualt: 1 },
      name: { type: String, default: 'FlynnLee' },
      status: { type: Number, default: 0 },
      unknown: { type: Number }
    },
    onQueryChange() {
      console.log('query change', JSON.parse(JSON.stringify(this.$search)))
    }
  },
  methods:{
      goto(url){
        this.$router.push(url)
      }
  }
}
</script>

<style>
.aside {
  float: left;
  text-align: left;
}
.content {
  padding: 20px;
  overflow: hidden;
}
</style>
