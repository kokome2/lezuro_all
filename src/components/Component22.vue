<template>
  <div class="component-2-3">
      <Header />
    <rj-zs-wi :frame72911Props="rJZsWIProps.frame72911Props" :frame72912Props="rJZsWIProps.frame72912Props" />
  </div>
</template>

<script>
import Header from "./Header";
import RjZsWi from "./RjZsWi";
export default {
  name: "Component22",
  components: {
    Header,
    RjZsWi,
  },
  props: ["tSxWi5Props", "rJZsWIProps"],
};
</script>

<style>
.component-2-3,
.component-2-4,
.component-2-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 170px;
  position: relative;
  width: 1920px;
}
</style>
