<template>
  <div class="container-center-horizontal">
    <div class="reservationhistory-1 screen">
      <div class="overlap-group3">
        <div class="group-33594">
          <Header />
          <x2-f-ym-mc :frame7291Props="x2FYmMcProps.frame7291Props" />
          <h1 class="text-1 valign-text-middle pretendard-bold-mine-shaft-38px">
            {{ text1 }}
          </h1>
          <div class="frame-7691">
            <div class="group-764">
              <div class="frame-7727">
                <frame7673 :text10="frame7673Props.text10" />
                <frame7674 />
                <frame7671 :text12="frame7671Props.text12" />
              </div>
            </div>
          </div>
          <img
            class="icon-parkloading-one"
            src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/icon-park-loading-one.svg"
            alt="icon-park:loading-one"
          />
          <x-footer />
        </div>
        <div class="frame-7927">
          <div class="frame-7929">
            <div class="frame-7928">
              <div class="frame-7925">
                <frame7301 />
                <div class="frame-7923">
                  <div class="frame-7922">
                    <div class="frame-7308">
                      <div class="frame-7917">
                        <div class="group-33601">
                          <div class="group-33600">
                            <img
                              class="noniconsloading-16"
                              src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/nonicons-loading-16.svg"
                              alt="nonicons:loading-16"
                            />
                          </div>
                        </div>
                        <div class="text-16 valign-text-middle">
                          {{ text16 }}
                        </div>
                      </div>
                    </div>
                    <div class="frame-7921">
                      <div class="frame-7303">
                        <div
                          class="text valign-text-middle pretendard-bold-mine-shaft-24px"
                        >
                          {{ text17 }}
                        </div>
                      </div>
                      <frame7920 />
                    </div>
                  </div>
                  <div class="frame-7926">
                    <!-- 예약 취소 버튼 -->
                    <frame7712 :text_Label="frame77121Props.text_Label" @click="openModal"/>
                    <frame7712
                      :text_Label="frame77122Props.text_Label"
                      :className="frame77122Props.className"
                    />
                  </div>
                </div>
              </div>
              <div class="frame-792">
                <frame7301 :className="frame73011Props.className" />
                <div class="frame-7923-1">
                  <div class="frame-7922">
                    <div class="frame-7308">
                      <div class="frame-7917">
                        <img
                          class="lets-iconscheck-fill"
                          src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/lets-icons-check-fill.svg"
                          alt="lets-icons:check-fill"
                        />
                        <div
                          class="text-23 valign-text-middle pretendard-bold-torea-bay-16px"
                        >
                          예약완료
                        </div>
                      </div>
                    </div>
                    <div class="frame-7921">
                      <div class="frame-7303">
                        <div
                          class="text valign-text-middle pretendard-bold-mine-shaft-24px"
                        >
                          {{ text24 }}
                        </div>
                      </div>
                      <frame7920 />
                    </div>
                  </div>
                  <frame7712
                    :text_Label="frame77123Props.text_Label"
                    :className="frame77123Props.className"
                  />
                </div>
              </div>
              <div class="frame-792">
                <frame7301 :className="frame73012Props.className" />
                <div class="frame-7923-2">
                  <div class="frame-7922">
                    <div class="frame-7308">
                      <div class="frame-7917">
                        <div class="group-33600-1">
                          <img
                            class="vector"
                            src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/vector-2.svg"
                            alt="Vector"
                          />
                        </div>
                        <div class="rectangle-509282"></div>
                      </div>
                    </div>
                    <div class="frame-7921">
                      <div class="frame-7303">
                        <div
                          class="text valign-text-middle pretendard-bold-mine-shaft-24px"
                        >
                          {{ text31 }}
                        </div>
                      </div>
                      <frame7920 />
                    </div>
                  </div>
                  <frame7712
                    :text_Label="frame77124Props.text_Label"
                    :className="frame77124Props.className"
                  />
                </div>
              </div>
            </div>
             <ReservationCancelModal
          v-if="isOpenReservationCancelModal"
          :btnGroup2Props="btnGroup2Props"
          @closeModal="closeModal"
        />
            <frame763 :frame7645Props="frame763Props.frame7645Props" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import X2FYmMc from "./X2FYmMc";
