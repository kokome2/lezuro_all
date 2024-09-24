<template>
  <div class="frame-7628">
    <frame7613 :text123="frame7613Props.text123" />
    <div class="frame-7611-16">
      <div class="text-2088 valign-text-middle pretendard-medium-mountain-mist-16px">생년월일을 입력하세요</div>
      <img
        class="vector-189"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-60.svg"
        alt="Vector"
      />
    </div>
  </div>
</template>

<script>
import Frame7613 from "./Frame7613";
export default {
  name: "Frame7628",
  components: {
    Frame7613,
  },
  props: ["frame7613Props"],
};
</script>

<style>
.frame-7628,
.frame-7628-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}

.frame-7611-16,
.frame-7611-17 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  height: 55px;
  justify-content: space-between;
  padding: 0px 20px;
  position: relative;
  width: 560px;
}

.text-2088,
.text-2207 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.vector-189,
.vector-190 {
  height: 20px;
  position: relative;
  width: 20px;
}
</style>
