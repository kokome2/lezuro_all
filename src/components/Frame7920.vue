<template>
  <div class="frame-7920">
    <div class="frame-7918 pretendard-semi-bold-black-16px">
      <div class="text-5 valign-text-middle">예약자</div>
      <div class="text-19 valign-text-middle">예약 시간</div>
      <div class="text-20-2 valign-text-middle">인원</div>
    </div>
    <div class="frame-7919 pretendard-regular-normal-log-cabin-16px">
      <div class="text-5 valign-text-middle">김길동</div>
      <div class="text-22-1 valign-text-middle">07월 20일 14:00</div>
      <div class="number valign-text-middle">2</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame7920",
};
</script>

<style>
.frame-7920 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  position: relative;
}

.frame-7918 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 71px;
}

.text-5 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.text-19,
.text-20-2,
.text-22-1,
.number,
.text-26,
.text-27,
.text-29,
.number-1,
.text-33,
.text-34,
.text-36,
.number-2 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
}

.frame-7919 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 113px;
}
</style>
