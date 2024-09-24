<template>
  <div class="frame-732-4">
    <div class="number-230 valign-text-middle pretendard-regular-normal-mine-shaft-18px">{{ number }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame73233",
  props: ["number"],
};
</script>

<style>
.frame-732-4 {
  align-items: center;
  border-color: var(--alto);
  border-right-style: solid;
  border-right-width: 0.5px;
  display: flex;
  height: 50px;
  justify-content: center;
  position: relative;
  width: 85px;
}

.number-230 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}
</style>
