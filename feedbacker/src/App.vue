<template>
  <modal-factory />
  <router-view />
</template>

<script>
import ModalFactory from './components/ModalFactory/modalFactory-component.vue'
export default {
  components: { ModalFactory }
}
</script>
