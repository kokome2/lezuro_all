<template>
  <div :class="[`frame-7884-1`, className || ``]">
    <div class="text-10-12 valign-text-middle">{{ text1077 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame78842",
  props: ["text1077", "className"],
};
</script>

<style>
.frame-7884-1 {
  align-items: center;
  background-color: var(--cultured-pearl);
  border-color: var(--alto);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-style: solid;
  border-right-width: 1px;
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  gap: 10px;
  height: 60px;
  justify-content: center;
  padding: 28px 116px;
  position: relative;
  width: 264px;
}

.text-10-12 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -3.5px;
  margin-top: -5.5px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.frame-7884-1.frame-788-5 {
  border-left-style: unset;
  border-left-width: unset;
}
</style>
