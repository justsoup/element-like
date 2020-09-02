<template>
    <div id="header-top">
        <slot name="logo"></slot>
        <slot name="search"></slot>
        <Icon type="md-arrow-round-back" />

        <router-link :to="userLogin">
            <span>登录</span>
        </router-link>
        <router-link :to="userRegister">
            <span>注册</span>
        </router-link>
    </div>

</template>


<script>
    export default{
        components:{
            
        }
    }
</script>


<style lang="less">

</style>