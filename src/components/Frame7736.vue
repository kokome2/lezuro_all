<template>
  <div :class="[`frame-7736`, className || ``]">
    <frame7737 :text151="frame7737Props.text151" />
    <div class="frame-7946">
      <div class="view-44">
        <div class="overlap-group-13" @click="$emit('click')">
          <div class="text-1-2 valign-text-middle pretendard-medium-white-12px">자세히보기</div>
        </div>
      </div>
      <div class="view-45">
        <div class="overlap-group1-10">
        <a href="#"> <div class="text-1-3 valign-text-middle pretendard-medium-white-12px">예약하기</div></a> 
        </div>
      </div>
      <div class="view-46">
        <div class="overlap-group2-5">
           <a href="#"> <div class="text-1-4 valign-text-middle pretendard-medium-white-12px">전화걸기</div></a> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame7737 from "./Frame7737";
export default {
  name: "Frame7736",
  components: {
    Frame7737,
  },
  props: ["className", "frame7737Props"],
};
</script>

<style>
.frame-7736 {
  align-items: flex-start;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-left-style: solid;
  border-left-width: 1px;
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  padding: 40px;
  position: relative;
  width: 100%;
}

.frame-7946 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 5px;
  justify-content: center;
  position: relative;
}

.view-44 {
  height: 30px;
  position: relative;
  width: 82px;
}

.overlap-group-13 {
  align-items: center;
  background-color: var(--mountain-mist);
  border-radius: 4px;
  display: flex;
  height: 30px;
  justify-content: flex-end;
  min-width: 80px;
  padding: 0 9px;
}

.text-1-2 {
  height: 10px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  width: 61px;
}

.view-45 {
  height: 30px;
  position: relative;
  width: 83px;
}

.overlap-group1-10 {
  align-items: flex-end;
  background-color: var(--monza);
  border-radius: 4px;
  display: flex;
  height: 30px;
  min-width: 81px;
  padding: 9.2px 17px;
}

.text-1-3 {
  height: 11px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  width: 46px;
}

.view-46 {
  height: 30px;
  margin-right: -2px;
  position: relative;
  width: 82px;
}

.overlap-group2-5 {
  align-items: center;
  background-color: var(--torea-bay);
  border-radius: 4px;
  display: flex;
  height: 30px;
  min-width: 80px;
  padding: 0 14px;
}

.text-1-4 {
  height: 10px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  width: 52px;
}

.frame-7736.frame-773,
.frame-7736.frame-773-1,
.frame-7736.frame-773-2,
.frame-7736.frame-773-3,
.frame-7736.frame-773-4,
.frame-7736.frame-773-5,
.frame-7736.frame-773-6,
.frame-7736.frame-773-7,
.frame-7736.frame-773-8,
.frame-7736.frame-773-9,
.frame-7736.frame-773-10,
.frame-7736.frame-773-11,
.frame-7736.frame-773-12,
.frame-7736.frame-773-13,
.frame-7736.frame-773-14,
.frame-7736.frame-773-15,
.frame-7736.frame-773-16,
.frame-7736.frame-773-17,
.frame-7736.frame-773-18,
.frame-7736.frame-773-19,
.frame-7736.frame-773-20,
.frame-7736.frame-773-21,
.frame-7736.frame-773-22,
.frame-7736.frame-773-23,
.frame-7736.frame-773-24,
.frame-7736.frame-773-25,
.frame-7736.frame-773-26,
.frame-7736.frame-773-27,
.frame-7736.frame-773-28,
.frame-7736.frame-773-29,
.frame-7736.frame-773-30,
.frame-7736.frame-773-31,
.frame-7736.frame-773-32,
.frame-7736.frame-773-33,
.frame-7736.frame-773-34,
.frame-7736.frame-773-35,
.frame-7736.frame-773-36,
.frame-7736.frame-773-37,
.frame-7736.frame-773-38,
.frame-7736.frame-773-39,
.frame-7736.frame-773-40 {
  border-top-style: unset;
  border-top-width: unset;
}
</style>
