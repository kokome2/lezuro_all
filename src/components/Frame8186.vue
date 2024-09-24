<template>
  <div class="frame-818-1">
    <div class="frame-8183-1">
      <div class="text-3-12 valign-text-middle pretendard-medium-monza-16px">진행</div>
      <p class="text-3-13 valign-text-middle pretendard-medium-log-cabin-16px">레저로 여름맞이 스크린 골프 대회</p>
    </div>
    <div class="frame-8185">
      <frame8179 />
      <div class="frame-8184">
        <frame8182 />
        <div class="frame-8188">
          <img
            class="material-symbolslock"
            src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/material-symbols-lock.svg"
            alt="material-symbols:lock"
          />
          <div class="text-3-14 valign-text-middle pretendard-light-granite-gray-14px">비공개</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame8179 from "./Frame8179";
import Frame8182 from "./Frame8182";
export default {
  name: "Frame8186",
  components: {
    Frame8179,
    Frame8182,
  },
};
</script>

<style>
.frame-818-1 {
  align-items: flex-start;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  width: 100%;
}

.frame-8183-1 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;
}

.text-3-12 {
  letter-spacing: 0;
  line-height: 55px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 28px;
}

.text-3-13 {
  letter-spacing: 0;
  line-height: 22.4px;
  margin-top: -1px;
  position: relative;
  width: 210px;
}

.frame-8185 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
}

.frame-8184 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.frame-8188 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 2px;
  position: relative;
}

.material-symbolslock {
  height: 16px;
  position: relative;
  width: 16px;
}

.text-3-14 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>
