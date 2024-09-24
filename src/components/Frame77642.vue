<template>
  <div :class="[`frame-7764-1`, className || ``]">
    <frame73034 :text1512="frame73034Props.text1512" />
    <select v-model="selectedOption" class="frame-7281-19">
      <option value="" disabled>{{ selectPlaceholder }}</option> <!-- Placeholder 설정 -->
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  </div>
</template>

<script>
import Frame73034 from "./Frame73034";

export default {
  name: "Frame77642",
  components: {
    Frame73034,
  },
  props: ["text2743", "className", "frame73034Props", "selectPlaceholder"], // selectPlaceholder prop 추가
  data() {
    return {
      selectedOption: "", // 선택된 옵션 값을 저장
    };
  },
};
</script>

<style>
.frame-7764-1 {
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

.frame-7281-19 {
  background-color: var(--hint-of-red);
  border: 0.5px solid;
  border-color: var(--alto);
  height: 50px;
  position: relative;
  width: 541px;
}

.frame-7772-12 {
  align-items: center;
  display: flex;
  justify-content: space-between;
  left: 18px;
  position: relative;
  top: 20px;
  width: 502px;
}

.text-274-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.vector-3-34 {
  height: 7.41px;
  margin-right: -1px;
  position: relative;
  width: 12px;
}

.frame-7764-1.frame-7766-10 {
  border-top-style: unset;
  border-top-width: unset;
}
</style>
