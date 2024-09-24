<template>
<div class="modal-overlay" @click="closeModal">
  <div class="popupu47defualt-20 screen" >
    <div class="frame-5-20">
      <div class="frame-4-20">
        <div class="x-62 valign-text-middle pretendard-bold-log-cabin-18px">{{ njR4ze }}</div>
        <div
          class="text_label-61 valign-text-middle pretendard-regular-normal-granite-gray-14px"
          v-html="text_Label"
        ></div>
      </div>
    </div>
    <btn-group4
      :btnprimary1Props="btnGroup4Props.btnprimary1Props"
      :btnprimary2Props="btnGroup4Props.btnprimary2Props"
      @click="handleButtonClick"
    />
  </div>
</div>
</template>

<script>
import BtnGroup4 from "./BtnGroup4";
export default {
  name: "JoinConfrimModal",
  components: {
    BtnGroup4,
  },
  props: ["njR4ze", "text_Label", "btnGroup4Props"],
  methods:{
   handleButtonClick(buttonType) {
      if (buttonType === 'close') {
        this.$emit('close');  // 닫기 버튼 클릭 시 close 이벤트 emit
      } else if (buttonType === 'apply') {
        // 신청 버튼 클릭 시 처리 로직 추가
        alert('신청 버튼이 클릭되었습니다.');
        this.$emit('close');
      }
   }
  },
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
.popupu47defualt-20 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto-2);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.frame-5-20 {
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

.frame-4-20 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
}

.x-62 {
  letter-spacing: -0.36px;
  line-height: 27px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text_label-61 {
  letter-spacing: -0.28px;
  line-height: 18px;
  position: relative;
  text-align: center;
  width: 226px;
}
</style>
