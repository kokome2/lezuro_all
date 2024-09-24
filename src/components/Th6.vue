<template>
  <div class="frame-7830-2-item-1 pretendard-light-granite-gray-16px">
    <div class="number-67 valign-text-middle">{{ number }}</div>
    <div class="frame-8119-3">
      <p class="text-8-18 valign-text-middle">
        1:1문의 내역 제목 영역입니다. 1:1문의 내역 제목입니다. 1:1문의 내역 제목 ...
      </p>
      <div class="frame-8122-3">
        <div class="date-9 valign-text-middle pretendard-light-granite-gray-14px">2024-08-23</div>
        <frame7731 />
      </div>
    </div>
  </div>
</template>

<script>
import Frame7731 from "./Frame7731";
export default {
  name: "Th6",
  components: {
    Frame7731,
  },
  props: ["number"],
};
</script>

<style>
.frame-7830-2-item-1 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--blackwhitewhite);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  padding: 10px 0px;
  position: relative;
  width: 100%;
}

.number-67 {
  height: 15px;
  letter-spacing: 0;
  line-height: 55px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: 28px;
}

.frame-8119-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 282px;
}

.text-8-18 {
  height: 36px;
  letter-spacing: 0;
  line-height: 22.4px;
  margin-top: -1px;
  position: relative;
  width: 260px;
}

.frame-8122-3 {
  align-items: center;
  align-self: stretch;
  display: flex;
  height: 32px;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.date-9 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>
