<template>
  <div :class="[`frame-767-2`, className || ``]">
    <div class="text-1571 valign-text-middle pretendard-regular-normal-mine-shaft-14px">{{ text1571 }}</div>
    <img
      class="vector-167"
      src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-40.svg"
      alt="Vector"
    />
  </div>
</template>

<script>
export default {
  name: "Frame7672",
  props: ["text1571", "className"],
};
</script>

<style>
.frame-767-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto);
  display: flex;
  height: 54px;
  justify-content: space-between;
  padding: 0px 15px;
  position: relative;
  width: 155px;
}

.text-1571 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: 73px;
}

.vector-167 {
  height: 6.11px;
  position: relative;
  width: 11.61px;
}

.frame-767-2.frame-767 .text-1571,
.frame-767-2.frame-767-1 .text-1571 {
  width: 99px;
}

.frame-767-2.frame-767-1-1 .vector-167,
.frame-767-2.frame-767-1 .vector-167 {
  height: 6.11px;
}
</style>
