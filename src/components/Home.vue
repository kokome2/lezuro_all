<template>
  <div class="container-center-horizontal">
    <div class="main-2 screen">
      <Header />
      <div class="slide-container">
        <!-- Image Slider -->
        <div class="slide">
          <div
            class="slide-wrapper"
            :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }"
          >
            <div
              v-for="(image, index) in images"
              :key="index"
              class="slide-item"
            >
              <img :src="image" alt="Slide image" />
            </div>
          </div>
        </div>

        <!-- Slide Overlay Text (like in the image) -->
        <div class="slide-text-overlay">
          <span class="text-2322 valign-text-middle"
            >스트레스 해소와 집중력 강화,<br />
            새로운 삶의 품격을 경험하세요.</span
          >
          <span
            class="text-2323 valign-text-middle pretendard-medium-white-20px"
            >편리한 접근성과 날씨에 관계없이 언제든지 즐길 수 있는 스크린 골프,
            <br />
            지금 바로 체험해보세요!</span
          >
        </div>

        <!-- Slide Indicator (1/5) -->
        <div class="slide-indicator">
          {{ currentImageIndex + 1 }}/{{ images.length }}
        </div>

        <!-- Progress Bar -->
        <div class="progress-bar">
          <div
            class="progress"
            :style="{
              width: `${((currentImageIndex + 1) / images.length) * 100}%`,
            }"
          ></div>
        </div>

        <!-- Left Arrow Button -->
        <div class="left-arrow" @click="prevImage">&lt;</div>

        <!-- Right Arrow Button -->
        <div class="right-arrow" @click="nextImage">&gt;</div>
      </div>

      <!--공지사항-->
      <div class="frame-7383">
        <div class="frame-7382">
          <div class="frame-7381-1">
            <div class="frame-7379-1">
              <img
                class="vector-191"
                src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-117.svg"
                alt="Vector"
              />
              <div
                class="text-2281 valign-text-middle pretendard-bold-log-cabin-18px"
              >
                공지사항
              </div>
            </div>
            <div class="frame-7380-1">
              <transition name="slide-fade" mode="out-in">
                <p
                  v-if="currentText"
                  key="text"
                  class="text-2282 valign-text-middle pretendard-regular-normal-log-cabin-16px"
                >
                  {{ currentText }}
                </p>
              </transition>
              <transition name="slide-fade" mode="out-in">
                <div
                  v-if="currentDate"
                  key="date"
                  class="date-24 valign-text-middle pretendard-regular-normal-mountain-mist-16px"
                >
                  {{ currentDate }}
                </div>
              </transition>
            </div>
          </div>
          <div class="frame-7378-container">
            <img
              class="frame-7378"
              src="../../img/Vector 2.png"
              alt="Previous"
              @click="prevNotice"
            />
            <img
              class="frame-7378"
              src="../../img/Vector 3.png"
              alt="Next"
              @click="nextNotice"
            />
          </div>
        </div>
      </div>
      <div class="frame-7388">
        <div class="frame-7389">
          <div class="frame-738">
            <div
              class="event_title valign-text-middle pretendard-bold-log-cabin-24px"
            >
              이벤트
            </div>
            <div class="event-arrows">
              <span class="Events-left-arrow" @click="EventsPrevSlide">
                <img src="../../img/Group 686leftarrow.png" alt="" />
              </span>
              <span class="Events-right-arrow" @click="EventsNextSlide"
                ><img src="../../img/Group 687rightarrow.png" alt=""
              /></span>
            </div>

            <div class="Events-slide-container">
              <div
                class="Events-slide-wrapper"
                :style="{
                  transform: `translateX(-${EventsCurrentSlide * 100}%)`,
                }"
              >
                <div
                  v-for="(slide, index) in EventsSlides"
                  :key="index"
                  class="Events-slide-item"
                >
                  <img :src="slide" alt="Event Slide" />
                </div>
              </div>
            </div>

            <!-- Dot Navigation -->
            <div class="Events-dot-container">
              <span
                v-for="(slide, index) in EventsSlides"
                :key="index"
                class="Events-dot"
                :class="{ active: index === EventsCurrentSlide }"
                @click="EventsGoToSlide(index)"
              ></span>
            </div>
          </div>
          <!-- 랭킹 -->
          <div class="ranking">
            <div class="r_title">
              <h3>랭킹({{ currentRanking === "male" ? "남" : "여" }})</h3>
              <div class="direct">
                <img
                  src="../../img/Group 686leftarrow.png"
                  @click="prevRanking"
                  class="ranking-btn left"
                  alt="Previous"
                />
                <img
                  src="../../img/Group 687rightarrow.png"
                  @click="nextRanking"
                  class="ranking-btn right"
                  alt="Next"
                />
              </div>
            </div>
            <table v-if="currentRanking === 'male'">
              <thead>
                <tr>
                  <th
                    v-for="(header, index) in tableHeaders"
                    :key="index"
                    class="pretendard-medium-white-18px"
                  >
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, rowIndex) in maleTableData" :key="rowIndex">
                  <td v-for="(cell, cellIndex) in row" :key="cellIndex">
                    <div v-if="cellIndex === 1" class="cell-with-image">
                      <!-- 이미지와 텍스트를 포함한 셀 -->
                      <img
                        class="layer_1-2"
                        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/layer-1-1.svg"
                        alt="Layer_1"
                      />
                      <span>{{ cell }}</span>
                    </div>
                    <div v-else>
                      {{ cell }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table v-else>
              <thead>
                <tr>
                  <th
                    v-for="(header, index) in tableHeaders"
                    :key="index"
                    class="pretendard-medium-white-18px"
                  >
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, rowIndex) in femaleTableData" :key="rowIndex">
                  <td v-for="(cell, cellIndex) in row" :key="cellIndex">
                    <div v-if="cellIndex === 1" class="cell-with-image">
                      <!-- 이미지와 텍스트를 포함한 셀 -->
                      <img
                        class="layer_1-2"
                        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/layer-1-1.svg"
                        alt="Layer_1"
                      />
                      <span>{{ cell }}</span>
                    </div>
                    <div v-else>
                      {{ cell }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="overlap-group7-1">
        <div class="frame-7356">
          <div class="frame-7358">
            <div class="frame-797">
              <div class="frame-7347">
                <div
                  class="text-2-18 valign-text-middle pretendard-bold-log-cabin-38px"
                >
                  베스트 스윙
                </div>
                <p
                  class="text-2-19 valign-text-middle pretendard-regular-normal-log-cabin-18px"
                >
                  레저로 회원들의 베스트 스윙 영상!
                </p>
              </div>
              <div
                class="text-2-19 valign-text-middle pretendard-regular-normal-log-cabin-18px"
                @click="toGoSwingVideolist"
              >
                바로가기
              </div>
            </div>
            <div class="frame-7346">
              <div class="best-slide-container">
                <div
                  class="best-slider-wrapper"
                  :style="{
                    transform: `translateX(-${
                      currentSlideIndex * (100 / itemsPerSlide)
                    }%)`,
                  }"
                >
                  <group688
                    v-for="(item, index) in visibleGroup688Items"
                    :key="index"
                    :image6="item.image6"
                    :text="item.text"
                    :className="item.className"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="overlap-group4-2" @click="prevSlide">
          <div class="ellipse-10-2"></div>
          <img
            class="vector-5-4"
            src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-5-5.svg"
            alt="Vector 5"
          />
        </div>
        <div class="group-693-1" @click="nextSlide">
          <div class="overlap-group5-1">
            <div class="ellipse-10-3"></div>
            <img
              class="vector-5-5"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-5-6.svg"
              alt="Vector 5"
            />
          </div>
        </div>
      </div>
      <div class="frame-7357-2">
        <div class="frame-797">
          <div class="frame-73-10">
            <div
              class="text-2-18 valign-text-middle pretendard-bold-log-cabin-38px"
            >
              코스 소개
            </div>
            <div
              class="text-2-19 valign-text-middle pretendard-regular-normal-log-cabin-18px"
            >
              레저로만의 다양한 코스들을 만나세요!
            </div>
          </div>
          <div
            class="text-2-19 valign-text-middle pretendard-regular-normal-log-cabin-18px"
            @click="toGoCourselist"
          >
            바로가기
          </div>
        </div>
        <div class="frame-7355-1">
          <div class="courses-grid">
            <div
              v-for="(course, index) in courses"
              :key="index"
              :class="['frame-769-2-1', course.className || '']"
            >
              <div
                class="group-763-3"
                :style="{ 'background-image': 'url(' + course.group763 + ')' }"
              ></div>
              <div class="frame-7683-3">
                <div class="frame-7759">
                  <h1
                    class="text-28-3 valign-text-middle pretendard-bold-log-cabin-24px"
                  >
                    {{ course.courseName }}
                  </h1>
                  <div class="group-767-1">
                    <div
                      class="frame-7757-1 pretendard-regular-normal-granite-gray-16px"
                    >
                      <div class="text-28-4">{{ course.holeInfo }}</div>
                      <div class="rectangle-50926-1"></div>
                      <div class="text-28-4">{{ course.courseDetails }}</div>
                      <div class="rectangle-50926-1"></div>
                      <div class="text-28-4">{{ course.region }}</div>
                    </div>
                    <div class="frame-7758-2">
                      <div class="text-1609">코스난이도</div>
                      <!-- 별점 표시 -->
                      <div class="rating-stars">
                        <span
                          v-for="star in 5"
                          :key="star"
                          :class="
                            star <= course.difficulty ? 'red-star' : 'gray-star'
                          "
                        >
                          ★
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="frame-7369">
        <div class="s_title">
          <div
            class="text-2-18 valign-text-middle pretendard-bold-log-cabin-38px"
          >
            전국 매장 안내
          </div>
          <span class="text-2-19 valign-text-middle pretendard-regular-normal-log-cabin-18px">레저로 스크린파크골프 전국 매장 안내</span>
        </div>
        <div class="s_bg">
          <div class="s_image">
            <div class="image_title">
              <span class="valign-text-middle pretendard-medium-white-20px">{{
                hoveredStore.title
              }}</span>
            </div>
            <img :src="hoveredStore.image" alt="Store Image" />
          </div>
          <div class="s_location">
            <div class="s_location_title">
              <span  class="text-2309 valign-text-middle pretendard-bold-log-cabin-24px">전국 매장 리스트</span>
              <div class="s_direct">
                <img
                  src="../../img/Group 686leftarrow.png"
                  class="ranking-btn left"
                  alt="Previous"
                />
                <img
                  src="../../img/Group 687rightarrow.png"
                  class="ranking-btn right"
                  alt="Next"
                />
              </div>
            </div>
            <table>
              <thead>
                <tr
                  v-for="(row, rowIndex) in storeData"
                  :key="rowIndex"
                  @mouseover="setHoveredStore(row)"
                  :class="{
                    'first-row': rowIndex === 0,
                    'sixth-row': rowIndex === 5,
                  }"
                >
                  <div class="ellipse-11-2"></div>
                  <td
                    v-for="(cell, cellIndex) in row"
                    :key="cellIndex"
                    :class="{
                      'pretendard-medium-log-cabin-18px ': cellIndex === 0,
                      'pretendard-regular-normal-mountain-mist-16px':
                        cellIndex === 1,
                    }"
                  >
                    {{ cell }}
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Group688 from "./Group688";
import XFooter from "./XFooter";
export default {
  name: "Home",
  components: {
    Header,
    Group688,
    XFooter,
  },
  props: [
    "date",
    "text2326",
    "text2327",
    "text2283",
    "text2284",
    "text2285",
    "image6",
    "group6881Props",
    "group6921Props",
    "group6922Props",
    "group6882Props",
    "xFooterProps",
  ],
  data() {
    return {
      images: [
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/mask-group-97.png",
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/mask-group-97.png",
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/mask-group-97.png",
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/mask-group-97.png",
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/mask-group-97.png",
      ],
      EventsSlides: [
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/rectangle-509196-1.png",
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/rectangle-509196-1.png",
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/rectangle-509196-1.png",
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/rectangle-509196-1.png",
        "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/rectangle-509196-1.png",
      ],
      storeImages: {
        "서울 영등포 디지털동행플라자":
          "https://cdn.imweb.me/upload/S202202098214fa416a361/4b60a6b8e3461.png",
        "레저로 파그골프":
          "https://previews.123rf.com/images/nongamt/nongamt1412/nongamt141200008/34469375-%EA%B3%A8%ED%94%84-%ED%99%9C%EB%8F%99.jpg",
        "김천 레저로 파크골프아카데미":
          "https://res.heraldm.com/content/image/2022/07/01/20220701000690_0.jpg",
        "레저로 파크골프":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZTKYWPUg9rsGkedfri1PiC9UAkdkzrlK3Q&s",
        "레저 파그골프":
          "https://previews.123rf.com/images/chatree12/chatree121210/chatree12121000089/15977152-%EA%B3%A8%ED%94%84%EB%A5%BC-%EB%8B%AB%EB%8B%A4.jpg",
        "저로 파그골프":
          "https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2021/09/PS21090100007.jpg",
      },
      storeData: [
        ["서울 영등포 디지털동행플라자", "계양구 아나지로 524-1"],
        ["레저로 파그골프", "계양구 아나지로 524-1"],
        ["김천 레저로 파크골프아카데미", "계양구 아나지로 524-1"],
        ["레저로 파크골프", "계양구 아나지로 524-1"],
        ["레저 파그골프", "계양구 아나지로 524-1"],
        ["저로 파그골프", "계양구 아나지로 524-1"],
      ],
      currentRanking: "male",
      tableHeaders: ["순위", "닉네임", "등급", "최고성적"],
      maleTableData: [
        ["1", "서울 레지로 파크", "마스터", "-24"],
        ["2", "서울 레지로 파크", "마스터", "-24"],
        ["3", "서울 레지로 파크", "마스터", "-24"],
        ["4", "서울 레지로 파크", "마스터", "-24"],
        ["5", "서울 레지로 파크", "마스터", "-24"],
      ],
      femaleTableData: [
        ["1", "서울 레지로 파크", "마스터", "-24"],
        ["2", "서울 나라라 파크", "마스터", "-24"],
        ["3", "서울 레지로 파크", "마스터", "-24"],
        ["4", "서울 레지로 파크", "마스터", "-24"],
        ["5", "서울 레지로 파크", "마스터", "-24"],
      ],
      notices: [
        {
          text: "2024년 06월 25일 대회 개최 1",
          date: "2024-12-23",
        },
        {
          text: "2024년 06월 25일 대회 개최 2",
          date: "2024-11-10",
        },
        {
          text: "2024년 06월 25일 대회 개최 3",
          date: "2024-10-05",
        },
        {
          text: "2024년 06월 25일 대회 개최 4",
          date: "2024-09-01",
        },
        {
          text: "2024년 06월 25일 대회 개최 5",
          date: "2024-08-15",
        },
      ],
      courses: [
        {
          group763:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-11@2x.png",
          courseName: "벨라스톤",
          holeInfo: "18홀",
          region: "경상도",
          courseDetails: "해돋이, 해넘이",
          difficulty: 4, // 난이도 4점
        },
        {
          group763:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-11@2x.png",
          courseName: "파인힐",
          holeInfo: "9홀",
          region: "충청도",
          courseDetails: "숲속 코스",
          difficulty: 2, // 난이도 2점
        },
        {
          group763:
            "https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/image-1-11@2x.png",
          courseName: "솔밭힐즈",
          holeInfo: "18홀",
          region: "강원도",
          courseDetails: "해안 코스",
          difficulty: 5, // 난이도 5점
        },
      ],
      group688Items: [
        { image6: require("../../img/image-5@2x.png") }, // 이미지 경로를 require로 감쌉니다.
        { image6: require("../../img/image-5@2x.png") },
        { image6: require("../../img/image-5@2x.png") },
        { image6: require("../../img/image-5@2x.png") },
        { image6: require("../../img/image-5@2x.png") },
        { image6: require("../../img/image-5@2x.png") },
        { image6: require("../../img/image-5@2x.png") },
        { image6: require("../../img/image-5@2x.png") },
      ],
      currentSlideIndex: 0,
      itemsPerSlide: 4, //
      swingSlideInterval: null, // 자동 슬라이드를 위한 변수 이름 변경
      currentTextIndex: 0,
      hoveredStore: { title: "", image: "" },
      currentImageIndex: 0,
      EventsCurrentSlide: 0,
      currentNoticeIndex: 0, // 현재 표시 중인 공지사항의 인덱스
      EventsInterval: null,
      interval: null,
    };
  },
  computed: {
    currentText() {
      return this.notices[this.currentNoticeIndex].text;
    },
    currentDate() {
      return this.notices[this.currentNoticeIndex].date;
    },
    visibleGroup688Items() {
      // Return all available items
      return this.group688Items;
    },
  },
  mounted() {
    this.startSlideshow(); // Start the slideshow on component mount
    this.startEventsSlideshow(); // 슬라이드쇼 자동 실행
    if (this.storeData.length > 0) {
      this.setHoveredStore(this.storeData[0]);
    }
    this.startAutoSlide();
    this.startSwingSlide();
  },
  methods: {
    toGoSwingVideolist() {
      this.$router.push({ path: "/myswingvideos-list" });
    },
    toGoCourselist() {
      this.$router.push({ path: "/course-list" });
    },
    toGoEventList() {
      this.$router.push({ path: "/events-list" });
    },
    nextImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    },
    startSlideshow() {
      this.interval = setInterval(this.nextImage, 3000); // 3초마다 슬라이드 변경
    },
    restartSlideshow() {
      clearInterval(this.interval); // 기존 타이머를 초기화
      this.startSlideshow(); // 슬라이드쇼 재시작
    },
    startEventsSlideshow() {
      this.EventsInterval = setInterval(this.EventsNextSlide, 3000);
    },
    stopEventsSlideshow() {
      clearInterval(this.EventsInterval);
    },
    EventsNextSlide() {
      this.EventsCurrentSlide =
        (this.EventsCurrentSlide + 1) % this.EventsSlides.length;
    },
    EventsPrevSlide() {
      this.EventsCurrentSlide =
        (this.EventsCurrentSlide - 1 + this.EventsSlides.length) %
        this.EventsSlides.length;
    },
    EventsGoToSlide(index) {
      this.EventsCurrentSlide = index;
    },
    setHoveredStore(store) {
      this.hoveredStore.title = store[0];
      this.hoveredStore.image =
        this.storeImages[store[0]] || "https://via.placeholder.com/400";
    },
    nextRanking() {
      this.currentRanking = this.currentRanking === "male" ? "female" : "male";
    },
    prevRanking() {
      this.currentRanking =
        this.currentRanking === "female" ? "male" : "female";
    },

    startAutoSlide() {
      this.interval = setInterval(this.nextNotice, 3000); // 3초마다 공지사항이 자동으로 넘어가도록 설정
    },
    stopAutoSlide() {
      clearInterval(this.interval); // 자동 슬라이드 정지
    },
    nextNotice() {
      // 공지사항의 인덱스를 증가시키고 마지막 공지 후 처음으로 돌아가도록 설정
      if (this.currentNoticeIndex < this.notices.length - 1) {
        this.currentNoticeIndex++;
      } else {
        this.currentNoticeIndex = 0; // 마지막 공지 이후 첫 번째로 돌아감
      }
    },
    prevNotice() {
      // 공지사항의 인덱스를 감소시키고 첫 공지 이전에 마지막으로 돌아가도록 설정
      if (this.currentNoticeIndex > 0) {
        this.currentNoticeIndex--;
      } else {
        this.currentNoticeIndex = this.notices.length - 1; // 첫 공지 이전 마지막으로 돌아감
      }
    },
    nextSlide() {
      // If there are more items to show, move the index by 1
      if (this.currentSlideIndex < this.group688Items.length - 4) {
        // 4 items are visible
        this.currentSlideIndex++;
      } else {
        this.currentSlideIndex = 0; // Loop back to the first slide
      }
    },
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      } else {
        this.currentSlideIndex = this.group688Items.length - 4; // Go to the last group of 4
      }
    },
      startSwingSlide() {
      // 3초마다 nextSlide 메소드를 호출하여 슬라이드 전환
      this.swingSlideInterval = setInterval(this.nextSlide, 3000);
    },
  },
  beforeDestroy() {
    clearInterval(this.interval); // 컴포넌트가 파괴될 때 타이머 제거
    this.stopEventsSlideshow();
    this.stopAutoSlide();
    clearInterval(this.swingSlideInterval);
  },
};
</script>

