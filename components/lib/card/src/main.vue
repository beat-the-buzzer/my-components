<template>
  <div class="main-card" :style="width ? {width: width + 'px'} : {}">
    <div class="main-card-img" :style="imageHeight ? {height: imageHeight + 'px'} : {}">
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="main-card-summary">{{summary}}</div>
    <div v-else class="main-card-summay">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    width: {
      type: Number,
      default: 0
    },
    imgSrc: {
      type: String,
      default: ''
    },
    imageHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: ''
    }
  }
}
</script>
