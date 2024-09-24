<template>
  <div class="frame-7288">
    <select class="select-recent-games" v-model="selectedGames">
      <option value="5">최근 5경기</option>
      <option value="10">최근 10경기</option>
      <option value="15">최근 15경기</option>
    </select>
    <!-- <img
      class="vector-4-4"
      src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-3.svg"
      alt="Vector 4"
    /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedGames: '5', // 기본값: 최근 5경기
    };
  },
};
</script>


<style>
.select-recent-games,
.frame-7288-1 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto);
  border-radius: 2px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  overflow: hidden;
  padding: 10px;
  position: relative;
} 

.text-1665,
.text-2400 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.vector-4-4,
.vector-4-5 {
  height: 6.21px;
  margin-right: -0.5px;
  position: relative;
  width: 11px;
}
</style>
