<template>
  <div :class="[`frame-7301`, className || ``]">
    <div class="frame-7298"></div>
  </div>
</template>

<script>
export default {
  name: "Frame7301",
  props: ["className"],
};
</script>

<style>
.frame-7301 {
  align-items: center;
  border-radius: 20px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 40px;
  margin-left: -4.5px;
  position: relative;
}

.frame-7298 {
  background-image: url(https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/frame-7298@2x.png);
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 20px;
  height: 200px;
  position: relative;
  width: 200px;
}

.frame-7301.frame-7301-1 {
  margin-left: -2px;
}

.frame-7301.frame-7301-2 {
  margin-left: unset;
}
</style>
