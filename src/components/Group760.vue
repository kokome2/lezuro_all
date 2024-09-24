<template>
  <div :class="[`group-760`, className || ``]">
    <img
      class="vector-5-3"
      src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-5-3.svg"
      alt="Vector 5"
    />
  </div>
</template>

<script>
export default {
  name: "Group760",
  props: ["className"],
};
</script>

<style>
.group-760 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--celeste);
  border-radius: 25px;
  display: flex;
  height: 50px;
  justify-content: flex-end;
  left: 250px;
  min-width: 50px;
  padding: 17.5px 21.3px;
  position: absolute;
  top: 170px;
}

.vector-5-3 {
  height: 13px;
  width: 7px;
}

.group-760.group-760-1 {
  top: 155px;
}
</style>
