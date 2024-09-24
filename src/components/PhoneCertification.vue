<template>
  <div class="container-center-horizontal">
    <div class="signup1-2 screen">
      <uui-t-pl />
      <div class="frame-7944">
        <h1 class="text-2050 valign-text-middle pretendard-extra-extra-bold-black-30px">{{ text2050 }}</h1>
        <div class="frame-7945">
          <input
            type="text"
            class="frame-7942"
            placeholder="휴대폰번호를 입력하세요"
          />
          <div class="frame-7944-1">
            <frame77124
              :text_Label="frame77124Props.text_Label"
              @buttonClick="openPhoneCertificationModal"
            />
          </div>
        </div>
      </div>
      <x-footer :className="xFooterProps.className" />
      <PhoneCertificationConfirmModal
        v-if="isModalVisible"
        @close="closePhoneCertificationModal"
        @confirm="navigateToSignup"
      />
    </div>
  </div>
</template>

<script>
import UuiTPl from "./UuiTPl";
import Frame77124 from "./Frame77124";
import XFooter from "./XFooter";
import PhoneCertificationConfirmModal from "./PhoneCertificationConfirmModal";

export default {
  name: "PhoneCertification",
  components: {
    UuiTPl,
    Frame77124,
    XFooter,
    PhoneCertificationConfirmModal,
  },
  props: ["text2050", "frame77124Props", "xFooterProps"],
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    openPhoneCertificationModal() {
      this.isModalVisible = true;
    },
    closePhoneCertificationModal() {
      this.isModalVisible = false;
    },
    navigateToSignup() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style>
.popupu47defualt-1 {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* 블랙 투명 배경 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
}
.signup1-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  min-height: 1575px;
  position: relative;
  width: 1920px;
}

.frame-7944 {
  align-items: center;
  background-color: var(--cultured-pearl);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 207px;
  padding: 50px;
  position: relative;
  width: 800px;
}

.text-2050 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.frame-7945 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.frame-7942 {
  border: none;
  padding: 20px;
  display: flex;
  justify-content: center;
  height: 80px;
  width: 100%;
}

.frame-7942::placeholder {
  font-size: 20px;
  color: #999;
}

.frame-7944-1 {
  align-items: center;
  background-color: var(--monza);
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
