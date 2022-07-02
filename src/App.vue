<template>
<Navbar></Navbar>

  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/admin/category/add">Add</router-link> |
    <router-link to="/admin/category">List</router-link> |
  </nav> -->
  <router-view
  :baseURL="baseURL"
  :categories="categories"
  :products="products"
  >
  
  </router-view>
  <Footer></Footer>
</template>


<script>
import Navbar from './components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios';
import HomeView from './views/HomeView.vue';
export default {
  components:{ Navbar, HomeView, Footer },
  data(){
    return{
      baseURL : "http://localhost:8080/",
      products: [],
      categories: []
    }
  },
  methods: {
    async fetchData(){

      //api call to get all the categories
      await axios.get(this.baseURL + "category/list")
      .then(res => {
        this.categories = res.data
      }).catch((err) => console.log('err', err));

      //api call to get the products

      await axios.get(this.baseURL + "product/")
      .then(res => {
        this.products = res.data
      }).catch((err) => console.log('err', err));
    }
  },
  mounted(){
    this.fetchData();
  }
};
</script>
