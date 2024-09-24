<template>
  <div class="container-center-horizontal">
    <div class="coursedetails-1 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-33">
        <frame7706 />
        <frame72912 :text149="frame72912Props.text149" />
        <div class="text-1581 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text1581 }}</div>
        <div class="frame-8174">
          <div class="frame-8173">
            <div class="frame-7290"><img class="image-1" :src="image1" alt="image 1" /></div>
            <div class="frame-7954-2">
              <div class="frame-8126">
                <div class="frame-7734-42">
                  <div class="text-1605 valign-text-middle pretendard-bold-mine-shaft-20px">{{ text1605 }}</div>
                </div>
                <div class="text-1606 valign-text-middle pretendard-regular-normal-granite-gray-16px">
                  {{ text1606 }}
                </div>
              </div>
              <div class="frame-7796 pretendard-regular-normal-granite-gray-16px">
                <div class="text-160">{{ text1607 }}</div>
                <div class="rectangle-50926"></div>
                <div class="text-160">{{ text1608 }}</div>
                <div class="rectangle-50926"></div>
                <frame7758 :frame7345Props="frame7758Props.frame7345Props" />
              </div>
            </div>
          </div>
          <div class="frame-8">
            <div class="text-16-6 valign-text-middle pretendard-medium-log-cabin-16px">{{ text1610 }}</div>
            <div class="group-33644">
              <frame8130
                :frame81271Props="frame81301Props.frame81271Props"
                :frame81272Props="frame81301Props.frame81272Props"
                :frame81273Props="frame81301Props.frame81273Props"
              />
              <frame8130
                :className="frame81302Props.className"
                :frame81271Props="frame81302Props.frame81271Props"
                :frame81272Props="frame81302Props.frame81272Props"
                :frame81273Props="frame81302Props.frame81273Props"
              />
            </div>
          </div>
          <div class="frame-8">
            <div class="frame-8023">
              <div class="text-16-6 valign-text-middle pretendard-medium-log-cabin-16px">{{ text1623 }}</div>
            </div>
            <div class="frame-8171">
              <frame8168 v-bind="frame81681Props" />
              <frame8168 v-bind="frame81682Props" />
            </div>
          </div>
        </div>
        <div class="overlap-group3-33">
          <div class="flex-row-68">
            <img class="lezuro_logo_white-2-64" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-76">
              <div class="group-729-76">
                <img
                  class="vector-170"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-10.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-76" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-171"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-11.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-76"><img class="group-728-76" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-69">
            <div class="text-1602 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1602 }}</div>
            <img
              class="line-76"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-160-1 valign-text-middle pretendard-bold-white-12px">{{ text1603 }}</div>
            <img
              class="line-76"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-160-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text1604 }}</div>
          </div>
          <p class="x-101 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-76 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
            ><span class="pretendard-regular-normal-white-12px">{{ spanText3 }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame7740 from "./Frame7740";
import Frame7706 from "./Frame7706";
import Frame72912 from "./Frame72912";
import Frame7758 from "./Frame7758";
import Frame8130 from "./Frame8130";
import Frame8168 from "./Frame8168";
export default {
  name: "AppCourseDetails",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame7758,
    Frame8130,
    Frame8168,
  },
  props: [
    "text1581",
    "image1",
    "text1605",
    "text1606",
    "text1607",
    "text1608",
    "text1610",
    "text1623",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text1602",
    "text1603",
    "text1604",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame72912Props",
    "frame7758Props",
    "frame81301Props",
    "frame81302Props",
    "frame81681Props",
    "frame81682Props",
  ],
};
</script>

<style>
.coursedetails-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 2630px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-33 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 2630px;
  position: relative;
  width: 620px;
}

.text-1581 {
  align-self: center;
  height: 13px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 260px;
  margin-top: 39px;
  min-width: 32px;
  white-space: nowrap;
}

.frame-8174 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 31px;
  position: relative;
  width: 600px;
}

.frame-8173 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 320px;
}

.frame-7290 {
  align-self: stretch;
  height: 320px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.image-1 {
  height: 448px;
  left: -154px;
  object-fit: cover;
  position: absolute;
  top: -23px;
  width: 773px;
}

.frame-7954-2 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 244px;
}

.frame-8126 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  justify-content: center;
  position: relative;
}

.frame-7734-42 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  position: relative;
}

.text-1605 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.text-1606 {
  letter-spacing: 0;
  line-height: 23px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7796 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;
}

.text-160 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.rectangle-50926 {
  background-color: var(--granite-gray);
  height: 10px;
  position: relative;
  width: 1px;
}

.frame-8 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.text-16-6 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.group-33644 {
  height: 250px;
  position: relative;
  width: 320px;
}

.frame-8023 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 6px;
  position: relative;
  width: 100%;
}

.frame-8171 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 100%;
}

.overlap-group3-33 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-top: 104px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-68 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-64 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-76 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-76 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-170 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-76 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-171 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-76 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-76 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-69 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-1602 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-76 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-160-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-101 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-76 {
  text-decoration: underline;
}
</style>
