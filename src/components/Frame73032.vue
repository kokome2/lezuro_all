<template>
  <div :class="[`frame-7303-8`, className || ``]">
    <div class="text-9-16 valign-text-middle pretendard-medium-black-18px">{{ text941 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame73032",
  props: ["text941", "className"],
};
</script>

<style>
.frame-7303-8 {
  align-items: center;
  align-self: stretch;
  background-color: var(--cultured-pearl);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 60px;
  justify-content: center;
  padding: 0px 20px;
  position: relative;
  width: 100%;
}

.text-9-16 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
}

.frame-7303-8.frame-7303-6 {
  align-self: unset;
  margin-right: -20px;
  padding: 0px 0px 0px 20px;
  width: 320px;
}

.frame-7303-8.frame-7303-9 {
  align-self: unset;
  padding: 0px 0px 0px 20px;
  width: 320px;
}

.frame-7303-8.frame-7303-7 {
  align-self: unset;
  border-top-style: solid;
  border-top-width: 1px;
  margin-right: -20px;
  padding: 0px 0px 0px 20px;
  width: 320px;
}
</style>
