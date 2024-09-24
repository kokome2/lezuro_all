<template>
  <div class="popupu47defualt-23 screen">
    <div class="frame-5-23">
      <div class="frame-4-23">
        <div class="x-65 valign-text-middle pretendard-bold-log-cabin-18px">휴대폰 인증</div>
        <p class="text_label-64 valign-text-middle pretendard-regular-normal-granite-gray-14px" v-html="text_Label"></p>
      </div>
    </div>
    <btn-group3 
    @buttonClick="successcertificaiton" />
  </div>
</template>

<script>
import BtnGroup3 from "./BtnGroup3";
export default {
  name: "PhoneCertificationModal",
  components: {
    BtnGroup3,
  },
  props: ["text_Label"],
  methods:{
    successcertificaiton(){
     this.router.path({path:"/signup"})
    }
  },
};
</script>

<style>
.popupu47defualt-23,
.popupu47defualt-24 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto-2);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.frame-5-23,
.frame-5-24 {
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

.frame-4-23,
.frame-4-24 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
}

.x-65,
.x-66 {
  letter-spacing: -0.36px;
  line-height: 27px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text_label-64,
.text_label-65 {
  letter-spacing: -0.28px;
  line-height: 18px;
  position: relative;
  text-align: center;
  width: 226px;
}
</style>
