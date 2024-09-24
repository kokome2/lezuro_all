<template>
  <div :class="[`frame-80-7-1`, className || ``]">
    <div class="place-2 valign-text-middle pretendard-bold-log-cabin-14px">{{ place }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame8084",
  props: ["place", "className"],
};
</script>

<style>
.frame-80-7-1 {
  align-items: center;
  background-color: var(--wild-sand);
  border-color: var(--alto);
  border-right-style: solid;
  border-right-width: 0.5px;
  display: flex;
  height: 40px;
  justify-content: center;
  position: relative;
  width: 60px;
}

.place-2 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}

.frame-80-7-1.frame-8093 {
  border-color: unset;
  border-right-style: unset;
  border-right-width: unset;
}
</style>
