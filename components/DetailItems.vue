<template>
    <div class="container-fluid">
        <nav class="navbar fixed-top">
            <div class="navbar-brand">
                <router-link to="/" class="link-home"><h1>Miw Shop</h1></router-link>
            </div>
        </nav>
        <h1 class="h1-title text-center p-5">Item Details</h1>
        <div v-for="(data, index) in item" :value="data" :key="index">
            <div class="row" v-if="filmId == data.id">
                <div class="col-md-6 text-center">
                    <img v-bind:src="data.image"  class="img-fluid img-item" v-bind:alt="data">
                </div>
                <div class="col-md-6 text-justify pl-5 pr-5">
                    <h1>{{data.judul}}</h1>
                    <button type="button" class="btn btn-primary btn-lg">
                        Harga  {{data.harga}}</button>
                    <hr>
                    <p class="desc text-justify">{{data.desc}}</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p class="text-center pt-5">
                    <router-link to='/'><button class="btn-back">Kembali</button></router-link>
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p class="text-center pt-3 pb-3">
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
  data() {
    return {
      filmId: this.$route.params.id,
      item: [
        {
          id: 1,
          image: Img1,
          judul: 'Jaket Army',
          harga: 'Rp 35.000,00',
          desc: 'Jaket Army bahan bagus dengan kualitas yang tinggi, membuat diri anda lebih gaul',
        },
        {
          id: 2,
          image: Img2,
          judul: 'Topi BaseBall',
          harga: 'Rp 15.000,00',
          desc: 'Topi Baseball bahan bagus dengan kualitas yang tinggi, membuat diri anda lebih gaul. Menghindari dari sengatan matahari',
        },
        {
          id: 3,
          image: Img3,
          judul: 'Jaket Yellow Zipper',
          harga: 'Rp 33.000,00',
          desc: 'Jaket Yellow zipper bahan bagus dengan kualitas yang tinggi, serta lembut bikin nyaman saat digunakan, dan cocok digunakan saat cuaca sedang dingin membuat diri anda lebih gaul',
        },
        {
          id: 4,
          image: Img4,
          judul: 'Fleece',
          harga: 'Rp 51.500,00',
          desc: 'Jaket Fleece bahan bagus dengan kualitas yang tinggi, membuat diri anda lebih gaul',
        },
        {
          id: 5,
          image: Img5,
          judul: 'Cargo',
          harga: 'Rp 38.000,00',
          desc: 'Celana Cargo bahan bagus dengan kualitas yang tinggi, membuat diri anda lebih gaul, dan tampak bergaya',
        },
        {
          id: 6,
          image: Img6,
          judul: 'Koko',
          harga: 'Rp 40.000,00',
          desc: 'Baju Koko bahan bagus dengan kualitas yang tinggi, membuat diri anda lebih gaul dan mengikuti trendi modern',
        },
        {
          id: 7,
          image: Img7,
          judul: 'Jump Suit',
          harga: 'Rp 55.500,00',
          desc: 'Jump Suit bahan bagus dengan kualitas yang tinggi, membuat diri anda lebih gaul, dan tampak lebih ramping',
        },
        {
          id: 8,
          image: Img8,
          judul: 'Kacamata',
          harga: 'Rp 13.500,00',
          desc: 'Kacamata kualitas yang tinggi, membuat diri anda lebih gaul, bergaya, dan tampak lebih percaya diri',
        },
      ],
    };
  },
};
</script>
<style scoped>
.container-fluid {
    background-color: #e0e0e0;
    padding-top: 100px;
}
.navbar {
    width: 100%;
    background-color: #08344f;
    color: #dedede;
    margin-left: 0;
    box-shadow: 0 5px 7px 0 #363636;
}
.navbar-brand {
    font-family: 'Courgette';
}
.link-home {
    color: #dedede;
    text-decoration: none;
    transition: 0.3s;
}
.link-home:hover {
    color: gold;
}
.jumbotron {
    height: 250px;
    border-radius: 0;
}
.h1-title {
    font-family: 'Habibi';
    color: #cfc20e;
}
.img-item {
    width: 500px;
    box-shadow: 0 5px 7px 0 rgb(17, 17, 17);
}
.btn-back {
    background-color: #cfc20e;
    color: #fff;
    border: 0px;
    border-radius: 60px;
    text-align: center;
    margin: 5px 2px;
    padding: 20px 15px;
    cursor: pointer;
    transition: 0.3s;
    margin: 20px;
    width: 300px;
}
.btn-back:hover {
    background-color: transparent;
    border: 2px solid #cfc20e;
    color: #cfc20e;
}
</style>
