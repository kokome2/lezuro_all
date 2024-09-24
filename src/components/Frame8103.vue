<template>
  <div :class="[`frame-8103-2`, className || ``]">
    <div class="frame-8102-1">
      <div class="frame-8101">
        <div class="number-75 valign-text-middle pretendard-semi-bold-log-cabin-16px">1</div>
        <frame8096 />
      </div>
      <frame8100 />
    </div>
    <group33639 />
  </div>
</template>

<script>
import Frame8096 from "./Frame8096";
import Frame8100 from "./Frame8100";
import Group33639 from "./Group33639";
export default {
  name: "Frame8103",
  components: {
    Frame8096,
    Frame8100,
    Group33639,
  },
  props: ["className"],
};
</script>

<style>
.frame-8103-2 {
  align-items: flex-start;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  flex-direction: column;
  gap: 30px;
  left: 0;
  padding: 20px 0px;
  position: absolute;
  top: 0;
}

.frame-8102-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.frame-8101 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  position: relative;
}

.number-75 {
  letter-spacing: 0;
  line-height: 55px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-8103-2.frame-8103-3 {
  align-self: stretch;
  flex: 0 0 auto;
  left: unset;
  position: relative;
  top: unset;
  width: 100%;
}
</style>
