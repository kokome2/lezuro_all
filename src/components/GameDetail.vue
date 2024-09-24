<template>
  <div class="modal-overlay">
    <div class="frame-7655-1 screen">
      <div class="frame-7313">
        <h1
          class="text-1768 valign-text-middle pretendard-extra-extra-bold-log-cabin-24px"
        >
          레저로 스크린파크골프 광명점
        </h1>
        <img
          class="material-symbolsclose-2"
          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/material-symbols-close.svg"
          alt="material-symbols:close"
          @click="closeModal"
        />
      </div>
      <div class="rectangle-509264"></div>
      <div class="frame-7743">
        <div class="frame-7742" >
             <div v-for="(image, index) in images" :key="index" v-show="currentIndex === index">
            <img :src="image.src" :alt="'Slide ' + index" />
          </div>
       <div class="group-692" @click="prevSlide">
            <div class="overlap-group-85">
              <div class="ellipse-10"></div>
              <img
                class="vector-5-1"
                src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-5-1.svg"
                alt="Previous"
              />
            </div>
          </div>
          <div class="group-693" @click="nextSlide">
            <div class="overlap-group-85">
              <div class="ellipse-10-1"></div>
              <img
                class="vector-5-2"
                src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-5-2.svg"
                alt="Next"
              />
            </div>
          </div>
            <div class="dots">
          <span
            v-for="(image, index) in images"
            :key="'dot-' + index"
            :class="{'active-dot': currentIndex === index}"
            @click="setCurrentSlide(index)"
          ></span>
        </div>
        </div>
        </div>
      <div class="frame-7751">
        <tbody>
          <tr>
            <td
              class="frame-7744 valign-text-middle pretendard-medium-white-14px"
            >
              매장주소
            </td>
            <td class="pretendard-medium-log-cabin-14px">
              {{ game.address }}
            </td>
          </tr>
          <tr>
            <td
              class="frame-7744 valign-text-middle pretendard-medium-white-14px"
            >
              운영시간
            </td>
            <td class="pretendard-medium-log-cabin-14px">
              {{ game.time }}
            </td>
          </tr>
          <tr>
            <td
              class="frame-7744 valign-text-middle pretendard-medium-white-14px"
            >
              무료주차
            </td>
            <td class="pretendard-medium-log-cabin-14px">
              {{ game.parking }}
            </td>
          </tr>
          <tr>
            <td
              class="frame-7744 valign-text-middle pretendard-medium-white-14px"
            >
              매장규모
            </td>
            <td class="pretendard-medium-log-cabin-14px">
              {{ game.room }}
            </td>
          </tr>
          <tr>
            <td
              class="frame-7744 valign-text-middle pretendard-medium-white-14px"
            >
              매장안내
            </td>
            <td class="pretendard-medium-log-cabin-14px">
              {{ game.info }}
            </td>
          </tr>
        </tbody>
      </div>
      <div class="frame-7947">
        <div class="frame-7752">
          <div class="text-17-14 valign-text-middle pretendard-bold-white-18px">
            전화걸기
          </div>
        </div>
        <div class="frame-7284" @click="openReservationPage">
          <div class="text-17-14 valign-text-middle pretendard-bold-white-18px">
            예약하기
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame7752 from "./Frame7752";
export default {
  name: "GameDetail",
  components: {
    Frame7752,
  },
  props: [
    "text1768",
    "frame77461Props",
    "frame77462Props",
    "frame77463Props",
    "frame77464Props",
    "frame77465Props",
    "frame77521Props",
    "frame77522Props",
  ],
  data() {
    return {
       currentIndex: 0,
           images: [
        {src: require("../../img/frame-7742.png"), },
        {src: require("../../img/frame-7742.png"), },
        {src: require("../../img/frame-7742.png"), },
        {src: require("../../img/frame-7742.png"), },
        {src: require("../../img/frame-7742.png"), },
      ],
      game: {
        address: "경기도 광명시 오리로500",
        time: "평일 09:00 ~ 24:00 / 주말 10:00 ~ 22:00",
        parking: "2시간 무료",
        room: "10개 게임 룸",
        info: "매장에 대한 안내 내용입니다",
      },
    };
  },
    mounted() {
    this.startSlideshow();
  },
  methods: {
       closeModal() {
      this.$emit("close"); // 부모 컴포넌트로 close 이벤트를 전송
    },
    openReservationPage() {
      this.$router.push({ path: "/reservation-write" });
    },
    startSlideshow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Move to the next slide every 3 seconds
  },
   nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  },
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  },
  setCurrentSlide(index) {
    this.currentIndex = index;
  },
},
beforeDestroy() {
  clearInterval(this.slideInterval); // Clear interval when component is destroyed
}
};
</script>