<style>
.main-2 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  height: 3875px;
  overflow: hidden;
  position: relative;
  width: 1920px;
}

.slide-container {
  position: relative;
  width: 100%;
  height: 700px;
  overflow: hidden;
}

.slide-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide-item {
  min-width: 100%;
  height: 100%;
}

.slide-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateY(-100px); /* translateY로 위로 20px 이동 */
}

/* Text Overlay for the Slide */
.slide-text-overlay {
  position: absolute;
  top: 30%;
  left: 12%;
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  z-index: 10;
}

.slide-text-overlay h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.slide-text-overlay p {
  font-size: 1.2rem;
}

/* Slide Indicator */
.slide-indicator {
  position: absolute;
  bottom: 100px;
  left: 230px;
  color: white;
  font-size: 1.5rem;
  z-index: 10;
}

/* Progress Bar */
.progress-bar {
  position: absolute;
  bottom: 60px;
  left: 12%;
  width: 75%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.5);
}

.progress {
  height: 100%;
  background-color: white;
  transition: width 0.5s ease-in-out;
}
.text-2324 {
  height: 17px;
  letter-spacing: -1.2px;
  line-height: normal;
  min-width: 28px;
  white-space: nowrap;
}

/* Navigation Arrows */
.left-arrow,
.right-arrow {
  right: 240px;
  position: absolute;
  bottom: 80px; /* 슬라이드 인디케이터와 같은 높이 */
  font-size: 1.5rem;
  color: white;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.left-arrow {
  right: 265px;
}
.span0 {
  letter-spacing: -0.29px;
  margin-bottom: 60px;
}

.span1-85 {
  letter-spacing: -0.16px;
}

.text-2322 {
  align-self: stretch;
  color: var(--blackwhitewhite);
  font-family: var(--font-family-pretendard-extrabold);
  font-size: 60px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 70px;
  margin-bottom: 60px;
  position: relative;
}

.text-2323 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 25px;
  position: relative;
}

