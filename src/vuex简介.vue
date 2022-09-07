<template>
  <div>
    <!-- <router-view></router-view> -->
    <h1>{{ count }}</h1>
    <h2>10倍关系:{{ a2 }}</h2>
    <button @click="a1(10)">点击</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
// console.log(mapState(['count']))
export default {
  methods: {
    // btn() {
    //   this.$store.commit('a1', 10)
    // }
    ...mapMutations(['a1'])
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['a2'])
  }
}
</script>

<style scoped></style>
