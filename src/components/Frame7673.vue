<template>
  <div :class="[`frame-7673`, className || ``]">
    <div class="text-10 valign-text-middle pretendard-medium-granite-gray-18px">{{ text10 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame7673",
  props: ["text10", "className"],
};
</script>

<style>
.frame-7673 {
  align-items: center;
  background-color: var(--cultured-pearl);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  gap: 10px;
  height: 60px;
  justify-content: center;
  padding: 23px 151px;
  position: relative;
  width: 466.66px;
}

.text-10 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7673.frame-7674,
.frame-7673.frame-7674-3 {
  padding: 23px 159px;
}

.frame-7673.frame-7673-3 {
  border-color: var(--celeste);
}

.frame-7673.frame-7674-1 {
  border-color: var(--celeste);
  padding: 23px 159px;
}

.frame-7673.frame-7674-2 {
  border-bottom-style: unset;
  border-bottom-width: unset;
  border-color: unset;
  padding: 23px 159px;
}
</style>
