<template>
  <div class="frame-7838">
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
    <frame7712 :text_Label="frame7712Props.text_Label" :className="frame7712Props.className" @click="toGoList"/>
  </div>
</template>

<script>
import Frame7712 from "./Frame7712";
export default {
  name: "Frame7838",
  components: {
    Frame7712,
  },
  props: ["frame7712Props"],
  methods:{
    toGoList(){
      this.$router.push({path:"/board-list"})
    }
  }
};
</script>

<style>
.frame-7838,
.frame-7838-1 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 50px;
  position: relative;
  width: 100%;
}

.frame-7836-6,
.frame-7836-7 {
  align-items: flex-start;
  align-self: stretch;
  border: 1px solid;
  border-color: var(--alto);
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  padding: 40px;
  position: relative;
  width: 100%;
}

.lorem-ipsum-dolor-si-7,
.lorem-ipsum-dolor-si-9 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  width: 1320px;
}

.rectangle-509279-1,
.rectangle-509279-2 {
  align-self: stretch;
  height: 400px;
  object-fit: cover;
  position: relative;
  width: 100%;
}

.lorem-ipsum-dolor-si-8,
.lorem-ipsum-dolor-si-10 {
  letter-spacing: 0;
  line-height: 28px;
  position: relative;
  width: 1320px;
}
</style>
