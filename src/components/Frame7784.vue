<template>
  <div class="frame-7784">
    <frame7303 :text174="frame7303Props.text174" />
    <div class="frame-7487">
      <img
        class="fluentfolder-20-filled"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/fluent-folder-20-filled.svg"
        alt="fluent:folder-20-filled"
      />
      <frame7488 />
      <div class="text-180 valign-text-middle pretendard-regular-normal-granite-gray-14px">선택된 파일 없음</div>
    </div>
  </div>
</template>

<script>
import Frame7303 from "./Frame7303";
import Frame7488 from "./Frame7488";
export default {
  name: "Frame7784",
  components: {
    Frame7303,
    Frame7488,
  },
  props: ["frame7303Props"],
};
</script>

<style>
.frame-7784,
.frame-7784-1,
.frame-7784-2,
.frame-7784-3 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0px;
  position: relative;
  width: 100%;
}

.frame-7487,
.frame-7487-1,
.frame-7487-2,
.frame-7487-3 {
  align-items: center;
  background-color: var(--hint-of-red);
  border: 0.5px solid;
  border-color: var(--celeste);
  display: flex;
  gap: 10px;
  height: 55px;
  padding: 0px 20px;
  position: relative;
  width: 320px;
}

.fluentfolder-20-filled,
.fluentfolder-20-filled-1,
.fluentfolder-20-filled-2,
.fluentfolder-20-filled-3 {
  height: 20px;
  position: relative;
  width: 20px;
}

.text-180,
.text-214,
.text-249-1,
.text-517 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}
</style>
