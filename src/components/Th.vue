<template>
  <div class="frame-7830-item">
    <div class="number-31 valign-text-middle pretendard-light-granite-gray-16px">{{ number }}</div>
    <p class="text-31 valign-text-middle pretendard-light-granite-gray-16px">
      1:1문의 내역 제목 영역입니다. 1:1문의 내역 제목입니다.
    </p>
    <div class="date-3 valign-text-middle pretendard-regular-normal-granite-gray-18px">2024-08-23</div>
    <frame7731 />
  </div>
</template>

<script>
import Frame7731 from "./Frame7731";
export default {
  name: "Th",
  components: {
    Frame7731,
  },
  props: ["number"],
};
</script>

<style>
.frame-7830-item {
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

.number-31 {
  letter-spacing: 0;
  line-height: 55px;
  position: relative;
  text-align: center;
  width: 80px;
}

.text-31 {
  letter-spacing: 0;
  line-height: 55px;
  position: relative;
  width: 400px;
}

.date-3 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 130px;
}
</style>
