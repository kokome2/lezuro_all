<template>
  <div class="frame-7830-1-item-1 pretendard-light-granite-gray-16px">
    <div class="number-64 valign-text-middle">{{ number }}</div>
    <div class="frame-8119-1">
      <p class="text-77-3 valign-text-middle">
        1:1문의 내역 제목 영역입니다. 1:1문의 내역 제목입니다. 1:1문의 내역 제목 ...
      </p>
      <div class="frame-8122-1">
        <div class="date-7 valign-text-middle pretendard-light-granite-gray-14px">2024-08-23</div>
        <frame8132 />
      </div>
    </div>
  </div>
</template>

<script>
import Frame8132 from "./Frame8132";
export default {
  name: "Th4",
  components: {
    Frame8132,
  },
  props: ["number"],
};
</script>

<style>
.frame-7830-1-item-1 {
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

.number-64 {
  height: 15px;
  letter-spacing: 0;
  line-height: 55px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: 18px;
}

.frame-8119-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 292px;
}

.text-77-3 {
  height: 36px;
  letter-spacing: 0;
  line-height: 22.4px;
  margin-top: -1px;
  position: relative;
  width: 260px;
}

.frame-8122-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  height: 32px;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.date-7 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>
