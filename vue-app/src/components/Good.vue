
<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
