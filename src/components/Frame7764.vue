<template>
  <div :class="[`frame-7764`, className || ``]">
    <frame73034 :text1512="frame73034Props.text1512" />
        <input 
      class="frame-7281-18 pretendard-regular-normal-mountain-mist-16px" 
      :placeholder="placeholder"
      type="text"
    />
  </div>
</template>

<script>
import Frame73034 from "./Frame73034";
import Frame7772 from "./Frame7772";
export default {
  name: "Frame7764",
  components: {
    Frame73034,
    Frame7772,
  },
  props: ["className", "frame73034Props", "frame7772Props","placeholder"],
};
</script>

<style>
.frame-7764 {
  align-items: center;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--celeste);
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex: 0 0 auto;
  padding: 20px 20px 20px 0px;
  position: relative;
  width: 100%;
}

.frame-7281-18 {
  background-color: var(--hint-of-red);
  border: 0.5px solid;
  border-color: var(--alto);
  height: 50px;
  position: relative;
  width: 541px;
}

.frame-7764.frame-7766-9 {
  border-top-style: unset;
  border-top-width: unset;
}
</style>
