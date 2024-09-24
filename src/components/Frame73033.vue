<template>
  <div :class="[`frame-7303-10-1`, className || ``]">
    <div class="text-10-13 valign-text-middle pretendard-medium-black-18px">{{ text1087 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame73033",
  props: ["text1087", "className"],
};
</script>

<style>
.frame-7303-10-1 {
  align-items: center;
  background-color: var(--cultured-pearl);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 60px;
  justify-content: center;
  padding: 0px 0px 0px 20px;
  position: relative;
  width: 200px;
}

.text-10-13 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
}

.frame-7303-10-1.frame-7303-11 {
  border-top-style: unset;
  border-top-width: unset;
}
</style>
