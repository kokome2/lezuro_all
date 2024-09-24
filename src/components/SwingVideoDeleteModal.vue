<template>
  <div class="modal-overlay" @click="$emit('close')">
      <div class="popupu47defualt-18 screen">
        <div class="frame-5-19">
          <div class="frame-4-19">
            <div class="x-61 valign-text-middle pretendard-bold-log-cabin-18px">
              스윙 영상 삭제
            </div>
            <div
              class="text_label-60 valign-text-middle pretendard-regular-normal-granite-gray-14px"
            >
              현재 영상을 삭제하시겠습니까?
            </div>
          </div>
        </div>
        <div class="btn-group-13">
          <!-- 닫기 버튼 클릭 시 'close' 이벤트 emit -->
          <div :class="['btnprimary-21', className]" @click="$emit('close')">
            <div class="text-37 valign-text-middle pretendard-semi-bold-white-16px">
              취소
            </div>
          </div>

          <!-- 확인 버튼 클릭 시 'confirm' 이벤트 emit -->
          <div :class="['btnprimary-22', className]" @click="$emit('confirm')">
            <div class="text-37 valign-text-middle pretendard-semi-bold-white-16px">
              확인
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
export default {
  name: "SwingVideoDeleteModal",
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 불투명한 검정 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* 모달을 다른 콘텐츠 위에 배치 */
}

.btnprimary-21 {
  align-items: center;
  background-color: var(--nobel);
  display: flex;
  gap: 10px;
  height: 50px;
  justify-content: center;
  padding: 14px 10px;
  position: relative;
  width: 140px;
}

.text-37 {
  letter-spacing: -0.32px;
  line-height: 24px;
  margin-top: -2px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.btnprimary-22 {
    align-items: center;
      display: flex;
  gap: 10px;
    padding: 14px 10px;
      justify-content: center;
  position: relative;
  width: 140px;
  height: 50px;
  background-color: var(--monza);
}
.btn-group-13 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}
.popupu47defualt-18 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto-2);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.frame-5-19 {
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

.frame-4-19 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
}

.x-61 {
  letter-spacing: -0.36px;
  line-height: 27px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text_label-60 {
  letter-spacing: -0.28px;
  line-height: 18px;
  position: relative;
  text-align: center;
  width: 226px;
}
</style>
