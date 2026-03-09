<template>
  <Teleport v-if="mounted" to="body">
    <div class="build-info">Build: {{ hash }}</div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted } from "vue";

const hash = __COMMIT_HASH__;
const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});
</script>

<style>
.build-info {
  position: fixed;
  bottom: 0;
  right: 0;
  font-size: 0.65rem;
  color: #aaa;
  padding: 2px 6px;
  opacity: 0.5;
  pointer-events: none;
  z-index: 1;
}
</style>
