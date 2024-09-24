<template>
  <div class="frame-80-2">
    <group762 :group762="group762Props.group762" :className="group762Props.className" />
    <div class="frame-8068-1">
      <div class="frame-8067-1">
        <div class="frame-8066-1">
          <div class="text-149-2 valign-text-middle pretendard-bold-log-cabin-18px">코스명</div>
          <div class="x1960m valign-text-middle pretendard-regular-normal-log-cabin-14px">티샷 : 196.0m</div>
        </div>
        <div class="date-19 valign-text-middle pretendard-regular-normal-mountain-mist-12px">2024.09.02</div>
      </div>
      <img
        class="frame-7655"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/frame-7655.svg"
        alt="Frame 7655"
      />
    </div>
  </div>
</template>

<script>
import Group762 from "./Group762";
export default {
  name: "Frame80692",
  components: {
    Group762,
  },
  props: ["group762Props"],
};
</script>

<style>
.frame-80-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 155px;
}

.frame-8068-1 {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  padding: 10px;
  position: relative;
  width: 100%;
}

.frame-8067-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 81px;
}

.frame-8066-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 4px;
  position: relative;
  width: 100%;
}

.text-149-2 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 25.2px;
  margin-top: -1px;
  position: relative;
}

.x1960m {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 19.6px;
  position: relative;
}

.date-19 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 16.8px;
  position: relative;
}

.frame-7655 {
  height: 30px;
  position: relative;
  width: 30px;
}
</style>
