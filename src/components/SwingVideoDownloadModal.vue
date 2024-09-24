<template>
  <div class="modal-background" @click.self="closeModal">
  <div class="popupu47defualt-21 screen">
    <div class="frame-5-21">
      <div class="frame-4-21">
        <div class="x-63 valign-text-middle pretendard-bold-log-cabin-18px">{{ R9grVj }}</div>
        <div class="text_label-62 valign-text-middle pretendard-regular-normal-granite-gray-14px">{{ text_Label }}</div>
      </div>
    </div>
    <btn-group3 
    @buttonClick="confirmClick"/>
  </div>
  </div>
</template>

<script>
import BtnGroup3 from "./BtnGroup3";
export default {
  name: "SwingVideoDownloadModal",
  components: {
    BtnGroup3,
  },
  props: ["R9grVj", "text_Label"],
   methods: {
    closeModal() {
      this.$emit("close");
    },
    confirmClick(){
      this.$emit("close");
    }
  },
};
</script>

<style>
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7); /* 배경을 불투명한 검정색으로 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.popupu47defualt-21 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto-2);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.frame-5-21 {
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

.frame-4-21 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
}

.x-63 {
  letter-spacing: -0.36px;
  line-height: 27px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text_label-62 {
  letter-spacing: -0.28px;
  line-height: 18px;
  position: relative;
  text-align: center;
  width: 226px;
}
</style>
