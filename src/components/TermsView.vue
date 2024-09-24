<template>
  <div class="container-center-horizontal">
    <div class="terms-2 screen">
       <Header />
      <rj-zs-wi :frame72911Props="rJZsWIProps.frame72911Props" :frame72912Props="rJZsWIProps.frame72912Props" />
      <div class="frame-7881">
        <frame7856 :viewProps="frame7856Props.viewProps" />
        <div class="frame-7880">
          <div class="frame-7879">
          <a href="#"> <frame7712 :text_Label="frame7712Props.text_Label" :className="frame7712Props.className" /></a> 
            <div class="frame-7692-2">
              <div class="frame-7691-3">
                <div class="group-764-4">
                  <div class="frame-7727-4">
                    <frame7671 :text12="frame7671Props.text12" />
                    <frame76735 :text2064="frame767351Props.text2064" />
                    <frame76735 :text2064="frame767352Props.text2064" :className="frame767352Props.className" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-7838-2">
            <div class="frame-7836-8 pretendard-light-granite-gray-18px">
              <p class="lorem-ipsum-dolor-si-11 valign-text-middle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
              <p class="lorem-ipsum-dolor-si-12 valign-text-middle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
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
import RjZsWi from "./RjZsWi";
import Frame7856 from "./Frame7856";
import Frame7712 from "./Frame7712";
import Frame7671 from "./Frame7671";
import Frame76735 from "./Frame76735";
import XFooter from "./XFooter";
export default {
  name: "TermsView",
  components: {
    Header,
    RjZsWi,
    Frame7856,
    Frame7712,
    Frame7671,
    Frame76735,
    XFooter,
  },
  props: [
    "x9cITtGProps",
    "rJZsWIProps",
    "frame7856Props",
    "frame7712Props",
    "frame7671Props",
    "frame767351Props",
    "frame767352Props",
    "xFooterProps",
  ],
};
</script>

<style>
.terms-2 {
  align-items: center;
  background-color: var(--blackwhitewhite);
  display: flex;
  flex-direction: column;
  min-height: 1468px;
  position: relative;
  width: 1920px;
}

.frame-7881 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 104px;
  position: relative;
  width: 1400px;
}

.frame-7880 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.frame-7879 {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 100%;
}

.frame-7692-2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
}

.frame-7691-3 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  position: relative;
  width: 100%;
}

.group-764-4 {
  height: 60px;
  position: relative;
  width: 1399.98px;
}

.frame-7727-4 {
  align-items: center;
  display: inline-flex;
  position: relative;
}

.frame-7838-2 {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.frame-7836-8 {
  align-items: flex-start;
  align-self: stretch;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--alto);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-style: solid;
  border-right-width: 1px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  padding: 40px;
  position: relative;
  width: 100%;
}

.lorem-ipsum-dolor-si-11 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  width: 1320px;
}

.lorem-ipsum-dolor-si-12 {
  letter-spacing: 0;
  line-height: 28px;
  position: relative;
  width: 1320px;
}
</style>
