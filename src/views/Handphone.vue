<template>
  <div class="handphone">
    <Navbar />
    <Hero />
    <div class="container">
      <div class="has-text-centered title"> Handphone
    <div class="columns is-desktop has-text-centered mt-5">
  <div class="column">
    <div class="box" >
      <img src="@/assets/hp.jpg" alt="">
      <p class="title is-5">HP REDMI</p>
      <p class="subtitle">RAM 8GB + 144 HZ </p>
    <footer class="card-footer ">
    <b-button type="is-light" @click="cart" class="card-footer-item">Add To Cart</b-button>
    <b-button type="is-success" @click="clickMe" class="card-footer-item"><i class="fas fa-heart"></i></b-button>
  </footer>
</div>
  </div>
  <div class="column">
    <div class="box" >
      <img src="@/assets/hp.jpg" alt="">
      <p class="title is-5">HP REDMI</p>
      <p class="subtitle">RAM 8GB + 144 HZ </p>
    <footer class="card-footer ">
    <b-button type="is-light" @click="cart" class="card-footer-item">Add To Cart</b-button>
    <b-button type="is-success" @click="clickMe" class="card-footer-item"><i class="fas fa-heart"></i></b-button>
  </footer>
</div>
  </div>
  <div class="column">
    <div class="box" >
      <img src="@/assets/hp.jpg" alt="">
      <p class="title is-5">HP REDMI</p>
      <p class="subtitle">RAM 8GB + 144 HZ </p>
    <footer class="card-footer ">
    <b-button type="is-light" @click="cart" class="card-footer-item">Add To Cart</b-button>
    <b-button type="is-success" @click="clickMe" class="card-footer-item"><i class="fas fa-heart"></i></b-button>
  </footer>
</div>
  </div>  
</div>
  </div>
  </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
export default {
  name: 'Handphone',
  components: {
    Navbar,
    Hero,
  },
  methods: {
    clickMe() {
      this.$buefy.notification.open('Berhasil Ditambahkan ke Wishlist!')
    },
    cart() {
      this.$buefy.notification.open('Berhasil Ditambahkan ke Cart!')
    }
  }
}
</script>


<style>

</style>