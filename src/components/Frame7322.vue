<template>
  <div :class="[`frame-7322-1`, className || ``]">
    <div class="place valign-text-middle pretendard-regular-normal-log-cabin-14px">{{ place }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame7322",
  props: ["place", "className"],
};
</script>

<style>
.frame-7322-1 {
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

.place {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}

.frame-7322-1.frame-80-3 {
  background-color: var(--blackwhitewhite);
}

.frame-7322-1.frame-80-4 {
  background-color: var(--blackwhitewhite);
  border-color: unset;
  border-right-style: unset;
  border-right-width: unset;
}
</style>
