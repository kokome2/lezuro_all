<template>
  <div class="frame-7830-2-item pretendard-light-granite-gray-16px">
    <div class="number-66 valign-text-middle">{{ number }}</div>
    <div class="frame-8119-2">
      <p class="text-80-1 valign-text-middle">
        1:1문의 내역 제목 영역입니다. 1:1문의 내역 제목입니다. 1:1문의 내역 제목 ...
      </p>
      <div class="frame-8122-2">
        <div class="date-8 valign-text-middle pretendard-light-granite-gray-14px">2024-08-23</div>
        <frame7730 />
      </div>
    </div>
  </div>
</template>

<script>
import Frame7730 from "./Frame7730";
export default {
  name: "Th5",
  components: {
    Frame7730,
  },
  props: ["number"],
};
</script>

<style>
.frame-7830-2-item {
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

.number-66 {
  height: 15px;
  letter-spacing: 0;
  line-height: 55px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: 28px;
}

.frame-8119-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 282px;
}

.text-80-1 {
  height: 36px;
  letter-spacing: 0;
  line-height: 22.4px;
  margin-top: -1px;
  position: relative;
  width: 260px;
}

.frame-8122-2 {
  align-items: center;
  align-self: stretch;
  display: flex;
  height: 32px;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.date-8 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>
