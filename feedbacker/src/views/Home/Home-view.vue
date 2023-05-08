<template>
  <CustomHeader
  @create-account='handleCreateAccount'
  @login='handleLogin' />
  <Contact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedbacker 2021</p>
  </div>
</template>
<script>

import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import CustomHeader from './CustomHeader-component.vue'
import Contact from './Contact-component.vue'
import useModal from '../../hooks/useModal'

export default {
  components: { CustomHeader, Contact },
  setup () {
    const router = useRouter()
    const modal = useModal()

    onMounted(() => {
      const token = window.localStorage.getItem('token')
      if (token) {
        router.push({ name: 'Feedbacks' })
      }
    })
    function handleLogin () {
      modal.open({
        component: 'ModalLogin'
      })
    }

    function handleCreateAccount () {
      modal.open({
        component: 'ModalCreateAccount'
      })
    }

    return {
      handleLogin,
      handleCreateAccount
    }
  }
}

</script>
<style lang="">

</style>
