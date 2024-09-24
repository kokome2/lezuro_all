<template>
  <div class="container-center-horizontal">
    <div class="reservation2-2 screen">
      <fe69r-h />
      <x2-f-ym-mc :frame7291Props="x2FYmMcProps.frame7291Props" />
      <div class="frame-7812-5">
        <div class="frame-7811-1">
          <img
            class="objects-3"
            src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/objects-3.svg"
            alt="Objects"
          />
          <div class="frame-7810-6">
            <h1 class="text-2705 valign-text-middle pretendard-bold-mine-shaft-48px" v-html="text2705"></h1>
            <p class="text-2706 valign-text-middle pretendard-regular-normal-log-cabin-28px" v-html="text2706"></p>
          </div>
        </div>
        <frame7712 :text_Label="frame7712Props.text_Label" :className="frame7712Props.className" @click="checkReservation"/>
      </div>
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import Fe69rH from "./Fe69rH";
import X2FYmMc from "./X2FYmMc";
import Frame7712 from "./Frame7712";
import XFooter from "./XFooter";
export default {
  name: "ReservationProgress",
  components: {
    Fe69rH,
    X2FYmMc,
    Frame7712,
    XFooter,
  },
  props: ["text2705", "text2706", "x2FYmMcProps", "frame7712Props", "xFooterProps"],
  methods:{
    checkReservation(){
      this.$router.push({path:"/reservationhistory"})
    }
  }
};
</script>

<style>
.reservation2-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  min-height: 1659px;
  position: relative;
  width: 1920px;
}

.frame-7812-5 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 221px;
  position: relative;
  width: 1400px;
}

.frame-7811-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 100px;
  position: relative;
  width: 100%;
}

.objects-3 {
  height: 180px;
  position: relative;
  width: 180px;
}

.frame-7810-6 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.text-2705 {
  letter-spacing: 0;
  line-height: 60px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: fit-content;
}

.text-2706 {
  align-self: stretch;
  height: 118px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
}
</style>
