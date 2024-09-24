<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="popup2 screen">
      <div class="frame-5">
        <div class="frame-4">
          <div class="x-42 valign-text-middle pretendard-medium-log-cabin-16px">비밀번호 재설정</div>
          <div class="text_label-32 valign-text-middle pretendard-regular-normal-tuatara-14px">비밀번호 변경이 완료되었습니다.</div>
        </div>
      </div>
      <div class="btn-group">
        <div class="btnprimary" @click="successeditpassword">
          <div class="text-80 valign-text-middle pretendard-regular-normal-white-16px-2">확인</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResetPasswordConfirmModal",
  methods:{
    successeditpassword(){
      this.$router.push({path:"/login"})
    }
  }
};
</script>

<style>
.modal-overlay {
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Opaque background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Ensure modal is on top */
}
.popup2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto-2);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.frame-5 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 24px;
  position: relative;
}

.frame-4 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

.x-42 {
  letter-spacing: -0.32px;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text_label-32 {
  letter-spacing: -0.28px;
  line-height: 21px;
  position: relative;
  text-align: center;
  width: 226px;}
/* Add the rest of your styles */
</style>
