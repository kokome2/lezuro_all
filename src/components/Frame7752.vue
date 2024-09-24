<template>
  <div :class="[`frame-7752`, className || ``]" @click="$emit('click')">
    <div class="text-17-14 valign-text-middle pretendard-bold-white-18px">{{ text1779 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame7752",
  props: ["text1779", "className"],
};
</script>

<style>
.frame-7752 {
  background-color: var(--torea-bay);
  height: 48px;
  position: relative;
  width: 355px;
}

.text-17-14 {
  height: 21px;
  left: 146px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 13px;
  white-space: nowrap;
}

.frame-7752.frame-7284 {
  background-color: var(--monza);
}
</style>
