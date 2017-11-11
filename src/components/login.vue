<template>
  <form class="login" action="" method="get">
    <label for="login-id">이메일 계정</label>
    <input type="text" name="login-id">
    <label for="login-pw">비밀번호</label>
    <input type="text" name="login-pw">
    <button type="submit" class="btn">로그인</button>

    <article></article>
  </form>
</template>

<script>
export default {
}
</script>

<style>
  .login {
    padding: 20% 10%;
    
  }
  label {
    float: left;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    font-size: 18px;
    border: None;
    border-bottom: 1px solid darkgray;
    margin-bottom: 20px;
  }
  input:focus {
    outline: 0;
  }
  .btn {
    background: #282522;
    border-radius: 5px;
    width: 100%;
    color:#fff;
    border:none;
    position:relative;
    height:40px;
    font-size:1.0em;
    padding:0 2em;
    cursor:pointer;
    transition:800ms ease all;
    outline:none;
  }
  .btn:hover{
    background:#fff;
    color: #282522;
  }
  btn:before,.btn:after{
    content:'';
    position:absolute;
    top:0;
    right:0;
    height:2px;
    width:0;
    background: #282522;
    transition:400ms ease all;
  }
  .btn:after{
    right:inherit;
    top:inherit;
    left:0;
    bottom:0;
  }
  .btn:hover:before,.btn:hover:after{
    width:100%;
    transition:800ms ease all;
  }
</style>
