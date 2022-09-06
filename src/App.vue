<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div class="box"></div>
  </div>
</template>

<script>
// git log 查看commit记录cls
// git status 查看当前仓库的状态
// git add . 提交到暂存区
// git commit -m “” （双引号里写这次存档的说明，存了啥）
//    - feat：新增特性
//    - style：样式的修改
//    - fixed：debug
//    - comment：添加了注释
export default {}
</script>

<style scoped>
  .box {
    width: 2rem;
    height: 2rem;
    background-color: gold;
  }
</style>
