<template>
  <div :class="[`group-688`, className || ``]">
    <div class="overlap-group-101">
      <img class="image-3" :src="image6" alt="image 6" />
      <div class="text-23-2 valign-text-middle pretendard-bold-log-cabin-24px">나이스 샷~</div>
      <div class="text-23-3 valign-text-middle pretendard-regular-normal-log-cabin-18px">
        [경기 파주] 레저로 파크골프
      </div>
      <div class="flex-row-88 pretendard-light-mountain-mist-14px">
        <div class="text-100 valign-text-middle">{{ text }}</div>
        <div class="date-25 valign-text-middle">2024-09-23</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group688",
  props: ["image6", "text", "className"],
};
</script>

<style>
.group-688 {
  height: 401px;
  position: relative;
  width: 328px;
}

.overlap-group-101 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--celeste);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  min-height: 401px;
  width: 320px;
}

.image-3 {
  height: 250px;
  margin-left: -1px;
  margin-top: -1px;
  width: 320px;
}

.text-23-2 {
  height: 17px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 29px;
  margin-top: 33px;
  white-space: nowrap;
}

.text-23-3 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 29px;
  margin-top: 14px;
  white-space: nowrap;
}

.flex-row-88 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 190px;
  margin-left: 9px;
  margin-top: 24px;
  min-width: 269px;
}

.text-100 {
  height: 10px;
  letter-spacing: 0;
  line-height: normal;
  min-width: 1px;
  white-space: nowrap;
}

.date-25 {
  height: 10px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.group-688.group-691 {
  margin-right: -4px;
}

.group-688.group-691 .flex-row-88 {
  gap: 134px;
}

.group-688.group-691 .text-100 {
  min-width: 57px;
}
</style>
