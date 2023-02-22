<template>
  <div class="loginPage">
    <h1>관리자 기본 레이아웃</h1>
    <table>
        <tr>
            <td>
                <NavAdminVue/>
            </td>
            <td>
                <AdminView/>
            </td>
        </tr>
    </table>
  </div>
</template>

<script>
import NavAdminVue from '@/components/common/NavAdmin.vue'
import AdminView from '@/views/AdminView.vue'

export default {
  name: 'loginPage',
  components: {
    NavAdminVue,
    AdminView
  }
}
</script>

<style>
</style>
