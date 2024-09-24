<template>
  <div :class="[`frame-769-2-1`, className || ``]"    @click="$emit('click')">
    <div class="group-763-3" :style="{ 'background-image': 'url(' + group763 + ')' }"></div>
    <div class="frame-7683-3">
      <div class="frame-7759">
        <h1 class="text-28-3 valign-text-middle pretendard-bold-log-cabin-24px">벨라스톤</h1>
        <div class="group-767-1">
          <div class="frame-7757-1 pretendard-regular-normal-granite-gray-16px">
            <div class="text-28-4">18홀</div>
            <div class="rectangle-50926-1"></div>
            <div class="text-28-4">해돋이, 해넘이</div>
            <div class="rectangle-50926-1"></div>
            <div class="text-28-4">경상도</div>
          </div>
          <frame7758 :className="frame7758Props.className" :frame7345Props="frame7758Props.frame7345Props" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame7758 from "./Frame7758";
export default {
  name: "Frame7690",
  components: {
    Frame7758,
  },
  props: ["group763", "className", "frame7758Props"],
};
</script>

<style>
.frame-769-2-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 413px;
}

.group-763-3 {
  background-position: 50% 50%;
  background-size: cover;
  height: 250px;
  position: relative;
  width: 413px;
}

.frame-7683-3 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--blackwhitewhite);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-left-style: solid;
  border-left-width: 1px;
  border-radius: 0px 0px 20px 20px;
  border-right-style: solid;
  border-right-width: 1px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  padding: 35px 30px;
  position: relative;
  width: 100%;
}

.frame-7759 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 207px;
}

.text-28-3 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.group-767-1 {
  height: 41px;
  position: relative;
  width: 207px;
}

.frame-7757-1 {
  align-items: flex-end;
  display: flex;
  gap: 10px;
  left: 0;
  position: absolute;
  top: 0;
  width: 207px;
}

.text-28-4 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.rectangle-50926-1 {
  background-color: var(--granite-gray);
  height: 10px;
  position: relative;
  width: 1px;
}
</style>
