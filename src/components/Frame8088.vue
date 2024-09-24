<template>
  <div :class="[`frame-8088`, className || ``]">
    <div class="text-14-15 valign-text-middle pretendard-bold-log-cabin-18px">{{ text1449 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame8088",
  props: ["text1449", "className"],
};
</script>

<style>
.frame-8088 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 12px;
  padding: 10px 0px;
  position: relative;
  width: 100%;
}

.text-14-15 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-8088.frame-8088-1 {
  align-self: unset;
  width: 320px;
}
</style>
