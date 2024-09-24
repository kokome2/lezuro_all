<template>
  <div class="container-center-horizontal">
    <div class="editprofile3-2 screen">
      <div class="frame-7634-2">
        <frame7605 :text122="frame7605Props.text122" />
        <div class="frame-7697-5">
          <div class="frame-7966-1">
            <div class="frame-7627-1-1">
                <div class="frame-7613 pretendard-medium-log-cabin-18px">현재 비밀번호</div>
                <input type="text"
                placeholder="현재 비밀번호를 입력하세요"
                class="frame-7611-1 valign-text-middle pretendard-medium-mountain-mist-16px">
              </div>
              <div class="frame-7627-1-1">
                <div class="frame-7613 pretendard-medium-log-cabin-18px">새 비밀번호</div>
                <input type="text"
                placeholder="새로운 비밀번호를 입력하세요"
                class="frame-7611-1 valign-text-middle pretendard-medium-mountain-mist-16px">
              </div>
              <div class="frame-7627-1-1">
                <div class="frame-7613 pretendard-medium-log-cabin-18px">새 비밀번호 확인</div>
                <input type="text"
                placeholder="새 비밀번호를 재입력하세요"
                class="frame-7611-1 valign-text-middle pretendard-medium-mountain-mist-16px">
              </div>
          </div>
          <group758 :text130="group758Props.text130"
          @buttonClick="showModal" />

           <ResetPasswordConfirmModal v-if="isModalVisible" @close="hideModal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame7605 from "./Frame7605";
import Frame76962 from "./Frame76962";
import Group758 from "./Group758";
import ResetPasswordConfirmModal from "./ResetPasswordConfirmModal";

export default {
  name: "EditPassword",
  components: {
    Frame7605,
    Frame76962,
    Group758,
    ResetPasswordConfirmModal
  },
    data() {
    return {
      isModalVisible: false,
    };
  },
  props: ["frame7605Props", "frame769621Props", "frame769622Props", "frame769623Props", "group758Props"],
 methods: {
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style>
.frame-7611-1{border:1px solid #999;}

.editprofile3-2 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  height: 1005px;
  padding: 272px 560px;
  width: 1920px;
}

.frame-7634-2 {
  align-items: center;
  background-color: var(--gallery);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  margin-top: 1px;
  overflow: hidden;
  padding: 50px;
  position: relative;
  width: 800px;
}

.frame-7697-5 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-7966-1 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}
</style>
