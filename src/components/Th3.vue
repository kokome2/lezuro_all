<template>
  <div class="frame-7830-1-item">
    <div class="text-77-1 valign-text-middle pretendard-medium-monza-16px">공지</div>
    <div class="frame-8119">
      <p class="text-77-2 valign-text-middle pretendard-medium-log-cabin-16px">
        공지사항 게시판 제목 공지사항 게시판 제목입니다
      </p>
      <div class="frame-8122">
        <div class="date-6 valign-text-middle pretendard-light-granite-gray-14px">2024-08-23</div>
        <frame8132 />
      </div>
    </div>
  </div>
</template>

<script>
import Frame8132 from "./Frame8132";
export default {
  name: "Th3",
  components: {
    Frame8132,
  },
};
</script>

<style>
.frame-7830-1-item {
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

.text-77-1 {
  height: 15px;
  letter-spacing: 0;
  line-height: 55px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: 28px;
}

.frame-8119 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 282px;
}

.text-77-2 {
  height: 36px;
  letter-spacing: 0;
  line-height: 22.4px;
  margin-top: -1px;
  position: relative;
  width: 260px;
}

.frame-8122 {
  align-items: center;
  align-self: stretch;
  display: flex;
  height: 32px;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.date-6 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>
