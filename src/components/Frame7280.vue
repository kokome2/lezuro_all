<template>
  <div class="frame-7280-1">
    <div class="text-23-7 valign-text-middle pretendard-medium-log-cabin-18px">{{ text2340 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame7280",
  props: ["text2340"],
};
</script>

<style>
.frame-7280-1 {
  align-items: center;
  background-color: var(--wild-sand);
  border: 0.5px solid;
  border-color: var(--alto);
  display: flex;
  height: 60px;
  padding: 0px 20px;
  position: relative;
  width: 200px;
}

.text-23-7 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
