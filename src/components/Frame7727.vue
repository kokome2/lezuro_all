<template>
  <div :class="[`frame-7727-1`, className || ``]">
    <frame7673 :text10="frame7673Props.text10" />
    <div class="frame-7671-3">
      <div class="text-78 valign-text-middle pretendard-bold-log-cabin-18px">1:1 문의내역</div>
    </div>
    <frame76742 />
  </div>
</template>

<script>
import Frame7673 from "./Frame7673";
import Frame76742 from "./Frame76742";
export default {
  name: "Frame7727",
  components: {
    Frame7673,
    Frame76742,
  },
  props: ["className", "frame7673Props"],
};
</script>

<style>
.frame-7727-1 {
  align-items: center;
  display: inline-flex;
  left: 260px;
  position: absolute;
  top: 353px;
}

.frame-7671-3 {
  align-items: center;
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
  padding: 23px 159px;
  position: relative;
  width: 466.66px;
}

.text-78 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7727-1.frame-7727-2 {
  left: unset;
  position: relative;
  top: unset;
}
</style>