/* 여기까지 슬라이드  */
/* 공지사항 */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(20px); /* 텍스트가 위아래로 슬라이드되도록 설정 */
}
.frame-7383 {
  align-items: flex-start;
  background-color: var(--cultured-pearl);
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-color: var(--celeste);
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 80px;
  padding: 30px 260px;
  position: relative;
  width: 1920px;
}

.frame-7382 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 1400px;
}

.frame-7381-1 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  position: relative;
}

.frame-7379-1 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  position: relative;
}

.vector-191 {
  height: 20px;
  position: relative;
  width: 17px;
}

.text-2281 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.frame-7380-1 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 30px;
  position: relative;
}

.date-24 {
  position: absolute;
  left: 1000px; /* 부모 요소로부터 1200px 떨어진 지점에 고정 */
  top: 0; /* 원하는 높이에 배치 */
  letter-spacing: 0;
  line-height: 80%;
  margin-top: -1px;
  white-space: nowrap;
  width: fit-content;
}

.frame-7378-container {
  display: flex;
  align-items: center;
  justify-content: flex-end; /* 이미지들을 오른쪽으로 정렬 */
  gap: 15px;
}

.frame-7378 {
  margin-right: 0px; /* 이미지를 오른쪽에 더 붙이기 위해 마진 값을 0으로 설정 */
  position: relative;
  width: 14px;
}
.frame-7388 {
  align-items: center;
  display: inline-flex;
  gap: 81px;
  padding: 100px 260px;
  position: relative;
}

