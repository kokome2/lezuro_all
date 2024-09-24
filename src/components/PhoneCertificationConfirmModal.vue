<template>
  <div class="popupu47defualt-1 screen">
    <div class="frame-5-1">
      <div class="frame-4-1">
        <div class="x-43 valign-text-middle pretendard-medium-log-cabin-16px">
          휴대폰 인증
        </div>
        <div class="flex-container-619104 pretendard-regular-normal-tuatara-14px">
          <div class="text-14 valign-text-middle">
            <span class="span-42 pretendard-regular-normal-tuatara-14px">
              휴대폰 인증이 완료되었습니다.
            </span>
          </div>
          <div class="text-14 valign-text-middle">
            <span class="span-42 pretendard-regular-normal-tuatara-14px">
              확인 후 회원가입 절차를 진행 해주세요.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <div class="btnprimary" @click="confirm">
        <div class="text-80 valign-text-middle pretendard-regular-normal-white-16px-2">
          확인
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhoneCertificationConfirmModal",
  methods: {
    confirm() {
      this.$emit("confirm");
    },
  },
};
</script>

<style>
.popupu47defualt-1,
.popupu47defualt-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto-2);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.frame-5-1,
.frame-5-2 {
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

.frame-4-1,
.frame-4-2 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

.x-43,
.x-44 {
  letter-spacing: -0.32px;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.flex-container-619104,
.flex-container-619112 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 226px;
}

.text-14,
.text-17 {
  align-self: stretch;
  letter-spacing: -0.28px;
  line-height: 21px;
  position: relative;
  text-align: center;
}

.span-42,
.span-43 {
  letter-spacing: -0.04px;
}

.btn-group,
.btn-group-1,
.btn-group-2 {

  display: flex;
justify-content:center ;
  position: relative;
  width: 276px;
}

.btnprimary,
.btnprimary-1,
.btnprimary-2 {
  align-items: center;
  background-color: var(--monza);
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 10px;
  height: 50px;
  justify-content: center;
  padding: 14px 10px;
  position: relative;
}

.text-80,
.text-81,
.text-82 {
  letter-spacing: -0.32px;
  line-height: 24px;
  margin-top: -2px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>
