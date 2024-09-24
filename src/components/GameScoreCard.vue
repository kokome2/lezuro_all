<template>
 <div class="modal-overlay" @click="closeModal">
  <div class="frame-7654 screen">
    <div class="frame-7313-1">
      <h1 class="text-2098 valign-text-middle pretendard-extra-extra-bold-log-cabin-24px">{{ text2098 }}</h1>
      <img
        class="material-symbolsclose-3"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/material-symbols-close.svg"
        alt="material-symbols:close"
        @click="closeModal"
      />
    </div>
    <div class="frame-7653">
      <div class="frame-7355">
        <div class="frame-2-6">
          <img
            class="layer_1"
            src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/layer-1.svg"
            alt="Layer_1"
          />
          <div class="text-2099 valign-text-middle pretendard-bold-log-cabin-18px">{{ text2099 }}</div>
        </div>
      </div>
      <div class="frame-7652">
        <div class="frame-7359">
          <div class="table">
            <!-- Table data rendering -->
            <div class="table-item">
              <frame73222 :text2100="frame732221Props.text2100" />
              <div class="frame-732-2">
                <div class="date-23 valign-text-middle pretendard-regular-normal-granite-gray-16px">{{ date }}</div>
              </div>
              <frame73222 :text2100="frame732222Props.text2100" />
              <div class="frame-732-2">
                <div class="text-2102 valign-text-middle pretendard-regular-normal-granite-gray-16px">
                  {{ text2102 }}
                </div>
              </div>
            </div>
            <!-- More table items here -->
            <!-- <div class="table-item">
              <frame73222 :text2100="frame732223Props.text2100" />
              <div class="frame-732-2">
                <div class="a-4 valign-text-middle pretendard-regular-normal-granite-gray-16px">{{ a }}</div>
              </div>
              <div class="frame-7324">
                <div class="text-2104 valign-text-middle pretendard-semi-bold-log-cabin-18px">{{ text2104 }}</div>
              </div>
              <div class="frame-732-2">
                <div class="number-186 valign-text-middle pretendard-regular-normal-granite-gray-16px">
                  {{ number1 }}
                </div>
              </div>
            </div> -->
            <!-- <div class="table-item">
              <frame73222 :text2100="frame732224Props.text2100" />
              <div class="frame-732-2">
                <div class="number-187 valign-text-middle pretendard-regular-normal-granite-gray-16px">
                  {{ number2 }}
                </div>
              </div>
              <div class="frame-7324">
                <div class="text-2106 valign-text-middle pretendard-semi-bold-log-cabin-18px">{{ text2106 }}</div>
              </div>
              <div class="frame-732-2">
                <div class="text-2107 valign-text-middle pretendard-regular-normal-granite-gray-16px">
                  {{ text2107 }}
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <!-- <div class="frame-7651">
          <frame7357 v-bind="frame7357Props" />
          <frame7651 :a="frame76511Props.a" :frame7357Props="frame76511Props.frame7357Props" />
          <frame7651 :a="frame76512Props.a" :frame7357Props="frame76512Props.frame7357Props" />
        </div> -->
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Frame73222 from "./Frame73222";
import Frame7357 from "./Frame7357";
import Frame7651 from "./Frame7651";

export default {
  name: "GameScoreCard",
  components: {
    Frame73222,
    Frame7357,
    Frame7651,
  },
  props: [
    "text2098",
    "text2099",
    "date",
    "text2102",
    "a",
    "text2104",
    "number1",
    "number2",
    "text2106",
    "text2107",
    "frame732221Props",
    "frame732222Props",
    "frame732223Props",
    "frame732224Props",
    "frame7357Props",
    "frame76511Props",
    "frame76512Props",
  ],
  methods: {
    closeModal() {
      this.$emit("closeModal"); // Emit close event to parent to hide the modal
    },
  },
};
</script>


<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7); /* 불투명한 블랙 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 모달을 다른 요소 위에 표시 */
}

.modal-content {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  max-width: 800px;
  position: relative;
  z-index: 1001; /* 오버레이보다 높은 z-index */
}
.frame-7654 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  padding: 40px;
  position: relative;
}

.frame-7313-1 {
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

.text-2098 {
  letter-spacing: 0;
  line-height: 33.6px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.material-symbolsclose-3 {
  height: 24px;
  position: relative;
  width: 24px;
}

.frame-7653 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.frame-7355 {
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: 10px;
  height: 70px;
  position: relative;
  width: 100%;
}

.frame-2-6 {
  align-items: center;
  display: flex;
  gap: 10px;
  height: 40px;
  position: relative;
  width: 220px;
}

.layer_1 {
  height: 26px;
  position: relative;
  width: 26.19px;
}

.text-2099 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7652 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
}

.frame-7359 {
  align-self: stretch;
  height: 150px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.table {
  align-items: flex-start;
  border: 0.5px solid;
  border-color: var(--alto);
  display: flex;
  flex-direction: column;
  position: relative;
  width: 810px;
}

.table-item {
  align-items: center;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-color: var(--alto);
  display: flex;
  height: 50px;
  position: relative;
  width: 100%;
}

.frame-732-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border-color: var(--alto);
  border-right-style: solid;
  border-right-width: 0.5px;
  display: flex;
  height: 50px;
  justify-content: center;
  position: relative;
  width: 255px;
}

.date-23,
.text-2102,
.a-4,
.text-2104,
.number-186,
.number-187,
.text-2106,
.text-2107 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}

.frame-7324 {
  align-items: center;
  background-color: var(--wild-sand);
  border-color: var(--alto);
  border-right-style: solid;
  border-right-width: 0.5px;
  display: flex;
  height: 50px;
  justify-content: center;
  position: relative;
  width: 150px;
}

.frame-7651 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}
</style>
