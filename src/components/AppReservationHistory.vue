
<template>
  <div class="container-center-horizontal">
    <div class="reservationhistory-2 screen">
      <frame7740
        :frame77361Props="frame7740Props.frame77361Props"
        :frame77362Props="frame7740Props.frame77362Props"
        :frame77363Props="frame7740Props.frame77363Props"
        :frame77364Props="frame7740Props.frame77364Props"
      />
      <div class="flex-col-8">
        <frame7706 :className="frame7706Props.className" />
        <frame72912 :text149="frame72912Props.text149" :className="frame72912Props.className" />
        <div class="frame-8137">
          <div class="text-552 valign-text-middle pretendard-bold-mine-shaft-18px">{{ text552 }}</div>
          <div class="frame-8040-2">
            <frame76732 :text473="frame76732Props.text473" />
            <div class="frame-7674-11">
              <div class="text-554 valign-text-middle pretendard-regular-normal-granite-gray-14px">{{ text554 }}</div>
            </div>
            <frame76712 :text555="frame76712Props.text555" />
          </div>
          <div class="frame-7929-1">
            <div class="frame-79-2">
              <div class="frame-7925-1">
                <div class="frame-7301-3">
                  <div class="frame-7298-1" :style="{ 'background-image': 'url(' + frame72981 + ')' }"></div>
                  <div class="frame-7922-2">
                    <div class="frame-7308-1">
                      <div class="frame-7917-1">
                        <div class="group-33601-1"><group33600 /></div>
                        <div class="text-556 valign-text-middle">{{ text556 }}</div>
                      </div>
                    </div>
                    <frame7921 />
                  </div>
                </div>
                <div class="frame-7923-4">
                  <div class="frame-7926-1">
                    <frame7923 :text_Label="frame79231Props.text_Label" />
                    <frame7923 :text_Label="frame79232Props.text_Label" :className="frame79232Props.className" />
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-79-2">
              <div class="frame-7925-1">
                <div class="frame-7301-3">
                  <div class="frame-7298-1" :style="{ 'background-image': 'url(' + frame72982 + ')' }"></div>
                  <div class="frame-7922-1">
                    <div class="frame-7308-1">
                      <div class="frame-7917-1">
                        <img
                          class="lets-iconscheck-fill-1"
                          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/lets-icons-check-fill-1.svg"
                          alt="lets-icons:check-fill"
                        />
                        <div class="text-563 valign-text-middle">{{ text563 }}</div>
                      </div>
                    </div>
                    <frame7921 />
                  </div>
                </div>
                <frame79232 :frame7923Props="frame792321Props.frame7923Props" />
              </div>
            </div>
            <div class="frame-79-2">
              <div class="frame-7925-1">
                <div class="frame-7301-3">
                  <div class="frame-7298-1" :style="{ 'background-image': 'url(' + frame72983 + ')' }"></div>
                  <div class="frame-7922-1">
                    <div class="frame-7308-1">
                      <div class="frame-7917-2">
                        <group33600 :className="group33600Props.className" />
                        <div class="text-570 valign-text-middle">{{ text570 }}</div>
                      </div>
                    </div>
                    <frame7921 />
                  </div>
                </div>
                <frame79232 :frame7923Props="frame792322Props.frame7923Props" />
              </div>
            </div>
            <frame7667
              :group6681Props="frame7667Props.group6681Props"
              :group6682Props="frame7667Props.group6682Props"
            />
          </div>
        </div>
        <div class="overlap-group3-8">
          <div class="flex-row-14">
            <img class="lezuro_logo_white-2-35" :src="lezuro_Logo_White2" alt="Lezuro_logo_white 2" />
            <div class="frame-7500-49">
              <div class="group-729-49">
                <img
                  class="vector-109"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-25.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-730-49" :style="{ 'background-image': 'url(' + group730 + ')' }">
                <img
                  class="vector-110"
                  src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-26.svg"
                  alt="Vector"
                />
              </div>
              <div class="group-731-49"><img class="group-728-49" :src="group728" alt="Group 728" /></div>
            </div>
          </div>
          <div class="flex-row-15">
            <div class="text-549 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text549 }}</div>
            <img
              class="line-49"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 3"
            />
            <div class="text-55-1 valign-text-middle pretendard-bold-white-12px">{{ text550 }}</div>
            <img
              class="line-49"
              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/line-3-3.svg"
              alt="Line 4"
            />
            <div class="text-55-1 valign-text-middle pretendard-regular-normal-white-12px-2">{{ text551 }}</div>
          </div>
          <p class="x-74 pretendard-regular-normal-white-12px">
            <span class="pretendard-regular-normal-white-12px">{{ spanText1 }}</span
            ><span class="span1-49 pretendard-regular-normal-white-12px">{{ spanText2 }}</span
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
import Frame76732 from "./Frame76732";
import Frame76712 from "./Frame76712";
import Group33600 from "./Group33600";
import Frame7921 from "./Frame7921";
import Frame7923 from "./Frame7923";
import Frame79232 from "./Frame79232";
import Frame7667 from "./Frame7667";
export default {
  name: "AppReservationHistory",
  components: {
    Frame7740,
    Frame7706,
    Frame72912,
    Frame76732,
    Frame76712,
    Group33600,
    Frame7921,
    Frame7923,
    Frame79232,
    Frame7667,
  },
  props: [
    "text552",
    "text554",
    "frame72981",
    "text556",
    "frame72982",
    "text563",
    "frame72983",
    "text570",
    "lezuro_Logo_White2",
    "group730",
    "group728",
    "text549",
    "text550",
    "text551",
    "spanText1",
    "spanText2",
    "spanText3",
    "frame7740Props",
    "frame7706Props",
    "frame72912Props",
    "frame76732Props",
    "frame76712Props",
    "frame79231Props",
    "frame79232Props",
    "frame792321Props",
    "group33600Props",
    "frame792322Props",
    "frame7667Props",
  ],
};
</script>

