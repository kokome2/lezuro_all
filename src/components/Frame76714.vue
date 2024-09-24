<template>
  <div :class="[`frame-7671-12`, className || ``]">
    <div class="text-926 valign-text-middle pretendard-bold-log-cabin-14px">{{ text926 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame76714",
  props: ["text926", "className"],
};
</script>

<style>
.frame-7671-12 {
  align-items: center;
  border-color: var(--celeste);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-style: solid;
  border-right-width: 1px;
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  gap: 10px;
  height: 50px;
  justify-content: center;
  padding: 23px 159px;
  position: relative;
  width: 106px;
}

.text-926 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -2px;
  margin-left: -139.5px;
  margin-right: -139.5px;
  margin-top: -4px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7671-12.frame-7671-13 .text-926,
.frame-7671-12.frame-7671-14 .text-926 {
  margin-left: -138px;
  margin-right: -138px;
}
</style>
