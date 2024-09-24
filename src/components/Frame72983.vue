<template>
  <div class="frame-7298-5">
    <div class="frame-7733-2">
      <!-- 첫 번째 select box -->
      <select class="frame-7669" v-model="selectedOption1">
        <option value="1">전체지역</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>

      <!-- 두 번째 select box -->
      <select class="frame-7669" v-model="selectedOption2">
        <option value="A">전체지역(시군구)</option>
        <option value="B">Option B</option>
        <option value="C">Option C</option>
      </select>

      <!-- 검색어 입력 input 박스 -->
       <div class="search-container">
        <input 
          type="text"
          v-model="searchQuery"
          class="search-input "
          placeholder="검색어 입력"
        />
        <img
          class="search-btn-12"
          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/searchbtn-9.svg"
          alt="searchBtn"
          @click="performSearch"
        />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame72983",
  data() {
    return {
      selectedOption1: "1", // 첫 번째 select 박스의 기본값
      selectedOption2: "A", // 두 번째 select 박스의 기본값
      searchQuery: "", // 검색어를 저장하는 데이터
    };
  },
};
</script>

<style>
.search-container {
  display: flex;
  align-items: center;
  background-color: var(--blackwhitewhite);
  padding: 0px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 60px;
}
.search-input {
  border: none;
  outline: none;
  font-size: 14px;
  width: 800px;
  padding: 10px;
}
.frame-7669,
.frame-7669.frame-76-8,
.frame-7669.frame-76-9 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0px 20px;
  position: relative;
  width: 250px;
}
.frame-7298-5,
.frame-7298-6 {
  align-items: center;
  background-color: var(--cultured-pearl);
  border-radius: 5px;
  display: flex;
  height: 120px;
  margin-top: 51px;
  overflow: hidden;
  padding: 0 28px;
  width: 1400px;
}

.frame-7733-2,
.frame-7733-3 {
  align-items: center;
  display: flex;
  gap: 20px;
  margin-left: 12px;
  position: relative;
  width: 1332px;
}

.frame-7670-4,
.frame-7670-5 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0px 20px;
  position: relative;
  width: 792px;
}

.text-2658,
.text-2844 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: 165px;
}

.search-btn-12,
.search-btn-13 {
  height: 24px;
  position: relative;
  width: 24px;
}
</style>