.frame-7389 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 50px;
  position: relative;
}

.frame-738 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 675px;
}

.group-681-1 {
  height: 335px;
  margin-right: -2px;
  position: relative;
  width: 677px;
}

.overlap-group-97 {
  align-items: center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 335px;
  padding: 26.6px 0;
  position: relative;
  width: 675px;
}

.text-2296 {
  color: var(--blackwhitewhite);
  font-family: var(--font-family-pretendard-semibold);
  font-size: var(--font-size-xxxxxl);
  font-weight: 600;
  height: 24px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 218px;
  text-align: center;
  white-space: nowrap;
  width: 447px;
}
/* 이벤트 */
.Events-slide-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.Events-slide-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.Events-slide-item {
  min-width: 100%;
  height: 100%;
}

.Events-slide-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Dot Navigation */
.Events-dot-container {
  position: absolute;
  bottom: 5%;
  left: 40%;
  text-align: center;
  margin-top: 10px;
}

.Events-dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

.Events-dot.active {
  background-color: #333;
}

/* Arrows */
.event-arrows {
  position: absolute;
  top: 5%;
  right: 10px;
  display: flex;
  gap: 10px;
  transform: translateY(-50%);
}

.Events-left-arrow,
.Events-right-arrow {
  cursor: pointer;
  font-size: 24px;
  user-select: none;
}
/*  여기까지 이벤트 */
.best-slide-container {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.best-slider-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
  gap: 40px;
  width: calc(100% + 40px);
}

