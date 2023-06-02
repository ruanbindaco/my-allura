<template>
  <div class="container">
    <div class="allura-list">
      <div class="artists">
        <div class="names">
          ARTISTA 1 | ARTISTA 2 | ARTISTA 3 | ARTISTA 4 | ARTISTA 5 | ARTISTA 6
          | ARTISTA 7 | ARTISTA 8 | ARTISTA 9 | ARTISTA 10 | ARTISTA 11 |
          ARTISTA 12 | ARTISTA 13 | ARTISTA 14 | ARTISTA 15 | ARTISTA 16 |
          ARTISTA 17 | ARTISTA 18 | ARTISTA 19 | ARTISTA 20 | ARTISTA 21 |
          ARTISTA 22 | ARTISTA 23 | ARTISTA 24 | ARTISTA 25 | ARTISTA 26 |
          ARTISTA 27 | ARTISTA 28 | ARTISTA 29 | ARTISTA 30 | ARTISTA 31 |
          ARTISTA 32 | ARTISTA 33 |
        </div>
        <div class="link">www.google.com</div>
      </div>
    </div>
    <a href="#" class="download">Download button</a>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {

    }
  },
  mounted() {
    let clientId = 'aa881f98bb814ef09cb60b5e5ee9c87a'
    let clientSecret = '3ff816e1774747a5973d50e8bf62e83b'
    let params = new URLSearchParams(document.location.search)
    let code = params.get('code')

    let body = {
      grant_type: 'authorization_code',
      code,
      redirect_uri: 'http://127.0.0.1:5173/my-allura'
    }

    axios({
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      data: new URLSearchParams(Object.entries(body)).toString(),
      headers: {
        Authorization: `Basic ${btoa(clientId + ':' + clientSecret)}`,
        "Content-Type": 'application/x-www-form-urlencoded'
      }
    })
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap");
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  .download {
    padding: 8px 16px;
    background-color: rgba(0, 81, 88, 255);
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
      background-color: #08838e;
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
