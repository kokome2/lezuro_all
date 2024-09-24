<template>
  <article :class="[`frame-7923-3`, className || ``]"   @click="$emit('click')">
    <div class="text_label-31 valign-text-middle pretendard-medium-white-18px">{{ text_Label }}</div>
  </article>
</template>

<script>
export default {
  name: "Frame7712",
  props: ["text_Label", "className"],
};
</script>

<style>
.frame-7923-3 {
  align-items: center;
  background-color: var(--celeste);
  border-radius: 8px;
  display: flex;
  gap: 10px;
  height: 50px;
  justify-content: center;
  padding: 18px 66px;
  position: relative;
  width: 150px;
}

.text_label-31 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: -22.5px;
  margin-right: -22.5px;
  margin-top: -0.5px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7923-3.frame-7712 {
  background-color: var(--monza);
}

.frame-7923-3.frame-7712-1,
.frame-7923-3.frame-7858-1,
.frame-7923-3.frame-7859,
.frame-7923-3.frame-7859-1,
.frame-7923-3.frame-7712-6,
.frame-7923-3.frame-7859-2,
.frame-7923-3.frame-7858-3,
.frame-7923-3.frame-7712-9,
.frame-7923-3.frame-7712-11,
.frame-7923-3.frame-7712-12,
.frame-7923-3.frame-7858-4,
.frame-7923-3.frame-7712-15 {
  background-color: var(--monza);
  border-radius: unset;
  width: 200px;
}

.frame-7923-3.frame-7712-1 .text_label-31,
.frame-7923-3.frame-7712-2 .text_label-31,
.frame-7923-3.frame-7712-4 .text_label-31,
.frame-7923-3.frame-7712-5 .text_label-31,
.frame-7923-3.frame-7712-6 .text_label-31,
.frame-7923-3.frame-7712-7 .text_label-31,
.frame-7923-3.frame-7712-8 .text_label-31,
.frame-7923-3.frame-7712-9 .text_label-31,
.frame-7923-3.frame-7712-11 .text_label-31,
.frame-7923-3.frame-7712-12 .text_label-31,
.frame-7923-3.frame-7712-14 .text_label-31,
.frame-7923-3.frame-7712-15 .text_label-31,
.frame-7923-3.frame-7858-1 .text_label-31,
.frame-7923-3.frame-7858-2 .text_label-31,
.frame-7923-3.frame-7859 .text_label-31,
.frame-7923-3.frame-7859-1 .text_label-31,
.frame-7923-3.frame-7859-2 .text_label-31,
.frame-7923-3.frame-7858-3 .text_label-31,
.frame-7923-3.frame-7713 .text_label-31,
.frame-7923-3.frame-7858-4 .text_label-31 {
  margin-left: unset;
  margin-right: unset;
}

.frame-7923-3.frame-7858,
.frame-7923-3.frame-7858-5 {
  background-color: var(--monza);
  height: 35px;
  width: 138px;
}

.frame-7923-3.frame-7858-5 .text_label-31,
.frame-7923-3.frame-7858 .text_label-31 {
  margin-bottom: -6px;
  margin-left: -46px;
  margin-right: -46px;
  margin-top: -8px;
}

.frame-7923-3.frame-7712-2,
.frame-7923-3.frame-7712-4,
.frame-7923-3.frame-7712-5,
.frame-7923-3.frame-7712-7,
.frame-7923-3.frame-7712-8,
.frame-7923-3.frame-7713,
.frame-7923-3.frame-7712-14 {
  background-color: var(--mountain-mist);
  border-radius: unset;
  width: 200px;
}

.frame-7923-3.frame-7712-3 {
  align-self: stretch;
  background-color: var(--monza);
  border-radius: unset;
  height: 60px;
  width: 100%;
}

.frame-7923-3.frame-7712-3 .text_label-31,
.frame-7923-3.frame-7712-10 .text_label-31 {
  margin-left: unset;
  margin-right: unset;
  margin-top: unset;
}

.frame-7923-3.frame-7858-2 {
  background-color: var(--mine-shaft);
  border-radius: unset;
  width: 200px;
}

.frame-7923-3.frame-7837 {
  background-color: var(--monza);
  border-radius: unset;
}

.frame-7923-3.frame-7712-10 {
  background-color: var(--monza);
  border-radius: unset;
  height: 60px;
  width: 300px;
}

.frame-7923-3.frame-7712-13 {
  background-color: var(--monza);
  border-radius: unset;
  height: 40px;
}

.frame-7923-3.frame-7712-13 .text_label-31 {
  margin-bottom: -3.5px;
  margin-top: -5.5px;
}
</style>