import Frame7673 from "./Frame7673";
import Frame7674 from "./Frame7674";
import Frame7671 from "./Frame7671";
import XFooter from "./XFooter";
import Frame7301 from "./Frame7301";
import Frame7920 from "./Frame7920";
import Frame7712 from "./Frame7712";
import Frame763 from "./Frame763";
import ReservationCancelModal from "./ReservationCancelModal";
export default {
  name: "ReservationHistory",
  data(){
    return {
    isOpenReservationCancelModal:false,
     btnGroup2Props: {
        text_Label: "닫기",
        text83: "확인",
      },
  }
  },
  components: {
    Header,
    X2FYmMc,
    Frame7673,
    Frame7674,
    Frame7671,
    XFooter,
    Frame7301,
    Frame7920,
    Frame7712,
    Frame763,
    ReservationCancelModal
  },
  props: [
    "text1",
    "text16",
    "text17",
    "text23",
    "text24",
    "text30",
    "text31",
    "x2FYmMcProps",
    "frame7673Props",
    "frame7671Props",
    "frame77121Props",
    "frame77122Props",
    "frame73011Props",
    "frame77123Props",
    "frame73012Props",
    "frame77124Props",
    "frame763Props",
  ],
  methods: {
    openModal(){
      this.isOpenReservationCancelModal=true;
    },
    closeModal(){
      this.isOpenReservationCancelModal=false;
    }
  },
};
</script>

<style>
.reservationhistory-1 {
  align-items: flex-start;
  background-color: var(--blackwhitewhite);
  display: flex;
  width: 1920px;
}

.overlap-group3 {
  height: 1916px;
  position: relative;
  width: 1920px;
}

.group-33594 {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 1916px;
  position: absolute;
  top: 0;
  width: 1920px;
}

.text-1 {
  align-self: flex-start;
  height: 27px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 260px;
  margin-top: 104px;
  position: relative;
  width: 140px;
}

.frame-7691 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 52px;
  position: relative;
}

.group-764 {
  height: 60px;
  position: relative;
  width: 1399.98px;
}

.frame-7727 {
  align-items: center;
  display: inline-flex;
  position: relative;
}

.icon-parkloading-one {
  height: 9px;
  margin-right: 824px;
  margin-top: 146px;
  width: 14px;
}

.frame-7927 {
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-style: solid;
  border-right-width: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  left: 261px;
  padding: 40px;
  position: absolute;
  top: 413px;
  width: 1400px;
}

.frame-7929 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-7928 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.frame-7925 {
  align-items: center;
  align-self: stretch;
  background-color: var(--hint-of-red);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  padding: 30px 40px;
  position: relative;
  width: 100%;
}

.frame-7923 {
  align-items: flex-end;
  display: flex;
  gap: 30px;
  justify-content: flex-end;
  margin-right: -4.5px;
  padding: 30px 0px 30px 30px;
  position: relative;
  width: 1049px;
}

.frame-7922 {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 10px;
  justify-content: center;
  position: relative;
}

.frame-7308 {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 212px;
}

.frame-7917 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;
  position: relative;
}

.group-33601,
.lets-iconscheck-fill {
  height: 24px;
  position: relative;
  /* width: 24px; */
}

.group-33600 {
  align-items: center;
  background-color: var(--slimy-green);
  border-radius: 9px;
  display: flex;
  height: 18px;
   left: -2px; 
  min-width: 18px;
  padding: 0 4px;
  position: relative;
  top: 5px;
}

.noniconsloading-16 {
  height: 10px;
  width: 10px;
}

.text-16 {
  color: var(--slimy-green-2);
  font-family: var(--font-family-pretendard-bold);
  font-size: var(--font-size-xxl);
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7921 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  position: relative;
  width: 100%;
}

.frame-7303 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.text {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.frame-7926 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}

.frame-792 {
  align-items: center;
  align-self: stretch;
  background-color: var(--hint-of-red);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  padding: 30px 40px;
  position: relative;
  width: 100%;
}

.frame-7923-1 {
  align-items: flex-end;
  display: flex;
  gap: 30px;
  justify-content: flex-end;
  margin-right: -2px;
  padding: 30px 0px 30px 30px;
  position: relative;
  width: 1044px;
}

.text-23 {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-7923-2 {
  align-items: flex-end;
  display: flex;
  gap: 30px;
  justify-content: flex-end;
  padding: 30px 0px 30px 30px;
  position: relative;
  width: 1034px;
}

.group-33600-1 {
  background-color: var(--monza);
  border-radius: 9px;
  height: 18px;
  position: relative;
  width: 18px;
}

.vector {
  height: 9px;
  left: 5px;
  position: absolute;
  top: 5px;
  width: 9px;
}

.rectangle-509282 {
  height: 24px;
  margin-left: -11px;
  position: relative;
  width: 24px;
}

.text-30 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: -11px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
</style>
