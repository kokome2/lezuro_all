<template>
  <div>
    <!-- <div class="frame-7857-7"> -->
      <!-- <frame77664
        :frame73034Props="frame776641Props.frame73034Props"
        :frame7772Props="frame776641Props.frame7772Props"
      />
      <frame77664
        :className="frame776642Props.className"
        :frame73034Props="frame776642Props.frame73034Props"
        :frame7772Props="frame776642Props.frame7772Props"
      /> -->
      <frame77843 :frame73034Props="frame77843Props.frame73034Props" />
    <!-- </div> -->
    <frame7859 :frame77121Props="frame7859Props.frame77121Props" :frame77122Props="frame7859Props.frame77122Props" />
  </div>
</template>

<script>
import Frame77664 from "./Frame77664";
import Frame77843 from "./Frame77843";
import Frame7859 from "./Frame7859";
export default {
  name: "Frame7782",
  components: {
    Frame77664,
    Frame77843,
    Frame7859,
  },
  props: ["frame776641Props", "frame776642Props", "frame77843Props", "frame7859Props"],
};
</script>

<style>
.frame-7782-1,
.frame-7782-2,
.frame-7782-3,
.frame-7782-4 {
  align-items: center;
  border: 1px solid;
  border-color: var(--alto);
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-left: 3px;
  margin-top: 44px;
  padding: 40px 20px;
  position: relative;
  width: 1401px;
}

.frame-7857-7,
.frame-7857-8,
.frame-7857-9,
.frame-7857-10 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 1320px;
}
</style>
