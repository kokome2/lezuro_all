<template>
  <div :class="[`frame-7342`, className || ``]">
    <div class="ellipse-2-1"></div>
    <div class="ellipse-2"></div>
    <div class="ellipse-2 variant-1"></div>
    <div class="ellipse-2 variant-2"></div>
    <div class="ellipse-2 variant-3"></div>
  </div>
</template>

<script>
export default {
  name: "Frame7342",
  props: ["className"],
};
</script>

<style>
.frame-7342 {
  align-items: center;
  align-self: center;
  display: flex;
  gap: 10px;
  height: 4px;
  margin-left: 0.09px;
  position: relative;
  width: 90px;
}

.ellipse-2-1 {
  background-color: var(--blackwhitewhite);
  border: 2px solid;
  border-radius: 5px;
  height: 10px;
  margin-bottom: -2.91px;
  margin-top: -2.91px;
  position: relative;
  width: 10px;
}

.ellipse-2 {
  background-color: var(--white);
  border-radius: 5px;
  height: 10px;
  margin-bottom: -2.91px;
  margin-top: -2.91px;
  position: relative;
  width: 10px;
}

.frame-7342.frame-7342-1 {
  align-self: unset;
  display: inline-flex;
  height: 9px;
  margin-left: 0.2px;
  width: unset;
}

.frame-7342.frame-7342-1 .ellipse-2-1,
.frame-7342.frame-7342-1 .ellipse-2 {
  margin-bottom: -0.6px;
  margin-top: -0.6px;
}

.frame-7342.frame-7342-1 .ellipse-2.variant-1,
.frame-7342.frame-7342-1 .ellipse-2.variant-2,
.frame-7342.frame-7342-1 .ellipse-2.variant-3 {
  background-color: var(--white);
  border-radius: 5px;
  height: 10px;
  position: relative;
  width: 10px;
}
</style>