.group688 {
  width: calc(25% - 30px);
  flex: 0 0 calc(25% - 30px);
  box-sizing: border-box;
  padding: 10px;
}
.text-container-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 45px;
  min-height: 289px;
  width: 108px;
}

.text-2304 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 7.05px;
  text-align: center;
  /* width: 50px; */
}

.text-2305 {
  height: 231px;
  letter-spacing: 0;
  line-height: 55px;
  width: 108px;
}

.line-5-3 {
  height: 1px;
  left: -1px;
  position: absolute;
  top: 114px;
  width: 675px;
}

.line-7-3 {
  height: 1px;
  left: -1px;
  position: absolute;
  top: 224px;
  width: 675px;
}

.line-6-3 {
  height: 1px;
  left: -1px;
  position: absolute;
  top: 168px;
  width: 675px;
}

.line-8-3 {
  height: 1px;
  left: -1px;
  position: absolute;
  top: 278px;
  width: 675px;
}

.overlap-group7-1 {
  height: 678px;
  margin-left: -2px;
  margin-top: 2px;
  position: relative;
  width: 1920px;
}

.frame-7356 {
  align-items: flex-start;
  background-color: var(--cultured-pearl);
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  left: 0;
  padding: 100px 258px;
  position: absolute;
  top: 0;
  width: 1920px;
}

