<template>
  <div class="frame-7773">
    <div class="frame-732" 
     @click="decreaseCount">
      <img
        class="line-2-1"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-2.svg"
        alt="Line 2"
      />
    </div>
    <div class="text-1836 valign-text-middle pretendard-regular-normal-mine-shaft-16px">{{ count }}명</div>
    <div class="frame-732">
      <div class="group-2-2">
        <div class="line-container"    
         @click="increaseCount">
          <img
            class="line-2-2"
            src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-2-1.svg"
            alt="Line 2"
        
          />
          <img
            class="line-3-1"
            src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-46.svg"
            alt="Line 3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame7773",
  data() {
    return {
      count: 0, // 초기 카운트 값
    };
  },
  methods: {
    increaseCount() {
      this.count++; // 숫자를 1씩 증가
    },
    decreaseCount() {
      if (this.count > 0) {
        this.count--; // 숫자를 0 이하로 내려가지 않게 제한하고 1씩 감소
      }
    },
  },
};
</script>

<style>
.frame-7773,
.frame-7773-1 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}

.frame-732,
.frame-732-1 {
  align-items: center;
  background-color: var(--gallery);
  border: 1px solid;
  border-color: var(--celeste);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 32px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 32px;
}

.line-2-1,
.line-2-3 {
  height: 1px;
  object-fit: cover;
  position: relative;
  width: 10px;
}

.text-1836,
.text-2767 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.group-2-2,
.group-2-3 {
  height: 11px;
  position: relative;
  width: 11px;
}

.line-container,
.line-container-1 {
  height: 11px;
  position: relative;
}

.line-2-2,
.line-2-4 {
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 5px;
  width: 11px;
}

.line-3-1,
.line-3-2 {
  height: 11px;
  left: 5px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1px;
}
</style>
