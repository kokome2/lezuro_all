<template>
  <div class="frame-732-3">
    <div class="text-210 valign-text-middle pretendard-semi-bold-log-cabin-18px">{{ text2100 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame73222",
  props: ["text2100"],
};
</script>

<style>
.frame-732-3 {
  align-items: center;
  background-color: var(--wild-sand);
  border-color: var(--alto);
  border-right-style: solid;
  border-right-width: 0.5px;
  display: flex;
  height: 50px;
  justify-content: center;
  position: relative;
  width: 150px;
}

.text-210 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}
</style>
