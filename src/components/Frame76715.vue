<template>
  <div :class="[`frame-7671-15`, className || ``]">
    <div class="text-1072 valign-text-middle pretendard-bold-log-cabin-18px">{{ text1072 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame76715",
  props: ["text1072", "className"],
};
</script>

<style>
.frame-7671-15 {
  align-items: center;
  border-color: var(--alto);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-style: solid;
  border-right-width: 1px;
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  gap: 10px;
  height: 60px;
  justify-content: center;
  padding: 23px 159px;
  position: relative;
  width: 466.66px;
}

.text-1072 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7671-15.frame-7671-16 {
  border-color: var(--celeste);
}
</style>
