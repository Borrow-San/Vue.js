<template>
    <div class="navAdmin">
        <router-link to="/admin">메인 화면</router-link><br>
        <router-link to="/admin/users">회원 조회</router-link><br>
        <router-link to="/admin/rents">파손 기록</router-link><br>
        <router-link to="/admin/claims">상담 접수</router-link><br>
        <router-link to="/admin/stands">보관함 관리</router-link><br>
        <router-link to="/admin/demands">수요예측 현황</router-link><br>
        <router-link to="/admin/notice">공지사항 관리</router-link><br>
        <router-link to="/login">로그아웃</router-link>
    </div>
</template>

<script>
    export default {
        name: 'navAdmin'
    }
</script>

<style>

</style>