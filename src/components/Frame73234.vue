<template>
  <div :class="[`frame-73-12`, className || ``]">
    <div class="number-232 valign-text-middle pretendard-regular-normal-mine-shaft-18px">{{ number }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame73234",
  props: ["number", "className"],
};
</script>

<style>
.frame-73-12 {
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

.number-232 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}

.frame-73-12.frame-7331-1 {
  border-color: unset;
  border-right-style: unset;
  border-right-width: unset;
}
</style>
