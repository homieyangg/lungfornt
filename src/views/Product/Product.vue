<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4> Our Products</h4>
            </div>
        </div>
        <div class="row">
            <!-- display all the products in productbox component -->
            <div v-for="product of products" :key="product.id" class="col-xl-4 col-md-6 d-flex">
                <ProductBox :product="product"/>
            </div>
        </div>
    </div>
</template>
<script>
import ProductBox from '@/components/ProductBox.vue';
export default {
    props: ["products"],
    components: { ProductBox }
}
</script>