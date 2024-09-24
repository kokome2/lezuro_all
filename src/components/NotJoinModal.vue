<template>
<div class="modal-overlay">
  <div class="popupu47defualt-17 screen">
    <div class="frame-5-18">
      <div class="frame-4-18">
        <div class="x-60 valign-text-middle pretendard-bold-log-cabin-18px">{{ urkyGq }}</div>
        <div
          class="text_label-58 valign-text-middle pretendard-regular-normal-granite-gray-14px"
          v-html="text_Label"
        ></div>
      </div>
    </div>
    <btn-group4
      :btnprimary1Props="btnGroup4Props.btnprimary1Props"
      :btnprimary2Props="btnGroup4Props.btnprimary2Props"
    />
  </div>
</div>
</template>

<script>
import BtnGroup4 from "./BtnGroup4";
export default {
  name: "NotJoinModal",
  components: {
    BtnGroup4,
  },
  props: ["urkyGq", "text_Label", "btnGroup4Props"],
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7); /* 불투명한 블랙 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 모달을 다른 요소 위에 표시 */
}
.popupu47defualt-17 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto-2);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.frame-5-18 {
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

.frame-4-18 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
}

.x-60 {
  letter-spacing: -0.36px;
  line-height: 27px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text_label-58 {
  letter-spacing: -0.28px;
  line-height: 18px;
  position: relative;
  text-align: center;
  width: 226px;
}
</style>
