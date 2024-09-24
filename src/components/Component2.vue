<template>
  <div class="component-2">
    <component22 :tSxWi5Props="component22Props.tSxWi5Props" :rJZsWIProps="component22Props.rJZsWIProps" />
  </div>
</template>

<script>
import Component22 from "./Component22";
export default {
  name: "Component2",
  components: {
    Component22,
  },
  props: ["component22Props"],
};
</script>

<style>
.component-2,
.component-2-1,
.component-2-2 {
  align-items: flex-start;
  display: flex;
  height: 170px;
  min-width: 1920px;
  position: relative;
}
</style>
