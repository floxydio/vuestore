<template>
    <b-navbar class="container">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                IO-Store
            </b-navbar-item>
        </template>
        <template slot="end">
             <b-navbar-dropdown label="Kategori" class="is-size-7 mr-4"> 
                <b-navbar-item tag="router-link" :to=" { path: '/handphone'}">
                    Handphone
                </b-navbar-item>
                <b-navbar-item  tag="router-link" :to=" { path: '/laptop' }">
                    Laptop
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to=" { path: '/pakaian'} ">
                    Pakaian
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-item>
                <i class="fas fa-cart-plus mr-3" @click="alert"></i>
                
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons mr-2">
                    <b-button type="is-success has-text-weight-regular" tag="router-link" :to=" { path: '/register' }">Sign Up</b-button>
                    <b-button type="is-light" tag="router-link" :to=" { path: '/login' }">Login</b-button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>



<script>
export default {
    name: "Navbar",
    data() {
        return {
        }
    },
    methods: {
        alert() {
        this.$buefy.dialog.alert('Tampaknya belanjaan kamu belum ada')
    }
}
}
</script>

<style>
nav.navbar.is-fixed-top {
  background: transparent;
}
nav {
    font-size: 1.1rem;
}
.garis {
    border-left: 1px rgba(0,0,0,0.3) solid;
        height: 20px;
        width: 0px;
        display: flex;
        align-items: center
}
</style>
