<template>
  <div class="frame-7307-1">
    <div class="text-480 pretendard-bold-black-20px">{{ text480 }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame7307",
  props: ["text480"],
};
</script>

<style>
.frame-7307-1,
.frame-7307-2 {
  align-items: center;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--mountain-mist);
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  padding: 30px 0px 15px;
  position: relative;
  width: 100%;
}

.text-480,
.text-1264 {
  letter-spacing: -0.8px;
  line-height: 32px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
