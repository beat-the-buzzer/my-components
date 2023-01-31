<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo />
    <Card imgSrc="test1.png" summary="WebSocket入门与案例实战">
      <template v-slot:footer>
        <div>
          <div class="level">中级 · 100人报名</div>
          <div class="price">￥199.00</div>
        </div>
      </template>
    </Card>
    <br/>
    <Card :width="500" imgSrc="test2.jpg">
      Vue从入门到进阶
      <template v-slot:footer>
        <div>
          <div class="level">中级 · 100人报名</div>
          <div class="level">￥199.00</div>
        </div>
      </template></Card>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199A1;
  padding-bottom: 8px;
}

.price {
  color: #f01414;
}
</style>