<style>
.frame-7655-1 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px;
  position: relative;
}

.frame-7313 {
  align-items: center;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-color: var(--alto);
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  padding: 0px 0px 30px;
  position: relative;
  width: 100%;
}

.text-1768 {
  letter-spacing: 0;
  line-height: 33.6px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.material-symbolsclose-2 {
  height: 24px;
  position: relative;
  width: 24px;
}

.rectangle-509264 {
  height: 30px;
  position: relative;
  width: 720px;
}

.frame-7743 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 400px;
  justify-content: flex-end;
  padding: 0px 30px 30px;
  position: relative;
  width: 720px;
}

.frame-7742 {
  align-items: center;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 400px;
  justify-content: space-between;
  left: 0;
  position: absolute;
  top: 0;
  width: 720px;
}
.group-692 {
  position: absolute;
  left: 0; /* Move it to the far left */
  cursor: pointer;
}

.overlap-group-85 {
  border-radius: 25px;
  height: 50px;
  position: relative;
}

.ellipse-10 {
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--celeste);
  border-radius: 25px;
  height: 50px;
  left: 0;
  position: absolute;
  top: 0;
  transform: rotate(-180deg);
  width: 50px;
}

.vector-5-1 {
  height: 12px;
  left: 21px;
  position: absolute;
  top: 19px;
  width: 7px;
}

.group-693 {
  height: 50px;
  position: relative;
  transform: rotate(180deg);
  width: 50px;
}

.ellipse-10-1 {
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--celeste);
  border-radius: 25px;
  height: 50px;
  left: 0;
  position: absolute;
  top: 0;
  transform: rotate(-180deg);
  width: 50px;
}

.vector-5-2 {
  height: 12px;
  left: 21px;
  position: absolute;
  top: 19px;
  transform: rotate(-180deg);
  width: 7px;
}

.frame-7292 {
  align-items: flex-end;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  position: relative;
}

.ellipse-1-2 {
  background-color: #e17b11;
  border-radius: 5px;
  height: 10px;
  position: relative;
  width: 10px;
}

.ellipse {
  background-color: var(--blackwhitewhite);
  border-radius: 5px;
  height: 10px;
  position: relative;
  width: 10px;
}

.frame-7751 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 30px 0px;
  position: relative;
  width: 720px;
}

.frame-7947 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}

.frame-7744 {
  align-items: center;
  background-color: var(--granite-gray);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  gap: 10px;
  height: 44px;
  justify-content: center;
  padding: 15px;
  position: relative;
  width: 130px;
}

.frame-7752 {
  background-color: var(--torea-bay);
  height: 48px;
  position: relative;
  width: 355px;
}

.frame-7284 {
  background-color: var(--monza);
  height: 48px;
  position: relative;
  width: 355px;
}
</style>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); /* 불투명한 검정색 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 다른 요소 위에 표시 */
}
td:nth-child(2) {
  border: 1px solid #ddd;
  padding: 15px;
  width: 590px;
}

.frame-7742 {
  position: relative;
  width: 720px;
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* Dots Style */
.dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  position:absolute;
  left:45%;
  bottom:20px;
}

.dots span {
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}

.dots .active-dot {
  background-color: #E17B11;

}
</style>
