<template>
    <div class="header">
        <slot name="left"></slot>
        <span class="header_title">
            <span class="header_title_text">{{title}}</span>
        </span>
        <slot name="right"></slot>
    </div>
</template>
<style lang="scss" scoped>
.header{
    height: 50px;
    line-height: 50px;
    background-color: #02a774;
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: space-around;
    color: #ffffff;
}
</style>
<script>
export default {
    // 接收数据
    props : {
        title : String
    }
    
}
</script>