.frame-7358 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-797 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.frame-7347 {
  align-items: flex-end;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  justify-content: flex-end;
  position: relative;
}

.text-2-18 {
  letter-spacing: -1.9px;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.text-2-19 {
  letter-spacing: -0.9px;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7346 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 40px;
  position: relative;
  width: 100%;
}

.overlap-group4-2 {
  border-radius: 35px;
  height: 70px;
  left: 226px;
  position: absolute;
  top: 330px;
  width: 70px;
}

.ellipse-10-2 {
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--celeste);
  border-radius: 35px;
  height: 70px;
  left: 0;
  position: absolute;
  top: 0;
  transform: rotate(-180deg);
  width: 70px;
}

.vector-5-4 {
  height: 16px;
  left: 31px;
  position: absolute;
  top: 27px;
  width: 9px;
}

.group-693-1 {
  align-items: flex-end;
  display: flex;
  height: 70px;
  left: 1628px;
  min-width: 70px;
  position: absolute;
  top: 331px;
  transform: rotate(-180deg);
}

.overlap-group5-1 {
  border-radius: 35px;
  height: 70px;
  margin-bottom: 0;
  position: relative;
  width: 70px;
}

.ellipse-10-3 {
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--celeste);
  border-radius: 35px;
  height: 70px;
  left: 0;
  position: absolute;
  top: 0;
  transform: rotate(180deg);
  width: 70px;
}

