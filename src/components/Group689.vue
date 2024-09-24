<template>
  <div class="group-6-1">
    <div class="overlap-group-103">
      <img class="image-1-1" :src="image1" alt="image 1" />
      <div class="text-22-7 valign-text-middle pretendard-bold-log-cabin-24px">{{ text2287 }}</div>
      <div class="overlap-group-104">
        <p class="text-228 valign-text-middle pretendard-light-granite-gray-14px">
          18홀&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;해돋이, 해넘이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;경상도
        </p>
        <img
          class="line-9-4"
          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-9-2.svg"
          alt="Line 9"
        />
        <img
          class="line-10-3"
          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-9-2.svg"
          alt="Line 10"
        />
      </div>
      <div class="flex-row-90">
        <div class="text-22-8 valign-text-middle pretendard-light-granite-gray-14px">코스 난이도</div>
        <frame7345 :className="frame7345Props.className" />
      </div>
    </div>
  </div>
</template>

<script>
import Frame7345 from "./Frame7345";
export default {
  name: "Group689",
  components: {
    Frame7345,
  },
  props: ["image1", "text2287", "frame7345Props"],
};
</script>

<style>
.group-6-1 {
  height: 401px;
  position: relative;
  width: 444px;
}

.overlap-group-103 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--celeste);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  min-height: 401px;
  width: 440px;
}

.image-1-1 {
  height: 250px;
  margin-left: -1px;
  margin-top: -1px;
  object-fit: cover;
  width: 440px;
}

.text-22-7 {
   height: 17px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 40.25px;
  margin-top: 33px;
  width: 148px;
}

.overlap-group-104 {
  height: 10px;
  margin-left: 41px;
  margin-top: 25px;
  position: relative;
  width: 193px;
}

.text-228 {
  height: 10px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 193px;
}

.line-9-4 {
  height: 8px;
  left: 38px;
  position: absolute;
  top: 2px;
  width: 1px;
}

.line-10-3 {
  height: 8px;
  left: 141px;
  position: absolute;
  top: 2px;
  width: 1px;
}

.flex-row-90 {
  align-items: center;
  display: flex;
  gap: 15px;
  height: 15px;
  margin-left: 41px;
  margin-top: 11px;
  min-width: 162px;
  position: relative;
}

.text-22-8 {
  height: 10px;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 1px;
  min-width: 64px;
  white-space: nowrap;
}
</style>
