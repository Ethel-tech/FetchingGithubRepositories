<script>
export default {
  name: "Home",
};
</script>


<template>
  <div>
    <nav class="navbar">
      <div class="logo"><img src="/images/logo.png" /></div>
      <ul class="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger" @click="pushBody"
          ><img src="/images/menu.png"
        /></label>
        <div class="menu">
          <li>
            <router-link active-class="active" :to="{ name: 'home' }"
              >Home</router-link
            >
          </li>
          <li>
            <router-link active-class="active" :to="{ name: 'repos' }"
              >Repository</router-link
            >
          </li>
        </div>
      </ul>
    </nav>
    <div id="headerDiv" class="header_div">
      <p class="header">
        THIS IS
        <span class="title">BOMA SIM-JAJA</span>
      </p>
      <p class="profession">A Frontend Engineer</p>
    </div>

    <div class="main-content">
      <div class="col-1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa
          sapiente ad reprehenderit impedit, sunt vitae illo a dolorem commodi
          voluptates. Incidunt excepturi placeat provident dolorem quo earum
          maxime aspernatur.
        </p>

        <ul class="body-socials">
          <li><img src="/images/instagram.png" /></li>
          <li><img src="/images/twitter.png" /></li>
          <li><img src="/images/github.png" /></li>
        </ul>
        <div class="button-div">
          <router-link :to="{ name: 'repos' }"
            ><button class="repos-button">Repos</button></router-link
          >

          <button class="resume-button">My Resume</button>
        </div>
      </div>
      <div class="col-2">
        <img class="avatar" src="/images/coding-cuate.png" />
      </div>
    </div>
    <footer class="footer">
      <div class="footer-logo">
        <img src="/images/logo.png" class="footer-img-logo" />
      </div>
      <div class="footer-socials">
        <ul>
          <li>
            <img
              class="footer-socials-img"
              src="/images/footer_instagram.png"
              width="60"
            />
          </li>
          <li>
            <img
              class="footer-socials-img"
              src="/images/footer_twitter.png"
              width="60"
            />
          </li>
          <li>
            <img
              class="footer-socials-img"
              src="/images/footer_github.png"
              width="60"
            />
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style scoped>
</style>

