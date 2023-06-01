<template>
  <div class="container">
    <div class="allura-list">
      <div class="artists">
        <div class="names">
          ARTISTA 1 ARTISTA 1 ARTISTA 1 ARTISTA 1 ARTISTA 1 ARTISTA 1 ARTISTA 1
          ARTISTA 1 ARTISTA 1 ARTISTA 1 ARTISTA 1 ARTISTA 1 ARTISTA 1 ARTISTA 1
          ARTISTA 1 ARTISTA 1 ARTISTA 1 ARTISTA 1 ARTISTA 1 ARTISTA 1 ARTISTA 1
          ARTISTA 1 ARTISTA 1 ARTISTA 1 ARTISTA 1 ARTISTA 1 ARTISTA 1 ARTISTA 1
          ARTISTA 1 ARTISTA 1 ARTISTA 1 ARTISTA 1
        </div>
        <div class="link">www.google.com</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap");
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  .allura-list {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/images/my-allura.png");
    background-size: cover;
    max-width: 500px;
    width: 100%;
    height: 500px;
    transform: scale(0.9);

    .artists {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 100%;

      .names {
        display: flex;
        justify-content: center;
        padding: 30% 45px 0;
        font-family: "Slabo", serif;
        text-align: justify;
        font-size: 20px;
        color: #fff;
      }

      .link {
        display: flex;
        justify-content: center;
        padding-bottom: 72px;
        font-family: "Slabo", serif;
        text-align: justify;
        font-size: 20px;
        color: #fff;
      }
    }
  }
}

@media (max-width: 530px) {
  .container {
    .allura-list {
      background-size: contain;
      background-repeat: no-repeat;
      height: 500px;

      .artists {
        justify-content: start;
        gap: 20px;
        .names {
          font-size: 16px;
        }

        .link {
          padding-bottom: 30px;
          font-size: 10px;
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .container .allura-list .artists .names {
    font-size: 12px;
  }
}
</style>
