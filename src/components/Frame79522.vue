<template>
  <div :class="[`frame-7952-4`, className || ``]">
    <div class="text-9-15 valign-text-middle pretendard-medium-black-24px">{{ text940 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame79522",
  props: ["text940", "className"],
};
</script>

<style>
.frame-7952-4 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 20px;
  position: relative;
  width: 236px;
}

.text-9-15 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7952-4.frame-7952-2,
.frame-7952-4.frame-7952-3 {
  flex: unset;
}
</style>
