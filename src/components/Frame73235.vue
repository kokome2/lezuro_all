<template>
  <div :class="[`frame-73-13-1`, className || ``]">
    <div class="number-234 valign-text-middle pretendard-bold-mine-shaft-18px">{{ number }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame73235",
  props: ["number", "className"],
};
</script>

<style>
.frame-73-13-1 {
  align-items: center;
  border-color: var(--alto);
  border-right-style: solid;
  border-right-width: 0.5px;
  display: flex;
  height: 50px;
  justify-content: center;
  position: relative;
  width: 85px;
}

.number-234 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}

.frame-73-13-1.frame-7331-2 {
  border-color: unset;
  border-right-style: unset;
  border-right-width: unset;
}
</style>
