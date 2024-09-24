<template>
  <div :class="[`frame-7298-4`, className || ``]">
    <div class="frame-7669-2">
      <!-- 대회이름을 선택할 수 있는 select box -->
      <select class="text-2536 pretendard-regular-normal-mine-shaft-18px">
        <option value="" disabled selected>대회이름</option>
        <option value="tournament1">대회이름 1</option>
        <option value="tournament2">대회이름 2</option>
        <option value="tournament3">대회이름 3</option>
      </select>
      <!-- <img
        class="vector-192"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-168.svg"
        alt="Vector"
      /> -->
    </div>
    <div class="frame-7670-2">
      <!-- 검색어 입력 필드 -->
      <input
        type="text"
        class="text-2537 pretendard-regular-normal-mountain-mist-18px"
        placeholder="검색어를 입력하세요"
      />
      <img
        class="search-btn-10"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/searchbtn-9.svg"
        alt="searchBtn"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame72982",
  props: ["className"],
};
</script>

<style>
.frame-7298-4 {
  align-items: center;
  background-color: var(--cultured-pearl);
  border-radius: 5px;
  display: flex;
  gap: 20px;
  height: 120px;
  margin-top: 51px;
  overflow: hidden;
  padding: 0 40px;
  width: 1400px;
}

.frame-7669-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0px 20px;
  position: relative;
  width: 198px;
}

.text-2536 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: 160px; /* select box 크기를 맞추기 위해 수정 */
  background: none;
  border: none;
  font-size: inherit;
}

.vector-192 {
  height: 6.11px;
  position: relative;
  width: 11.61px;
}

.frame-7670-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0px 20px;
  position: relative;
  width: 1099px;
}

.text-2537 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: 100%; /* input이 가로로 차지하는 공간을 맞춤 */
  background: none;
  border: none;
  font-size: inherit;
  outline: none;
}

.search-btn-10 {
  height: 24px;
  position: relative;
  width: 24px;
}

.frame-7298-4.frame-7727-8 .text-2537 {
  white-space: nowrap;
  width: fit-content;
}
</style>
