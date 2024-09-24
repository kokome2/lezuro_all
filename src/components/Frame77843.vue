<template>
  <div class="frame-7784-6">
    <frame73034 :text1512="frame73034Props.text1512" />
    <div class="frame-7487-4">
      <img
        class="fluentfolder-20-filled-4"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/fluent-folder-20-filled-4.svg"
        alt="fluent:folder-20-filled"
      />
      <frame7488 />
      <div class="text-1902 valign-text-middle pretendard-regular-normal-granite-gray-14px">선택된 파일 없음</div>
    </div>
  </div>
</template>

<script>
import Frame73034 from "./Frame73034";
import Frame7488 from "./Frame7488";
export default {
  name: "Frame77843",
  components: {
    Frame73034,
    Frame7488,
  },
  props: ["frame73034Props"],
};
</script>

<style>
.frame-7784-6,
.frame-7784-7,
.frame-7784-8,
.frame-7784-9,
.frame-7784-10 {
  align-items: center;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--celeste);
  display: flex;
  flex: 0 0 auto;
  padding: 20px 20px 20px 0px;
  position: relative;
  width: 100%;
}

.frame-7487-4,
.frame-7487-5,
.frame-7487-6,
.frame-7487-7,
.frame-7487-8 {
  align-items: center;
  background-color: var(--hint-of-red);
  border: 0.5px solid;
  border-color: var(--celeste);
  display: flex;
  gap: 10px;
  height: 55px;
  padding: 0px 20px;
  position: relative;
  width: 1147px;
}

.fluentfolder-20-filled-4,
.fluentfolder-20-filled-5,
.fluentfolder-20-filled-6,
.fluentfolder-20-filled-7,
.fluentfolder-20-filled-8 {
  height: 20px;
  position: relative;
  width: 20px;
}

.text-1902,
.text-1921,
.text-2018,
.text-2037,
.text-2931 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}
</style>
