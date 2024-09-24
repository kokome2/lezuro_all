<template>
  <div class="frame-8201 pretendard-semi-bold-log-cabin-16px">
    <div class="frame-8202">
      <div class="frame-8152">
        <div class="text-7 valign-text-middle pretendard-semi-bold-white-16px">기록실</div>
        <img
          class="vector-87"
          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-3-1.svg"
          alt="Vector 3"
        />
      </div>
      <div class="frame-8156 pretendard-regular-normal-log-cabin-14px">
        <div class="text-7 valign-text-middle">스코어카드</div>
        <div class="text-39 valign-text-middle">나의 스윙영상</div>
      </div>
    </div>
    <frame8157 :text40="frame81571Props.text40" />
    <frame8157 :text40="frame81572Props.text40" />
    <div class="frame-81">
      <div class="text-7 valign-text-middle">코스</div>
      <img
        class="vector-3-5"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-3-3@2x.png"
        alt="Vector 3"
      />
      <img
        class="vector-87"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-3-2.svg"
        alt="Vector 4"
      />
    </div>
    <div class="frame-81">
      <div class="text-7 valign-text-middle">가이드</div>
      <img
        class="vector-3-5"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-3-3@2x.png"
        alt="Vector 3"
      />
      <img
        class="vector-87"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-3-2.svg"
        alt="Vector 4"
      />
    </div>
    <frame8161 :text44="frame81611Props.text44" />
    <frame8161 :text44="frame81612Props.text44" />
  </div>
</template>

<script>
import Frame8157 from "./Frame8157";
import Frame8161 from "./Frame8161";
export default {
  name: "Frame8201",
  components: {
    Frame8157,
    Frame8161,
  },
  props: ["frame81571Props", "frame81572Props", "frame81611Props", "frame81612Props"],
};
</script>

<style>
.frame-8201,
.frame-8201-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  position: relative;
  width: 230px;
}

.frame-8202,
.frame-8202-1 {
  align-items: flex-start;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--gallery);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.frame-8152,
.frame-8152-1 {
  align-items: center;
  align-self: stretch;
  background-color: var(--monza);
  border-radius: 4px;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  overflow: hidden;
  padding: 18px 16px;
  position: relative;
  width: 100%;
}

.text-7,
.text-8 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.vector-87,
.vector-88 {
  height: 6.21px;
  margin-right: -0.5px;
  position: relative;
  width: 11px;
}

.frame-8156,
.frame-8156-1 {
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0px 0px 5px 5px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
  padding: 18px 16px;
  position: relative;
  width: 100%;
}

.text-39,
.text-49 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-81,
.frame-81-1 {
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  overflow: hidden;
  padding: 18px 16px;
  position: relative;
  width: 100%;
}

.vector-3-5,
.vector-3-6 {
  height: 5px;
  position: relative;
  width: 10px;
}
</style>
