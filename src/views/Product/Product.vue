<template>
    <div class="container">
        <div class="row">
            <h4> Our Products</h4>
        </div>
        <div class="row">
            <!-- display all the products in productbox component -->
            <div v-for="product of products" :key="product.id">
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