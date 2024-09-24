<template>
  <div class="frame-7298-2">
    <div class="frame-7733">
       <select class="frame-7669" v-model="selectedOption1">
        <option value="1">제목</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <div class="frame-7670">
         <input 
          type="text"
          v-model="searchQuery"
          class="search-input "
          placeholder="검색어 입력해주세요"
        />
        <img
          class="search-btn-8"
          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/searchbtn-8.svg"
          alt="searchBtn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Frame7669 from "./Frame7669";
export default {
  name: "Frame7298",
  components: {
    Frame7669,
  },
   data() {
    return {
      selectedOption1: "1", // 첫 번째 select 박스의 기본값
    };
  },
  props: ["frame7669Props"],
};
</script>

<style>
.frame-7298-2,
.frame-7298-3 {
  align-self: stretch;
  background-color: var(--cultured-pearl);
  border-radius: 5px;
  height: 120px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.frame-7733,
.frame-7733-1 {
  align-items: center;
  display: flex;
  gap: 20px;
  left: 40px;
  position: relative;
  top: 30px;
  width: 1332px;
}

.frame-7670,
.frame-7670-1 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0px 20px;
  position: relative;
  width: 1062px;
}

.text-2515,
.text-3002 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: 165px;
}

.search-btn-8,
.search-btn-9 {
  height: 24px;
  position: relative;
  width: 24px;
}
</style>
