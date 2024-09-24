<template>
  <div class="frame-76-11">
    <div class="group-762-7">
      <img
        class="polygon-1-3"
        src="../../img/CK_cm08085552 2.png"
        alt="Polygon 1"
      />
        <img
        class="vector-img"
        src="../../img/Polygon 1.png"
        alt="Vector"
      />
    </div>
    <div class="group-761">
      <div class="flex-col-40">
        <div class="frame-7656">
          <div class="text-259 valign-text-middle pretendard-bold-log-cabin-20px">코스명</div>
          <div class="x1960m-1 valign-text-middle pretendard-regular-normal-log-cabin-18px">티샷 : 196.0m</div>
        </div>
        <div class="date-28 valign-text-middle pretendard-regular-normal-mountain-mist-14px">2024.09.02</div>
      </div>
      <img
        class="frame-7655-2"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/frame-7655-6.svg"
        alt="Frame 7655"
        @click="$emit('click')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame7657",
};
</script>

<style>
.frame-76-11 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 320px;
}

.group-762-7 {
  background-image: url(https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/mask-group-107@2x.png);
  background-size: 100% 100%;
  height: 320px;
  position: relative;
  width: 320px;
}

.polygon-1-3 {
  height: 59px;
  left: 140px;
  position: absolute;
  top: 130px;
  width: 53px;
}
.vector-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 77px; /* 원하는 이미지 크기로 조절 */
  height: 77px;
}
.group-761 {
  height: 107px;
  position: relative;
  width: 302px;
}

.flex-col-40 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  left: 0;
  min-height: 107px;
  position: absolute;
  top: 0;
  width: 104px;
}

.frame-7656 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 104px;
}

.text-259 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
}

.x1960m-1 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 25.2px;
  position: relative;
}

.date-28 {
  height: 20px;
  letter-spacing: 0;
  line-height: 19.6px;
  white-space: nowrap;
}

.frame-7655-2 {
  height: 40px;
  left: 260px;
  position: absolute;
  top: 62px;
  width: 40px;
}
</style>
