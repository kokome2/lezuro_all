<template>
<div class="modal-overlay" @click="closeModal">
  <div class="popupu47defualt-8 screen">
    <div class="frame-5-10">
      <div class="frame-4-10">
        <div class="x-52 valign-text-middle notosanskr-medium-log-cabin-16px" >{{ o9HT3M }}</div>
        <p class="text_label-53 valign-text-middle notosanskr-normal-tuatara-14px" v-html="text_Label"></p>
      </div>
    </div>
    <btn-group2
      :text_Label="btnGroup2Props.text_Label"
      :text83="btnGroup2Props.text83"
      :className="btnGroup2Props.className"
       @click="handleButtonClick"
    />
  </div>
  </div>
</template>

<script>
import BtnGroup2 from "./BtnGroup2";
export default {
  name: "NotJoinModalNo2",
  components: {
    BtnGroup2,
  },
  props: ["o9HT3M", "text_Label", "btnGroup2Props"],
    methods:{
   handleButtonClick(buttonType) {
      if (buttonType === 'close') {
        this.$emit('close');  // 닫기 버튼 클릭 시 close 이벤트 emit
      } else if (buttonType === 'cancel') {
        // 신청 버튼 클릭 시 처리 로직 추가
        alert('취소 버튼이 클릭되었습니다.');
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
.popupu47defualt-8 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto-2);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.frame-5-10 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 24px 10px;
  position: relative;
}

.frame-4-10 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

.x-52 {
  letter-spacing: -0.32px;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text_label-53 {
  letter-spacing: -0.28px;
  line-height: 21px;
  position: relative;
  text-align: center;
  width: 226px;
}
</style>
