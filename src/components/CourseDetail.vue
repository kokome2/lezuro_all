<template>
  <div class="container-center-horizontal">
    <div class="coursedetails-2 screen">
        <Header />
      <x2-f-ym-mc :frame7291Props="x2FYmMcProps.frame7291Props" />
      <div class="frame-7808">
        <view :text89="viewProps.text89" :className="viewProps.className" />
        <div class="frame-7807">
          <div class="frame-7290-1"><img class="image-1-2" :src="image1" alt="image 1" /></div>
          <div class="frame-7806">
            <div class="frame-7797">
              <div class="frame-7759-1">
                <div class="frame-7785">
                  <h1 class="text-29-3 valign-text-middle pretendard-bold-log-cabin-30px">{{ text2944 }}</h1>
                  <div class="text-2945">{{ text2945 }}</div>
                </div>
              </div>
              <div class="frame-7796-1 pretendard-regular-normal-granite-gray-16px">
                <div class="text-294-1">{{ text2946 }}</div>
                <div class="rectangle-50926-2"></div>
                <div class="text-294-1">{{ text2947 }}</div>
                <div class="rectangle-50926-2"></div>
                <frame7758 :className="frame7758Props.className" :frame7345Props="frame7758Props.frame7345Props" />
              </div>
            </div>
            <div class="frame-7805">
              <div class="frame-7-33">
                <div class="text-29-4 pretendard-bold-black-24px">{{ text2949 }}</div>
                <div class="frame-7941">
                  <frame7930 :text2950="frame79301Props.text2950" :text2951="frame79301Props.text2951" />
                  <frame7930 :text2950="frame79302Props.text2950" :text2951="frame79302Props.text2951" />
                  <frame7930 :text2950="frame79303Props.text2950" :text2951="frame79303Props.text2951" />
                  <frame7930 :text2950="frame79304Props.text2950" :text2951="frame79304Props.text2951" />
                  <frame7930 :text2950="frame79305Props.text2950" :text2951="frame79305Props.text2951" />
                  <frame7930 :text2950="frame79306Props.text2950" :text2951="frame79306Props.text2951" />
                </div>
              </div>
              <div class="frame-7-33">
                <div class="text-29-4 pretendard-bold-black-24px">{{ text2962 }}</div>
                <div class="frame-7-33">
                  <div class="frame-780">
                    <div class="frame-7800">
                      <div class="frame-7799">
                        <div class="text-29-3 valign-text-middle pretendard-semi-bold-log-cabin-18px">
                          {{ text2963 }}
                        </div>
                        <div class="eter valign-text-middle pretendard-regular-normal-granite-gray-14px">
                          {{ veter }}
                        </div>
                      </div>
                      <frame7798 v-bind="frame77981Props" />
                    </div>
                    <div class="group-768-1">
                      <div class="overlap-group-108">
                        <a href="#"><img
                          class="eparrow-left-2"
                          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/ep-arrow-left-4.svg"
                          alt="ep:arrow-left"
                        /></a>
                        <div class="flex-col-41">
                          <img class="image-2-1" :src="image21" alt="image 2" />
                          <div class="address-1 valign-text-middle pretendard-semi-bold-log-cabin-18px">
                            {{ address1 }}
                          </div>
                        </div>
                        <a href="#"><img
                          class="eparrow-left-3"
                          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/ep-arrow-left-5.svg"
                          alt="ep:arrow-left"
                        /></a>
                      </div>
                    </div>
                  </div>
                  <div class="frame-780">
                    <div class="frame-7800">
                      <div class="frame-7799">
                        <div class="text-29-3 valign-text-middle pretendard-semi-bold-log-cabin-18px">
                          {{ text2964 }}
                        </div>
                        <div class="eter valign-text-middle pretendard-regular-normal-granite-gray-14px">
                          {{ meter }}
                        </div>
                      </div>
                      <frame7798 v-bind="frame77982Props" />
                    </div>
                    <div class="group-768-1">
                      <div class="overlap-group-109">
                        <a href="#"><img
                          class="eparrow-left-2"
                          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/ep-arrow-left-4.svg"
                          alt="ep:arrow-left"
                        /></a>
                        <div class="flex-col-42">
                          <img class="image-2-2" :src="image22" alt="image 2" />
                          <div class="address-1 valign-text-middle pretendard-semi-bold-log-cabin-18px">
                            {{ address2 }}
                          </div>
                        </div>
                        <a href="#"><img
                          class="eparrow-left-3"
                          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/ep-arrow-left-5.svg"
                          alt="ep:arrow-left"
                        /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import X2FYmMc from "./X2FYmMc";
