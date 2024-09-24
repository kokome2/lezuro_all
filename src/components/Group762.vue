<template>
  <div :class="[`group-762-2`, className || ``]" :style="{ 'background-image': 'url(' + group762 + ')' }">
    <img
      class="polygon-1"
      src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/polygon-1.svg"
      alt="Polygon 1"
    />
    <img
      class="vector-103"
      src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-21.svg"
      alt="Vector"
    />
  </div>
</template>

<script>
export default {
  name: "Group762",
  props: ["group762", "className"],
};
</script>

<style>
.group-762-2 {
  background-size: 100% 100%;
  height: 155px;
  position: relative;
  width: 155px;
}

.polygon-1 {
  height: 37px;
  left: 64px;
  position: absolute;
  top: 58px;
  width: 34px;
}

.vector-103 {
  height: 16px;
  left: 10px;
  position: absolute;
  top: 10px;
  width: 14px;
}
</style>
