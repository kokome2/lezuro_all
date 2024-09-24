<template>
  <div class="popupu47defualt-22 screen">
    <div class="frame-5-22">
      <div class="frame-4-22">
        <div class="x-64 valign-text-middle pretendard-bold-log-cabin-18px">{{ Oy3YVO }}</div>
        <div class="text_label-63 valign-text-middle pretendard-regular-normal-granite-gray-14px">{{ text_Label }}</div>
      </div>
    </div>
    <btn-group3 />
  </div>
</template>

<script>
import BtnGroup3 from "./BtnGroup3";
export default {
  name: "ResetPasswordModal",
  components: {
    BtnGroup3,
  },
  props: ["Oy3YVO", "text_Label"],
};
</script>

<style>
.popupu47defualt-22 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto-2);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.frame-5-22 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 20px 0px;
  position: relative;
  width: 280px;
}

.frame-4-22 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
}

.x-64 {
  letter-spacing: -0.36px;
  line-height: 27px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text_label-63 {
  letter-spacing: -0.28px;
  line-height: 18px;
  position: relative;
  text-align: center;
  width: 226px;
}
</style>
