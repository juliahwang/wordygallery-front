<template>
  <form class="signup" action="" method="get">
    <label for="signup-id">이메일 계정</label>
    <input type="text" name="signup-id">
    <label for="signup-name">이름</label>
    <input type="text" name="signup-name">
    <label for="signup-pw1">비밀번호</label>
    <input type="text" name="signup-pw1">
    <label for="signup-pw2">비밀번호 확인</label>
    <input type="text" name="signup-pw2">
    <button type="submit" class="btn">회원가입</button>
  </form>
</template>

<script>
export default {
}
</script>

<style>
  .signup {
    padding: 20% 10%;
  }
  .signup > label {
    float: left;
    margin-bottom: 10px;
  }
  .signup > input {
    width: 100%;
    border: None;
    border-bottom: 1px solid darkgray;
    margin-bottom: 20px;
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
