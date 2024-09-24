<template>
  <div class="frame-7853-item" @click="$emit('click')">
    <div class="text-300-1 valign-text-middle pretendard-bold-monza-16px">공지</div>
    <p class="text-30-1 valign-text-middle pretendard-medium-log-cabin-16px">
      공지사항 게시판 제목 공지사항 게시판 제목입니다
    </p>
    <div class="date-30 valign-text-middle pretendard-regular-normal-granite-gray-18px">2024-08-23</div>
    <div class="number-235 valign-text-middle pretendard-regular-normal-granite-gray-18px">230</div>
  </div>
</template>

<script>
export default {
  name: "Th11",
};
</script>

<style>
.frame-7853-item {
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

.text-300-1 {
  letter-spacing: 0;
  line-height: 55px;
  position: relative;
  text-align: center;
  width: 80px;
}

.text-30-1 {
  letter-spacing: 0;
  line-height: 55px;
  position: relative;
  /* width: 350px; */
}

.date-30 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 130px;
}

.number-235 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 100px;
}
</style>
