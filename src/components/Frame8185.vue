<template>
  <div class="frame-8185-1">
    <frame8179 />
    <div class="frame-8184-1">
      <frame8182 />
      <div class="text-3-16 valign-text-middle pretendard-light-granite-gray-14px">전체공개</div>
    </div>
  </div>
</template>

<script>
import Frame8179 from "./Frame8179";
import Frame8182 from "./Frame8182";
export default {
  name: "Frame8185",
  components: {
    Frame8179,
    Frame8182,
  },
};
</script>

<style>
.frame-8185-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
}

.frame-8184-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.text-3-16 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>
