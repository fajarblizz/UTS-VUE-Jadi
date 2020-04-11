<template>
    <div class="container-fluid">
        <nav class="navbar fixed-top">
            <div class="navbar-brand">
                <h2>
                <router-link to="/home" class="link-home">Home</router-link> |
                <router-link to="/about" class="link-home">About</router-link> |
                <router-link to="/kontak" class="link-home">Kontak</router-link>
              </h2>
            </div>
            <div class="navbar-judul">
                    <h1>Miwon Shop</h1>
                  </div>
        </nav>
        <div id="carIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carIndicators" data-slide-to="1"></li>
                <li data-target="#carIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="jumbotron jumbo-3">
                        <img alt="Vue logo" src="../assets/fashion/Gamis.jpeg" width="400px">
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="jumbotron jumbo-1">
                          <img alt="Vue logo" src="../assets/fashion/batik.jpg" width="400px">
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="jumbotron jumbo-2">
                        <img alt="Vue logo" src="../assets/fashion/koko2.jpg" width="400px">
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <h1 class="h1-title text-center">Monggo Didelokaken</h1>
        <hr>
        <div class="row film-1">
            <div class="col-md-3" v-for="(data, index) in item" :value="data" :key="index">
                <div class="item-box" @click="detailfilm(data.id)">
                    <img v-bind:src="data.image" class="img-fluid item-poster" v-bind:alt="data"/>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p class="text-center pt-lg-5 pb-3">
                    Copyright &copy;2020 Dibuat Fajar Ridho.
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import Img1 from '../assets/fashion/Army.jpg';
import Img2 from '../assets/fashion/Baseball.jpg';
import Img3 from '../assets/fashion/Zipper.jpg';
import Img4 from '../assets/fashion/Fleece.jpg';
import Img5 from '../assets/fashion/Cargo.jpg';
import Img6 from '../assets/fashion/koko.jpg';
import Img7 from '../assets/fashion/JumpSuit.jpg';
import Img8 from '../assets/fashion/kacamata.jpg';

export default {
  data: () => ({
    item: [
      {
        id: 1,
        image: Img1,
      },
      {
        id: 2,
        image: Img2,
      },
      {
        id: 3,
        image: Img3,
      },
      {
        id: 4,
        image: Img4,
      },
      {
        id: 5,
        image: Img5,
      },
      {
        id: 6,
        image: Img6,
      },
      {
        id: 7,
        image: Img7,
      },
      {
        id: 8,
        image: Img8,
      },
    ],
  }),
  methods: {
    detailfilm(filmId) {
      this.$router.push({ name: 'detail', params: { id: filmId } });
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Courgette');
@import url('https://fonts.googleapis.com/css?family=Niramit');
@import url('https://fonts.googleapis.com/css?family=Bangers');
@import url('https://fonts.googleapis.com/css?family=Caudex');
@import url('https://fonts.googleapis.com/css?family=Gugi');
@import url('https://fonts.googleapis.com/css?family=Habibi');
.container-fluid {
    background-color: #e0e0e0;
}
#nav {
  padding: 30px;
}
.navbar {
    width: 100%;
    background-color: rgba(174, 0, 255, 0.822);
    color: #000000;
    margin-left: 0;
    box-shadow: 0 5px 7px 0 #363636;
}
.navbar-brand {
    font-family: 'Courgette';
    text-align: left;
    color: #000000;
}
.navbar-judul {
    font-family: 'Courgette';
    text-align: right;
}
.link-home {
    color: #000000;
    text-decoration: none;
    transition: 0.3s;
}
.link-home {
    color: #dedede;
    text-decoration: none;
    transition: 0.3s;
}
.link-home:hover {
    color: gold;
}
.carousel {
    padding-top: 100px;
}
li {
    background-color: #363636;
}
.jumbotron {
    height: 450px;
    border-radius: 0;
}
.jumbo-1 {
    text-align: center;
    padding-top: 25px;
    background-color: #303030;
    font-family: 'Caudex';

}
.jumbo-2 {
    text-align: center;
    padding-top: 25px;
    background-color: #303030;
    font-family: 'Caudex';

}
.jumbo-3 {
    text-align: center;
    padding-top: 25px;
    background-color: #303030;
    font-family: 'Caudex';

}

.h1-title {
    font-family: 'Habibi';
    color: #000000;
}
.item-poster {
    opacity: 1;
    display: block;
    width: 100%;
    height: 300px;
    transition: .5s ease;
    backface-visibility: hidden;
    box-shadow: 0 5px 7px 0 rgb(17, 17, 17);
}
.item-poster:hover {
    box-shadow: 0 10px 15px 0 rgb(17, 17, 17);
}
.item-box {
    padding-top: 80px;
}
.title-fade {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
}
.item-box:hover .item-poster {
    opacity: 0.2;
}
.item-box:hover .title-fade {
    opacity: 1;
}
.title {
    color: #303030;
    font-family: 'Gugi';
    font-size: 16px;
}
</style>
