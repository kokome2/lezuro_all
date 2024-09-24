<template>
  <div class="modal-overlay" @click="$emit('close')">
    <div class="modal-contents" @click.stop>
      <iframe
      style="border-radius:20px;"
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/Vblc9NWuHwY?autoplay=1" 
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script scroped>
export default {
  name: "YouTubeModal",
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* 검정 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* 다른 요소들 위에 위치 */
}

.modal-contents {
  width: 1280px;
  height: 720px;
  border-radius: 20px;
  background-color: white;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>