.vector-5-5 {
  height: 16px;
  left: 31px;
  position: absolute;
  top: 27px;
  transform: rotate(180deg);
  width: 9px;
}

.frame-7357-2 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 1px;
  padding: 100px 258px;
  position: relative;
  width: 1920px;
}

.frame-73-10 {
  align-items: flex-end;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;
}

.frame-7355-1 {
  align-items: center;
  display: flex;
  gap: 40px;
  height: 401px;
  position: relative;
  width: 1400px;
}

.group-698 {
  height: 401px;
  margin-right: -4px;
  position: relative;
  width: 444px;
}

.overlap-group3-37 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--celeste);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  min-height: 401px;
  width: 440px;
}

.image-6-1 {
  height: 250px;
  margin-left: -1px;
  margin-top: -1px;
  object-fit: cover;
  width: 440px;
}

.text-2293 {
  height: 17px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 40.25px;
  margin-top: 33px;
  width: 148px;
}

.overlap-group-99 {
  height: 10px;
  margin-left: 42px;
  margin-top: 25px;
  position: relative;
  width: 193px;
}

.text-2292 {
  height: 10px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 193px;
}

.line-9-3 {
  height: 8px;
  left: 37px;
  position: absolute;
  top: 1px;
  width: 1px;
}

.line-10-2 {
  height: 8px;
  left: 140px;
  position: absolute;
  top: 1px;
  width: 1px;
}

.flex-row-87 {
  align-items: center;
  display: flex;
  gap: 14px;
  height: 15px;
  margin-left: 42px;
  margin-top: 10px;
  min-width: 161px;
  position: relative;
}

.text-2294 {
  height: 10px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 1px;
  min-width: 64px;
  white-space: nowrap;
}

.frame-7369 {
  align-items: flex-start;
  background-color: var(--cultured-pearl);
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 1px;
  padding: 100px 258px;
  position: relative;
  width: 1920px;
}
/* 코스 소개 */
.rating-stars {
  display: flex;
  gap: 3px;
}

.red-star {
  color: #d30f1a;
}

.gray-star {
  color: #ddd;
}

.courses-grid {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 413px;
  width: 100%;
}
.courses-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1920px;
}

