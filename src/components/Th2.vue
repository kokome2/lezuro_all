<template>
  <div class="frame-7830-item-1">
    <div class="number-32 valign-text-middle pretendard-light-granite-gray-16px">{{ number }}</div>
    <p class="text-32 valign-text-middle pretendard-light-granite-gray-16px">
      1:1문의 내역 제목 영역입니다. 1:1문의 내역 제목입니다.
    </p>
    <div class="date-4 valign-text-middle pretendard-regular-normal-granite-gray-18px">2024-08-23</div>
    <frame7730 />
  </div>
</template>

<script>
import Frame7730 from "./Frame7730";
export default {
  name: "Th2",
  components: {
    Frame7730,
  },
  props: ["number"],
};
</script>

<style>
.frame-7830-item-1 {
  align-items: center;
  align-self: stretch;
  background-color: var(--blackwhitewhite);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0px 40px;
  position: relative;
  width: 100%;
}

.number-32 {
  letter-spacing: 0;
  line-height: 55px;
  position: relative;
  text-align: center;
  width: 80px;
}

.text-32 {
  letter-spacing: 0;
  line-height: 55px;
  position: relative;
  width: 400px;
}

.date-4 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 130px;
}
</style>
