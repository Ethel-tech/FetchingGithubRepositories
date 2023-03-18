<script>
export default {
  props: ["id"],

  computed: {
    name() {
      return this.$route.query.name;
    },
    image() {
      return this.$route.query.image;
    },
    url() {
      return this.$route.query.url;
    },
    fullName() {
      return this.$route.query.fullName;
    },
  },
};
</script>
<template>
  <div id="main">
    <div class="image_div">
      <img :src="image" />
    </div>
    <div class="text">
      <p>Repos id: {{ id }} {{ name }}</p>
      <p class="name">{{ fullName }}</p>
      <a :href="url">Visit Repo</a>
    </div>
  </div>
</template>
<style scoped>
#main {
  display: flex;
  grid-area: 10em;
  padding: 40px 70px;
  justify-content: center;
}
.name {
  margin-bottom: 50px;
}
.image_div {
  flex-basis: 40%;
}
.text {
  flex-basis: 40%;
  font-size: 40px;
  margin-top: 30px;
}
.text a {
  background-color: #A73160;
  color: white;
  width: auto;
  padding: 15px;
  border-radius: 10px;
}
@media (max-width: 768px) {
  #main {
    flex-direction: column;
    padding: 40px;
  }
  .text {
    font-size: 24px;
  }
}
@media (max-width: 1024px) {
  #main {
    gap: 10%;
  }
  .text {
    font-size: 32px;
    margin-top: 20px;
  }
}
</style>
