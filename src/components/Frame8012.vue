<template>
  <div :class="[`frame-80-5`, className || ``]">
    <div class="color-2 valign-text-middle pretendard-regular-normal-log-cabin-14px">{{ color }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame8012",
  props: ["color", "className"],
};
</script>

<style>
.frame-80-5 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border-color: var(--alto);
  border-right-style: solid;
  border-right-width: 0.5px;
  display: flex;
  height: 40px;
  justify-content: center;
  position: relative;
  width: 60px;
}

.color-2 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}
</style>
