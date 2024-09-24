<template>
  <div :class="[`frame-7950`, className || ``]">
    <div class="frame-7948">
      <div class="frame-7672-2">
        <div class="text-300 valign-text-middle pretendard-regular-normal-mine-shaft-14px">{{ text300 }}</div>
        <img
          class="vector-99"
          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-18.svg"
          alt="Vector"
        />
      </div>
    </div>
    <frame7949 :text301="frame7949Props.text301" />
  </div>
</template>

<script>
import Frame7949 from "./Frame7949";
export default {
  name: "Frame7950",
  components: {
    Frame7949,
  },
  props: ["text300", "className", "frame7949Props"],
};
</script>

<style>
.frame-7950 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-right: 8px;
  margin-top: 31px;
  position: relative;
  width: 320px;
}

.frame-7948 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;
}

.frame-7672-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto);
  display: flex;
  flex: 1;
  flex-grow: 1;
  height: 54px;
  justify-content: space-between;
  padding: 0px 15px;
  position: relative;
}

.text-300 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: 73px;
}

.vector-99 {
  height: 6.11px;
  position: relative;
  width: 11.61px;
}

.frame-7950.frame-7950-1,
.frame-7950.frame-7950-2 {
  flex: 0 0 auto;
  margin-right: unset;
  margin-top: unset;
}

.frame-7950.frame-7950-1 .vector-99,
.frame-7950.frame-7950-2 .vector-99 {
  height: 6.11px;
}
</style>
