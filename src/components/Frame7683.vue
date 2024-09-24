<template>
  <div :class="[`frame-7683-2`, className || ``]">
    <h1 class="text-25-5 valign-text-middle pretendard-bold-log-cabin-24px">대회이름</h1>
    <div class="frame-7689-1">
      <div class="frame-76-10">
        <div class="text-2540 valign-text-middle pretendard-light-granite-gray-16px">번호</div>
        <div class="number-213 valign-text-middle pretendard-regular-normal-log-cabin-16px">96</div>
      </div>
      <div class="frame-7682">
        <div class="text-2541 valign-text-middle pretendard-light-granite-gray-16px">기간</div>
        <div class="text-2542 valign-text-middle pretendard-regular-normal-log-cabin-16px">2024-06-10 ~ 2024-08-20</div>
      </div>
      <div class="frame-76-10">
        <div class="text-2543 valign-text-middle pretendard-light-granite-gray-16px">진행</div>
        <p class="ak-2-1 valign-text-middle pretendard-regular-normal-log-cabin-16px">
          나이스 파크골프<br />AK 파크골프<br />레저로 파크골<br />외 2개
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame7683",
  props: ["className"],
};
</script>

<style>
.frame-7683-2 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--blackwhitewhite);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-left-style: solid;
  border-left-width: 1px;
  border-radius: 0px 0px 20px 20px;
  border-right-style: solid;
  border-right-width: 1px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  padding: 35px 30px;
  position: relative;
  width: 100%;
}

.text-25-5 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: 148.5px;
}

.frame-7689-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 15px;
  position: relative;
  width: 100%;
}

.frame-76-10 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  position: relative;
}

.text-2540,
.number-213,
.text-2541,
.text-2542,
.text-2543 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7682 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 20px;
  position: relative;
  width: 100%;
}

.ak-2-1 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  position: relative;
  width: 101px;
}

.frame-7683-2.frame-7683-1 {
  align-self: unset;
  flex: unset;
  left: 0;
  position: absolute;
  top: 250px;
  width: 413px;
}
</style>
