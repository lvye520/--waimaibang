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
    left: 0;
    right: 0;
    display: flex;
    // justify-content: space-around;
    color: #ffffff;
    .header_title{
        margin-left: 20px;
        overflow:hidden;//隐藏文字
        text-overflow:ellipsis;//显示 ...
        white-space:nowrap;//不换行
        width: 260px;
        text-align: center;

    }
    .header_login{
        position: absolute;
        right: 0;

    }
    .header-back{
        display: inline-block;
        .icon-xiaoyu{
            font-size: 20px;
        }
    }
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