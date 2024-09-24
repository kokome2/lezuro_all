<template>
  <div :class="[`frame-8040`, className || ``]">
    <frame76732 :text473="frame76732Props.text473" />
    <div class="frame-7671-5">
      <div class="text-474 valign-text-middle pretendard-bold-log-cabin-14px">1:1문의 내역</div>
    </div>
    <frame76743 />
  </div>
</template>

<script>
import Frame76732 from "./Frame76732";
import Frame76743 from "./Frame76743";
export default {
  name: "Frame8040",
  components: {
    Frame76732,
    Frame76743,
  },
  props: ["className", "frame76732Props"],
};
</script>

<style>
.frame-8040 {
  align-items: center;
  align-self: stretch;
  display: flex;
  height: 50px;
  position: relative;
  width: 100%;
}

.frame-7671-5 {
  align-items: center;
  border-color: var(--celeste);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-style: solid;
  border-right-width: 1px;
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  gap: 10px;
  height: 50px;
  justify-content: center;
  padding: 23px 159px;
  position: relative;
  width: 106px;
}

.text-474 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -2px;
  margin-left: -140.5px;
  margin-right: -140.5px;
  margin-top: -4px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-8040.frame-8040-1 {
  align-self: unset;
  width: 320px;
}
</style>