<style>
.reservationhistory-2 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  gap: 180px;
  height: 1321px;
  overflow: hidden;
  position: relative;
  width: 360px;
}

.flex-col-8 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1321px;
  position: relative;
  width: 368px;
}

.frame-8137 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-right: 8px;
  margin-top: 40px;
  position: relative;
  width: 320px;
}

.text-552 {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.frame-8040-2 {
  align-items: center;
  align-self: stretch;
  display: flex;
  height: 50px;
  position: relative;
  width: 100%;
}

.frame-7674-11 {
  align-items: center;
  background-color: var(--cultured-pearl);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--celeste);
  display: flex;
  gap: 10px;
  height: 50px;
  justify-content: center;
  padding: 23px 159px;
  position: relative;
  width: 108px;
}

.text-554 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -2px;
  margin-left: -139px;
  margin-right: -139px;
  margin-top: -4px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7929-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.frame-79-2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.frame-7925-1 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--hint-of-red);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding: 10px;
  position: relative;
  width: 100%;
}

.frame-7301-3 {
  align-items: flex-start;
  align-self: stretch;
  border-radius: 20px;
  display: flex;
  flex: 0 0 auto;
  gap: 20px;
  position: relative;
  width: 100%;
}

.frame-7298-1 {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 10px;
  height: 100px;
  position: relative;
  width: 100px;
}

.frame-7922-2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  position: relative;
  width: 180px;
}

.frame-7308-1 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  margin-right: -32px;
  position: relative;
  width: 212px;
}

.frame-7917-1 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;
  position: relative;
}

.group-33601-1,
.lets-iconscheck-fill-1 {
  height: 20px;
  position: relative;
  width: 20px;
}

.text-556 {
  color: var(--slimy-green-2);
  font-family: var(--font-family-pretendard-bold);
  font-size: var(--font-size-l);
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7923-4 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.frame-7926-1 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: flex-end;
  position: relative;
  width: 300px;
}

.frame-7922-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  position: relative;
  width: 180px;
}

.text-563 {
  color: var(--torea-bay);
  font-family: var(--font-family-pretendard-bold);
  font-size: var(--font-size-l);
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7917-2 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 5px;
  justify-content: center;
  position: relative;
}

.text-570 {
  color: var(--monza);
  font-family: var(--font-family-pretendard-bold);
  font-size: var(--font-size-l);
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.overlap-group3-8 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-top: 119px;
  min-height: 310px;
  padding: 43px 20px;
  width: 360px;
}

.flex-row-14 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 145px;
  margin-top: 7px;
  min-width: 320px;
}

.lezuro_logo_white-2-35 {
  height: 32px;
  object-fit: cover;
  width: 100px;
}

.frame-7500-49 {
  align-items: center;
  display: inline-flex;
  gap: 4px;
  height: 24px;
  justify-content: flex-end;
  position: relative;
}

.group-729-49 {
  background-color: var(--red);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-109 {
  height: 7px;
  left: 9px;
  position: absolute;
  top: 7px;
  width: 6px;
}

.group-730-49 {
  background-size: 100% 100%;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.vector-110 {
  height: 9px;
  left: 7px;
  position: absolute;
  top: 7px;
  width: 9px;
}

.group-731-49 {
  background-color: var(--harlequin);
  border-radius: 11.17px;
  height: 22.35px;
  position: relative;
  width: 22.35px;
}

.group-728-49 {
  height: 9px;
  left: 6px;
  position: absolute;
  top: 7px;
  width: 10px;
}

.flex-row-15 {
  align-items: flex-end;
  display: flex;
  margin-left: 0.04px;
  margin-top: 30px;
  min-width: 248px;
}

.text-549 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  min-width: 42px;
  white-space: nowrap;
}

.line-49 {
  align-self: flex-start;
  height: 8px;
  margin-left: 10px;
  object-fit: cover;
  width: 1px;
}

.text-55-1 {
  height: 8px;
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 9px;
  min-width: 83px;
  white-space: nowrap;
}

.x-74 {
  letter-spacing: 0;
  line-height: 16.8px;
  margin-left: 0.04px;
  margin-top: 20px;
  min-height: 127px;
  text-shadow: 0px 4px 4px #00000040;
}

.span1-49 {
  text-decoration: underline;
}
</style>