.frame-7763 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto);
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 30px;
  padding: 40px;
  position: relative;
  width: 1400px;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개의 열 */
  grid-template-rows: repeat(2, auto); /* 2개의 행 */
  gap: 40px; /* 코스 사이의 간격 */
}
.group-763-3 {
  background-position: 50% 50%;
  background-size: cover;
  height: 250px;
  position: relative;
  width: 440px;
}

.frame-7683-3 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--blackwhitewhite);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-left-style: solid;
  border-left-width: 1px;
  border-radius: 0px 0px 20px 20px;
  border-right-style: solid;
  border-right-width: 1px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  padding: 35px 30px;
  position: relative;
  width: 100%;
}

.frame-7759 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 207px;
}

.text-28-3 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.group-767-1 {
  height: 41px;
  position: relative;
  width: 207px;
}

.frame-7757-1 {
  align-items: flex-end;
  display: flex;
  gap: 10px;
  left: 0;
  position: absolute;
  top: 0;
  width: 207px;
}

.text-28-4 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.rectangle-50926-1 {
  background-color: var(--granite-gray);
  height: 10px;
  position: relative;
  top: -5px;
  width: 1px;
}
.pagination-controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.page-number.active {
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination-arrow {
  cursor: pointer;
}

.pagination-arrow.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-arrow.flipped {
  transform: rotate(180deg);
}
.frame-7758-2 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  margin-right: -78px;
  position: absolute;
  top: 30px;
}
/* 전국매장안내 */
.ellipse-11-2 {
  line-height: 80%;
  border: 3px solid;
  border-color: var(--greygrey-900);
  border-radius: 6px;
  height: 12px;
  position: relative;
  margin-left: 30px;
  width: 12px;
}

.s_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.s_title h3 {
  font-size: 38px;
  line-height: 80%;
  font-weight: 700;
}

.s_title span {
  flex-grow: 1;
  /* 나머지 공간을 차지하도록 */
  margin-top: 20px;
  margin-left: 12px;
}

.s_bg {
  display: flex;
  width: 95%;
  justify-content: space-between;
}

.s_location {
  position: relative;
  margin-left: 50px;
}

.s_location table {
  border: 1px solid #ccc;
  width: 660px;
  border-collapse: separate; /* 셀 분리 */
  border-spacing: 0; /* 셀 간격 없음 */
  border-radius: 15px; /* 테이블 모서리 둥글게 */
  overflow: hidden; /* 테두리 밖 내용 숨기기 */
  font-size: 18px;
  margin-top: 5px;
  height: 360px;
}

.first-row td {
  padding-top: 30px !important;
}

.sixth-row td {
  padding-bottom: 30px !important;
}

.s_location table td {
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  line-height: 70%;
  font-size: 18px;
  background-color: #fff;
}
.s_location table tr {
  background-color: #fff;
}
.s_title span {
  font-size: 18px;
}

.s_image img {
  width: 675px;
  border-radius: 20px;
  height: 385px;
}

.s_image {
  position: relative;
  height: 385px;
}

.image_title {
  position: absolute;
  bottom: 0;
  width: 675px;
  height: 75px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.s_location_title {
  display: flex;
  justify-content: space-between;
}

.s_location_title span {
  font-size: 24px;
  font-weight: 700;
  line-height: 100%;
}

.s_direct {
  position: absolute;
  right: 0;
  display: flex;
  gap: 20px;
}

.s_direct img {
  width: 12px;
}
/* 랭킹 */
.ranking {
  width: 675px;
  font-weight: 400;
  overflow-x: auto;
}

.r_title h3 {
  font-size: 24px;
  line-height: 100%;
  font-weight: 700;
}

.r_title {
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
}

.ranking table {
  width: 675px;
  border: 1px solid #cccccc;
  border-radius: 20px;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
}

.ranking th,
.ranking td {
  text-align: center;
  border-bottom: 0.5px solid #cccccc;
}

.ranking th {
  background-color: #d30f1a;
  color: #fff;
  padding: 20px 0px;
}

.cell-with-image {
  display: flex; /* 이미지들을 수평으로 배치 */
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 100%;
}

.cell-with-image img {
  width: 26px;
  height: 26px;
  object-fit: contain; /* 이미지 크기 맞추기 */
  vertical-align: middle; /* 이미지 수직 정렬 */
}

.cell-with-image span {
  line-height: 54px; /* 이미지 크기와 일치 */
}

.direct img {
  margin-left: 10px;
}
</style>