import View from "./View";
import Frame7758 from "./Frame7758";
import Frame7930 from "./Frame7930";
import Frame7798 from "./Frame7798";
import XFooter from "./XFooter";
export default {
  name: "CourseDetail",
  components: {
    Header,
    X2FYmMc,
    View,
    Frame7758,
    Frame7930,
    Frame7798,
    XFooter,
  },
  props: [
    "image1",
    "text2944",
    "text2945",
    "text2946",
    "text2947",
    "text2949",
    "text2962",
    "text2963",
    "veter",
    "image21",
    "address1",
    "text2964",
    "meter",
    "image22",
    "address2",
    "x2FYmMcProps",
    "viewProps",
    "frame7758Props",
    "frame79301Props",
    "frame79302Props",
    "frame79303Props",
    "frame79304Props",
    "frame79305Props",
    "frame79306Props",
    "frame77981Props",
    "frame77982Props",
    "xFooterProps",
  ],
};
</script>

<style>
.coursedetails-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  min-height: 2838px;
  position: relative;
  width: 1920px;
}

.frame-7808 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 104px;
  position: relative;
  width: 1400px;
}

.frame-7807 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-7290-1 {
  align-self: stretch;
  height: 500px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.image-1-2 {
  height: 814px;
  left: -1px;
  object-fit: cover;
  position: absolute;
  top: -240px;
  width: 1401px;
}

.frame-7806 {
  align-items: flex-start;
  align-self: stretch;
  border: 1px solid;
  border-color: var(--alto);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 100px;
  padding: 40px;
  position: relative;
  width: 100%;
}

.frame-7797 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 322px;
}

.frame-7759-1 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 207px;
}

.frame-7785 {
  align-items: flex-end;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  justify-content: flex-end;
  position: relative;
}

.text-29-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.text-2945 {
  color: var(--granite-gray);
  font-family: var(--font-family-pretendard-medium);
  font-size: var(--font-size-xxxxl);
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7796-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;
}

.text-294-1 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.rectangle-50926-2 {
  background-color: var(--granite-gray);
  height: 10px;
  position: relative;
  width: 1px;
}

.frame-7805 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 60px;
  position: relative;
  width: 1320px;
}

.frame-7-33 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 100%;
}

.text-29-4 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.frame-7941 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 1300px;
}

.frame-780 {
  align-items: center;
  align-self: stretch;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto);
  border-radius: 20px;
  display: flex;
  flex: 0 0 auto;
  gap: 20px;
  padding: 30px;
  position: relative;
  width: 100%;
}

.frame-7800 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
}

.frame-7799 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 870px;
}

.eter {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}

.group-768-1 {
  height: 322px;
  margin-right: -2.76px;
  position: relative;
  width: 372.76px;
}

.overlap-group-108 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto);
  border-radius: 10px;
  display: flex;
  height: 322px;
  justify-content: flex-end;
  min-width: 371px;
  padding: 29.5px 13.4px;
}

.eparrow-left-2 {
  height: 24px;
  margin-bottom: 2px;
  width: 23px;
}

.flex-col-41 {
  align-items: center;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 55px;
  min-height: 253px;
  width: 184px;
}

.image-2-1 {
  height: 225px;
  margin-left: 3px;
  width: 145px;
}

.address-1 {
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 184px;
}

.eparrow-left-3 {
  height: 24px;
  margin-bottom: 2px;
  margin-left: 58px;
  width: 23px;
}

.overlap-group-109 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  border: 1px solid;
  border-color: var(--alto);
  border-radius: 10px;
  display: flex;
  height: 322px;
  justify-content: flex-end;
  min-width: 371px;
  padding: 23.5px 13.4px;
}

.flex-col-42 {
  align-items: center;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 29px;
  margin-left: 55px;
  min-height: 269px;
  width: 184px;
}

.image-2-2 {
  height: 227px;
  margin-right: 1px;
  width: 145px;
}
</style>
