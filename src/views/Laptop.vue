<template>
  <div class="laptop">
    <Navbar />
    <Hero />
    <div class="container">
      <div class="has-text-centered title"> Laptop
    <div class="columns is-desktop has-text-centered mt-5">
  <div class="column">
    <div class="box" >
      <img src="@/assets/laptop.jpg" alt="">
      <p class="title is-5">Laptop ASUS ROG</p>
      <p class="subtitle mt-2">Ryzen3 + 8GB Ram</p>
      <h6 class="subtitle is-6">Rp 10.200.00</h6>
    <footer class="card-footer">
    <b-button type="is-light" @click="cart" class="card-footer-item">Add To Cart</b-button>
    <b-button type="is-success" @click="clickMe" class="card-footer-item"><i class="fas fa-heart"></i></b-button>
  </footer>
</div>
  </div>
  <div class="column">
    <div class="box" >
      <img src="@/assets/laptop.jpg" alt="">
      <p class="title is-5">Laptop ASUS ROG</p>
      <p class="subtitle mt-2">Ryzen3 + 8GB Ram</p>
      <h6 class="subtitle is-6">Rp 10.200.00</h6>
    <footer class="card-footer">
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
  name: 'Laptop',
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