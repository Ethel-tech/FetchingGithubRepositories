<template>
  <nav class="navbar">
    <div class="logo"><img src="/images/logo.png" /></div>
    <ul class="nav-links">
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger"
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
  <div class="errorBody">
    <div class="errorBodyChild">
      <div class="errorimg_div"><img src="/images/not_found.png" /></div>
      <p class="error_para">Page Not found</p>
      <router-link :to="{ name: 'home' }"
        ><button class="error_button">Go Back Home</button></router-link
      >
    </div>
  </div>
</template>
