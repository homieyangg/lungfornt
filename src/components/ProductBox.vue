<template>
    <div class="card h-100 w-100" style="margin-top: 10px">
        <div class="embed-responsive embed-responsive-16by9">
            <img :src="product.imageURL" class="card-img-top embed-responsive-item" alt="...">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">{{product.description}}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProductBox",
    props: ["product"]
}
</script>