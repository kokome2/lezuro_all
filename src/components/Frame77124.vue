<template>
  <div class="frame-7712-35">
    <div class="buttonClick" @click="$emit('buttonClick')">
    <div class="text_label-71 valign-text-middle">{{ text_Label }}</div>
    </div> 
  </div>
</template>

<script>
export default {
  name: "Frame77124",
  props: ["text_Label"],
};
</script>

<style>
.frame-7712-35 {
  align-items: center;
  background-color: var(--monza);
  border: 1px solid;
  border-color: var(--alto);
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 10px;
  height: 80px;
  justify-content: center;
  padding: 18px 40px;
  position: relative;
}

.text_label-71 {
  color: var(--blackwhitewhite);
  font-family: var(--font-family-pretendard-bold);
  font-size: var(--font-size-xxxxl);
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}
</style>
