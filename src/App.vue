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
</template>

<style> 
 #demo {
            position: fixed;
            z-index: 299;
            width: 150px;
            height: 150px;
            font-size: 20px;
            line-height: 36px;
            text-align: center;
            color: rgb(255, 255, 255);
            inset: auto 30px 30px auto;
            cursor: pointer;
            border-radius: 2px;
            transform: translateY(0px);
            transition: transform 0.3s ease 0s;
        }
</style>
<script>
import Navbar from './components/Navbar.vue'
import axios from 'axios';
import HomeView from './views/HomeView.vue';
export default {
  components:{ Navbar, HomeView },
  data(){
    return{
      baseURL : "http://localhost:9090/",
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
