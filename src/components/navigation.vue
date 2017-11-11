<template>
  <nav class='gnb'>
    <ul class="logo">  
      <router-link to="/" tag="li"><img src="../assets/logo_2.png" alt="홈"><a href>Wordy Gallery</a></router-link>
    </ul>
    <ul class="menu-bar-left">
      <router-link to="/gallery" tag="li" active-class="current-page" exact><a href>Gallery</a></router-link>
      <router-link to="/genre" tag="li" active-class="current-page" exact><a href>Genre</a></router-link>
    </ul>
    <ul class="menu-bar-right">
      <router-link to="/signup" tag="li" active-class="current-page"><a href>SignUp</a></router-link>
      <router-link to="/login" tag="li" active-class="current-page"><a href>LogIn</a></router-link>
      <!-- <router-link to="/logout" tag="li" class="logout"><a href>로그아웃</a></router-link> -->
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style>
  /* .main {
    float: left;
  } */
  body {
    margin: 0;
  }
  ul.logo {
    background-color: #686159;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul.logo li a {
    font-size: 24px;
    font-weight: 600;
    padding-right: 20px;
    top: 30px;
    color: #fff;
    line-height: 0;
    
  }
  .logo li img {
    width: 50px;
    padding: 1% 0;
    vertical-align: middle;
  }
  li, a {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    border : 0;
    list-style: none;
    text-decoration: none;
  }
  .menu-bar-left li {
    float: left;
    height: 60px;
    line-height: 60px;
    padding-right: 19px;
  }
  .menu-bar-right li {
    float: right;
    height: 60px;
    line-height: 40px;
  }

  
  /* .menu-bar-left li {
    display: inline-block;
    vertical-align: middle;
    padding: 0.5rem 0.1rem;
    bottom: 0.8rem;
    padding: 0.5rem 0.5rem;
    margin: 0 0.8rem;
    list-style: None;
  } */
  
  .menu-bar-right li {
    float: right;
    padding: 0.5rem 0.1rem;
    bottom: 0.8rem;
    /* padding: 0.5rem 0.5rem; */
    margin: 0 0.8rem;
    list-style: None;
  }
  .menu-bar-left .menu-bar-right a, li a {
    text-decoration: None;
    color: #242424;
  }
  .menu-bar a, li a:visited {
    text-decoration: None;
    color: #242424;
  } */
  .current-page {
    border-bottom: 2px solid #686159;
    font-size: 1.0em;
    background:#fff;
    color: #686159;
  }
  .current-page:hover {
    background:#fff;
    /* color: #FF3F29; */
    color: #686159;
    transition: 800ms ease all;
  }
  .current-page:hover:before,.current-page:hover:after {
    background:#fff;
    /* color: #FF3F29; */
    color: #686159;
    transition: 800ms ease all;
  }
</style>