<template>
  <div class="container-center-horizontal">
    <div class="announcementsdetails screen">
      <Header />
      <rj-zs-wi
        :frame72911Props="rJZsWIProps.frame72911Props"
        :frame72912Props="rJZsWIProps.frame72912Props"
      />
      <view :text89="viewProps.text89" :className="viewProps.className" />
      <div class="frame-7913">
        <div class="frame-7754-2">
          <div
            class="text-1934 valign-text-middle pretendard-bold-log-cabin-30px"
          >
            {{ text1934 }}
          </div>
          <div
            class="frame-7835-2 pretendard-regular-normal-mountain-mist-20px"
          >
            <div class="frame-7835-item-1 valign-text-middle">{{ date }}</div>
            <div class="rectangle-50927"></div>
            <div class="frame-7835-item-1 valign-text-middle">
              {{ text1935 }}
            </div>
            <div class="rectangle-50927"></div>
            <div class="frame-7835-item-1 valign-text-middle">
              {{ text1936 }}
            </div>
          </div>
        </div>
        <div class="frame-7836-6 pretendard-light-granite-gray-18px">
      <p class="lorem-ipsum-dolor-si-7 valign-text-middle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
        quaerat voluptatem.
      </p>
      <img
        class="rectangle-509279-1"
        src="https://cdn.animaapp.com/projects/66da512d0c22d478015e0e07/releases/66da51d8cf50153cef9952df/img/rectangle-509279.png"
        alt="Rectangle 509279"
      />
      <p class="lorem-ipsum-dolor-si-8 valign-text-middle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
        quaerat voluptatem.
      </p>
    </div>
        <div class="frame-7912">
          <article class="frame-7923-3">
            <div
              class="text_label-31 valign-text-middle pretendard-medium-white-18px" @click="toGoNoticeList"
            >
             목록으로
            </div>
          </article>
        </div>
      </div>
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import RjZsWi from "./RjZsWi";
import View from "./View";
import XFooter from "./XFooter";
export default {
  name: "NoticeDetail",
  components: {
    Header,
    RjZsWi,
    View,
    XFooter,
  },
  props: [
    "text1934",
    "date",
    "text1935",
    "text1936",
    "jGBKX4Props",
    "rJZsWIProps",
    "viewProps",
    "frame7838Props",
    "xFooterProps",
  ],
  methods:{
    toGoNoticeList(){
      this.$router.push({path:"/notice-list"})
    }
  }
};
</script>

<style>
.announcementsdetails {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  min-height: 2114px;
  position: relative;
  width: 1920px;
}

.frame-7913 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 1px;
  margin-top: 50px;
  position: relative;
  width: 1401px;
}

.frame-7754-2 {
  align-items: flex-start;
  align-self: stretch;
  border-color: var(--greygrey-900);
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  padding: 40px 0px;
  position: relative;
  width: 100%;
}
.frame-7923-3 {
  align-items: center;
  background-color: var(--monza);
  display: flex;
  gap: 10px;
  height: 50px;
  justify-content: center;
  padding: 18px 66px;
  position: relative;
  width: 150px;
}
.text-1934 {
  height: 35px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: 658px;
}
.text_label-31 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: -22.5px;
  margin-right: -22.5px;
  margin-top: -0.5px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}
.frame-7835-2 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  position: relative;
}

.frame-7835-item-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.rectangle-50927 {
  background-color: var(--mountain-mist);
  height: 11px;
  position: relative;
  width: 1px;
}

.frame-7912 {
  align-items: flex-start;
  align-self: stretch;
justify-content: center;
  display: flex;
  flex: 0 0 auto;
  gap: 50px;
  margin-top:30px;
  position: relative;
  width: 100%;
}
</style>
