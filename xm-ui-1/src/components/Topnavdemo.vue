<template>
  <div>
    <div class="topnav">
      <div class="logo">logo</div>
      <div class="menu">
        <div>菜单1</div>
        <div>菜单2</div>
      </div>
    <span class="toggleAside"  @click="toggleMenu"></span>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";

export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("xxx");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  display: flex;
  background: rgb(255, 198, 203);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  justify-content: center;
  align-items: center;
  z-index: 10;
  .logo {
    padding: 12px;
    margin-right: auto;
  }
  .menu {
    display: flex;
    div {
      padding: 10px 10px;
    }
  }
  >.toggleAside{
    display: none;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    z-index: 11;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    >.toggleAside{
    display: inline-block;
    }
  }
}
</style>