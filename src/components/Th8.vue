<template>
  <div :class="[`frame-7729-item-1`, className || ``]">
    <div class="number-205 valign-text-middle pretendard-regular-normal-granite-gray-18px">{{ number1 }}</div>
    <div class="frame-7728-1">
      <img class="group-736-6" :src="group736" alt="Group 736" />
      <div class="text-2476 valign-text-middle pretendard-regular-normal-granite-gray-18px">{{ text2476 }}</div>
    </div>
    <div class="text-2477 valign-text-middle pretendard-regular-normal-granite-gray-18px">마스터</div>
    <div class="number-206 valign-text-middle pretendard-regular-normal-granite-gray-18px">9</div>
    <div class="text-2478 valign-text-middle pretendard-regular-normal-granite-gray-18px">-24</div>
    <frame77302 />
  </div>
</template>

<script>
import Frame77302 from "./Frame77302";
export default {
  name: "Th8",
  components: {
    Frame77302,
  },
  props: ["number1", "group736", "text2476", "className"],
};
</script>

<style>
.frame-7729-item-1 {
  align-items: center;
  align-self: stretch;
  background-color: var(--blackwhitewhite);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0px 40px;
  position: relative;
  width: 100%;
}

.number-205,
.text-2477,
.number-206,
.text-2478 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 100px;
}

.frame-7728-1 {
  align-items: center;
  display: flex;
  gap: 12px;
  position: relative;
  width: 200px;
}

.group-736-6 {
  height: 30px;
  position: relative;
  width: 29.99px;
}

.text-2476 {
  letter-spacing: 0;
  line-height: normal;
  margin-right: -31.99px;
  position: relative;
  width: 190px;
}

.frame-7729-item-1.frame-7729-item-2 .group-736-6,
.frame-7729-item-1.frame-7729-item-3 .group-736-6,
.frame-7729-item-1.frame-7729-item .group-736-6 {
  width: 30px;
}

.frame-7729-item-1.frame-7729-item-2 .text-2476,
.frame-7729-item-1.frame-7729-item-3 .text-2476,
.frame-7729-item-1.frame-7729-item .text-2476 {
  margin-right: -32px;
}
</style>
