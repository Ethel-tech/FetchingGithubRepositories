<script>
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import axios from "axios";
export default {
  name: "Repo",
  components: { VueTailwindPagination },
  created() {
    this.getData();
  },
  data() {
    return {
      currentPage: 1,
      total: 6,
      perPage: 2,
      limit: 5,
      data: [],
      errorMsg: "",
    };
  },
  methods: {
    pageChange(pageNumber) {
      this.currentPage = pageNumber;
      this.getData();
    },
    getData() {
      axios
        .get(
          `https://api.github.com/users/Ethel-tech/repos?per_page=2&page=${this.currentPage}`
        )
        .then((response) => {
          this.data = response.data;
        })
        .catch((error) => {
          this.errorMsg = "Error receiving data";
        });
    },
    openNav() {
      document.getElementById("mySidenav").style.width = "100%";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
  },
  mounted() {
    this.currentPage = 1;
    this.getData();
  },
};
</script>

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
  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
    <h1 class="repo-header">Github Repositories</h1>
    <h3 v-if="errorMsg">{{ errorMsg }}</h3>
    <VueTailwindPagination
      :current="currentPage"
      :total="total"
      :per-page="perPage"
      @page-changed="pageChange($event)"
    ></VueTailwindPagination>
    <div class="repo-list" v-for="repo in data" :key="repo.id">
      <router-link
        :to="{
          name: 'singleRepos',
          params: {
            id: repo.id,
          },
          query: {
            name: repo.name,
            image: repo.owner.avatar_url,
            language: repo.language,
            url: repo.url,
            fullName: repo.full_name,
          },
        }"
        ><div>
          <h3>{{ repo.full_name }}</h3>
          <p>Created: {{ repo.created_at }}</p>
        </div></router-link
      >
      <hr />
    </div>
  </div>
  <button class="open-repo" @click="openNav">Open Repositories</button>
  <router-view />

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
</template>

<style scoped>
.footer {
  position: absolute;
  bottom: 1%;
  width: 100%;
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #D8FFFF;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}
.sidenav a:hover {
  color: #f1f1f1;
}
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
#main {
  transition: margin-left 0.5s;
  padding: 20px;
}
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>