<template>
  <div :class="[`group-33600-2`, className || ``]">
    <img
      class="noniconsloading-16-1"
      src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/nonicons-loading-16-1.svg"
      alt="nonicons:loading-16"
    />
  </div>
</template>

<script>
export default {
  name: "Group33600",
  props: ["className"],
};
</script>

<style>
.group-33600-2 {
  align-items: flex-end;
  background-color: var(--slimy-green);
  border-radius: 7.5px;
  display: flex;
  height: 15px;
  left: 2px;
  min-width: 15px;
  padding: 3.3px;
  position: relative;
  top: 2px;
}

.noniconsloading-16-1 {
  height: 8px;
  width: 8px;
}

.group-33600-2.group-33600-3 {
  align-items: unset;
  background-color: var(--monza);
  border-radius: 8px;
  display: unset;
  height: 16px;
  left: unset;
  min-width: unset;
  padding: unset;
  top: unset;
  width: 16px;
}

.group-33600-2.group-33600-3 .noniconsloading-16-1 {
  left: 4px;
  position: absolute;
  top: 4px;
}
</style>
