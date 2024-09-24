<template>
  <div class="frame-761-4">
    <div class="text-113-2 valign-text-middle pretendard-medium-mountain-mist-15px">{{ text1132 }}</div>
    <p class="text-113-3 valign-text-middle pretendard-medium-celeste-14px">{{ text1133 }}</p>
  </div>
</template>

<script>
export default {
  name: "Frame7611",
  props: ["text1132", "text1133"],
};
</script>

<style>
.frame-761-4 {
  align-items: center;
  align-self: stretch;
  background-color: var(--cultured-pearl);
  display: flex;
  height: 54px;
  justify-content: space-between;
  padding: 0px 20px;
  position: relative;
  width: 100%;
}

.text-113-2 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.text-113-3 {
  letter-spacing: -0.7px;
  line-height: normal;
  position: relative;
  text-align: right;
  width: fit-content;
}
</style>
