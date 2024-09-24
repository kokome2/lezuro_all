<template>
  <div :class="[`frame-7673-4`, className || ``]">
    <div class="text-473 valign-text-middle pretendard-medium-granite-gray-14px">{{ text473 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame76732",
  props: ["text473", "className"],
};
</script>

<style>
.frame-7673-4 {
  align-items: center;
  background-color: var(--cultured-pearl);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--celeste);
  display: flex;
  gap: 10px;
  height: 50px;
  justify-content: center;
  padding: 23px 151px;
  position: relative;
  width: 106px;
}

.text-473 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -2px;
  margin-left: -132px;
  margin-right: -132px;
  margin-top: -4px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7673-4.frame-7673-7 .text-473 {
  margin-left: -130px;
  margin-right: -130px;
}
</style>
