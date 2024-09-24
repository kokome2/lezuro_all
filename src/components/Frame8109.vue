<template>
  <div class="frame-81-5">
    <div class="frame-8103-4">
      <div class="frame-8102-2">
        <div class="frame-8101-2">
          <div class="number-83 valign-text-middle pretendard-semi-bold-log-cabin-16px">{{ number }}</div>
          <frame8096 />
        </div>
        <frame8100 />
      </div>
      <group33639 />
    </div>
  </div>
</template>

<script>
import Frame8096 from "./Frame8096";
import Frame8100 from "./Frame8100";
import Group33639 from "./Group33639";
export default {
  name: "Frame8109",
  components: {
    Frame8096,
    Frame8100,
    Group33639,
  },
  props: ["number"],
};
</script>

<style>
.frame-81-5 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 320px;
}

.frame-8103-4 {
  align-items: flex-start;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  padding: 20px 0px;
  position: relative;
  width: 100%;
}

.frame-8102-2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.frame-8101-2 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  position: relative;
}

.number-83 {
  letter-spacing: 0;
  line-height: 55px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
