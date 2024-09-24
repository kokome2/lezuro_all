<template>
  <div :class="[`frame-7784-5`, className || ``]">
    <frame73033 :text1087="frame73033Props.text1087" :className="frame73033Props.className" />
    <div class="text-1088 valign-text-middle pretendard-medium-granite-gray-18px">{{ text1088 }}</div>
  </div>
</template>

<script>
import Frame73033 from "./Frame73033";
export default {
  name: "Frame77842",
  components: {
    Frame73033,
  },
  props: ["text1088", "className", "frame73033Props"],
};
</script>

<style>
.frame-7784-5 {
  align-items: center;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex: 0 0 auto;
  gap: 30px;
  padding: 0px 20px 0px 0px;
  position: relative;
  width: 100%;
}

.text-1088 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7784-5.frame-778-1 {
  border-top-style: unset;
  border-top-width: unset;
}
</style>
