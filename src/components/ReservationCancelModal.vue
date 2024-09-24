<template>
  <div class="popupu47defualt-3 screen">
    <div class="frame-5-3">
      <div class="frame-4-3">
        <div class="x-45 valign-text-middle notosanskr-medium-log-cabin-16px">예약 취소</div>
        <p class="text_label-33 valign-text-middle notosanskr-normal-tuatara-14px">
          현재&nbsp;&nbsp;예약을&nbsp;&nbsp;취소하시겠습니까?
        </p>
      </div>
    </div>
   <div class="btn-group-3">
    <div class="btnsecondary" @click="closeRModal">
      <div class="text_label-35 valign-text-middle notosanskr-light-white-16px" >닫기</div>
    </div>
    <div class="btnprimary-3" @click="cancelReservation">
      <div class="text-83 valign-text-middle notosanskr-light-white-16px">취소</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "ReservationCancelModal",
  methods: {
    closeRModal() {
      // 모달을 닫기 위한 이벤트 전송
      this.$emit("closeRModal");
    },
    cancelReservation() {
      // 예약 취소 시 알림 메시지
      alert("예약이 취소되었습니다.");
      // 모달을 닫기 위한 이벤트 전송
      this.$emit("closeRModal");
    }
  }
};
</script>

<style>
.popupu47defualt-3,
.popupu47defualt-5 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto-2);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
.popupu47defualt-3 {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* 블랙 투명 배경 */
  border: 1px solid var(--alto-2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000; /* 모달을 최상위로 배치 */
}

.frame-5-3,
.frame-5-4 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 24px 25px;
  position: relative;
}

.frame-4-3,
.frame-4-4 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

.x-45,
.x-46 {
  letter-spacing: -0.32px;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text_label-33,
.text_label-34 {
  letter-spacing: -0.28px;
  line-height: 21px;
  position: relative;
  text-align: center;
  width: 226px;
}
.btn-group-3 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  overflow: hidden;
  position: relative;
}

.btnsecondary {
  align-items: center;
  background-color: var(--nobel);
  display: flex;
  gap: 10px;
  height: 52px;
  justify-content: center;
  margin-bottom: -1px;
  margin-left: -1px;
  margin-top: -1px;
  padding: 14px 10px;
  position: relative;
  width: 140px;
}

.text_label-35 {
  letter-spacing: -0.32px;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.btnprimary-3 {
  align-items: center;
  background-color: var(--monza);
  display: flex;
  gap: 10px;
  height: 50px;
  justify-content: center;
  padding: 14px 10px;
  position: relative;
  width: 138px;
}

.text-83 {
  letter-spacing: -0.32px;
  line-height: 24px;
  margin-top: -2px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.btn-group-3.btn-group-8 .btnsecondary {
  border-color: var(--blackwhitewhite);
  border-right-style: solid;
  border-right-width: 0.5px;
}

.btn-group-3.btn-group-8 .text_label-35 {
  margin-top: -1.25px;
}

.btn-group-3.btn-group-8 .btnprimary-3 {
  background-color: var(--nobel);
}
</style>
