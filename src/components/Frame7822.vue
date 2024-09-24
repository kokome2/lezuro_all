<template>
  <div class="frame-782 @click=" @click="$emit('click')">
    <img class="mask-group-2" :src="maskGroup" alt="Mask group" />
    <div class="frame-7813-2">
      <p class="text-283 valign-text-middle pretendard-bold-log-cabin-24px">
        홀인원 챌린지에 성공하면, 2천만원 나눠 드려요
      </p>
      <div class="text-28-2 valign-text-middle pretendard-light-granite-gray-16px">2024-04-11 ~ 2024-11-30</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame7822",
  props: ["maskGroup"],
};
</script>

<style>
.frame-782 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 640px;
}

.mask-group-2 {
  height: 330px;
  position: relative;
  width: 640px;
}

.frame-7813-2 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto);
  border-radius: 0px 0px 20px 20px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  padding: 40px 30px;
  position: relative;
  width: 100%;
}

.text-283 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.text-28-2 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
}
</style>
