<template>
      <!-- Header Bottom Start -->
 <div class="header-bottom">
        <div class="header-sticky">
            <div class="container">
                <div class="row align-items-center position-relative">

                    <!-- Header Logo Start -->
                    <div class="col-lg-3 col-md-4 col-6">
                        <div class="header-logo">
                            <router-link to="/"><img src="assets/images/logo/logo.png" alt="Site Logo" /></router-link>
                        </div>
                    </div>
                    <!-- Header Logo End -->

                    <!-- Header Menu Start -->
                    <div class="col-lg-6 d-none d-lg-block">
                        <div class="main-menu">
                            <ul>
                                <li class="has-children">
                                    <a href="#">關於我們</a>
                                    <ul class="sub-menu">
                                        <li><router-link to="/">協會宗旨</router-link></li>
                                        <li><router-link :to="{name: 'Admin'}">聯絡資訊</router-link></li>
                                    </ul>
                                </li>
                                <li class="has-children position-static">
                                    <a href="#">商品</a>
                                    <ul class="mega-menu">
                                        <li class="mega-menu-col">
                                            <h4 class="mega-menu-title">Shop Layout</h4>
                                            <ul class="m-b-n10">
                                                <li><router-link :to="{name: 'Category'}">List</router-link></li>
                                                <li><a href="shop-left-sidebar.html">Left Sidebar</a></li>
                                                <li><a href="shop-right-sidebar.html">Right Sidebar</a></li>
                                                <li><a href="shop-list-fullwidth.html">List Fullwidth</a></li>
                                                <li><a href="shop-list-left-sidebar.html">List Left Sidebar</a></li>
                                                <li><a href="shop-list-right-sidebar.html">List Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="mega-menu-col">
                                            <h4 class="mega-menu-title">Product Layout</h4>
                                            <ul class="m-b-n10">
                                                <li><a href="single-product.html">Single Product</a></li>
                                                <li><a href="single-product-sale.html">Single Product Sale</a></li>
                                                <li><a href="single-product-variable.html">Single Product
                                                        Variable</a></li>
                                                <li><a href="single-product-countdown.html">Single Product
                                                        Countdown</a></li>
                                                <li><a href="single-product-affiliate.html">Single Product
                                                        Affiliate</a></li>
                                                <li><a href="single-product-slider.html">Single Product Slider</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="mega-menu-col">
                                            <h4 class="mega-menu-title">Other Pages</h4>
                                            <ul class="m-b-n10">
                                                <li><a href="my-account.html">My Account</a></li>
                                                <li><a href="login.html">Login | Register</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="compare.html">Compare</a></li>
                                            </ul>
                                        </li>
                                        <li class="mega-menu-col">
                                            <div class="megamenu-image">
                                                <a href="shop.html">
                                                    <img class="fit-image" src="assets/images/header/mega-menu.png"
                                                        alt="Megamenu Image">
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li class="has-children">
                                    <a href="#">認養/棄養</a>
                                    <ul class="sub-menu">
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="error-404.html">Error 404</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="register.html">Register</a></li>
                                    </ul>
                                </li>
                                <li class="has-children">
                                    <a href="#">志工活動</a>
                                    <ul class="sub-menu">
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                        <li><a href="blog-details-sidebar.html">Blog Details Sidebar</a></li>
                                    </ul>
                                </li>
                                <li class="has-children"><a href="contact.html">公告</a>
                                    <ul class="sub-menu">
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                        <li><a href="blog-details-sidebar.html">Blog Details Sidebar</a></li>
                                    </ul>
                                </li>
                                <li class="has-children">
                                    <a href="#">捐款支持</a>
                                    <ul class="sub-menu">
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                        <li><a href="blog-details-sidebar.html">Blog Details Sidebar</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Header Menu End -->

                    <!-- Header Action Start -->
                    <div class="col-lg-3 col-md-8 col-6">
                        <div class="header-actions">
                            <div id="demo">
                                <img src="assets/images/logo/Catmini.png">
                            </div>
                            <!-- Header Action Search Button Start -->
                            <div class="header-action-btn header-action-btn-search d-none d-md-flex">
                                <div class="action-execute">
                                    <a class="action-search-open" href="javascript:void(0)"><i
                                            class="icon-magnifier icons"></i></a>
                                    <a class="action-search-close" href="javascript:void(0)"><i
                                            class="ti-close"></i></a>
                                </div>
                                <!-- Search Form and Button Start -->
                                <form class="header-search-form" action="#">
                                    <input type="text" class="header-search-input" placeholder="Search Our Store">
                                    <button class="header-search-button"><i class="icon-magnifier icons"></i></button>
                                </form>
                                <!-- Search Form and Button End -->
                            </div>
                            <!-- Header Action Search Button End -->

                            <!-- Header My Account Button Start -->
                            <a href="my-account.html" class="header-action-btn header-action-btn-wishlist">
                                <i class="icon-user icons"></i>
                            </a>
                            <!-- Header My Account Button End -->

                            <!-- Header Action Button Start -->
                            <div class="header-action-btn header-action-btn-cart d-none d-sm-flex">
                                <a class="cart-visible" href="javascript:void(0)">
                                    <i class="icon-handbag icons"></i>
                                    <span class="header-action-num">3</span>
                                </a>

                                <!-- Header Cart Content Start -->
                                <div class="header-cart-content">

                                    <!-- Cart Procut Wrapper Start  -->
                                    <div class="cart-product-wrapper">

                                        <!-- Cart Product/Price Start -->
                                        <div class="cart-product-inner p-b-20 m-b-20 border-bottom">

                                            <!-- Single Cart Product Start -->
                                            <div class="single-cart-product">
                                                <div class="cart-product-thumb">
                                                    <a href="single-product.html"><img
                                                            src="assets/images/header/header-cart/1.png"
                                                            alt="Cart Product"></a>
                                                </div>
                                                <div class="cart-product-content">
                                                    <h3 class="title"><a href="single-product.html">Basic Dog
                                                            Trainning</a></h3>
                                                    <div class="product-quty-price">
                                                        <span class="cart-quantity">Qty: <strong> 1 </strong></span>
                                                        <span class="price">
                                                            <span class="new">$70.00</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Single Cart Product End -->

                                            <!-- Product Remove Start -->
                                            <div class="cart-product-remove">
                                                <a href="#/"><i class="icon-close"></i></a>
                                            </div>
                                            <!-- Product Remove End -->

                                        </div>
                                        <!-- Cart Product/Price End -->

                                        <!-- Cart Product/Price Start -->
                                        <div class="cart-product-inner p-b-20 m-b-20 border-bottom">

                                            <!-- Single Cart Product Start -->
                                            <div class="single-cart-product">
                                                <div class="cart-product-thumb">
                                                    <a href="single-product.html"><img
                                                            src="assets/images/header/header-cart/2.png"
                                                            alt="Cart Product"></a>
                                                </div>
                                                <div class="cart-product-content">
                                                    <h3 class="title"><a href="single-product.html">Wait, You Need
                                                            This</a></h3>
                                                    <div class="product-quty-price">
                                                        <span class="cart-quantity">Qty: <strong> 1 </strong></span>
                                                        <span class="price">
                                                            <span class="new">$80.00</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Single Cart Product End -->

                                            <!-- Product Remove Start -->
                                            <div class="cart-product-remove">
                                                <a href="#/"><i class="icon-close"></i></a>
                                            </div>
                                            <!-- Product Remove End -->

                                        </div>
                                        <!-- Cart Product/Price End -->

                                    </div>
                                    <!-- Cart Procut Wrapper -->

                                    <!-- Cart Product Total Start -->
                                    <div class="cart-product-total p-b-20 m-b-20 border-bottom">
                                        <span class="value">Total</span>
                                        <span class="price">200$</span>
                                    </div>
                                    <!-- Cart Product Total End -->

                                    <!-- Cart Product Button Start -->
                                    <div class="cart-product-btn m-t-20">
                                        <a href="cart.html" class="btn btn-outline-light btn-hover-primary w-100">View
                                            cart</a>
                                        <a href="checkout.html"
                                            class="btn btn-outline-light btn-hover-primary w-100 m-t-20">Checkout</a>
                                    </div>
                                    <!-- Cart Product Button End -->

                                </div>
                                <!-- Header Cart Content End -->

                            </div>
                            <div class="header-action-btn header-action-btn-cart d-flex d-sm-none">
                                <a href="cart.html">
                                    <i class="icon-handbag icons"></i>
                                    <span class="header-action-num">3</span>
                                </a>
                            </div>
                            <!-- Header Action Button End -->

                            <!-- Mobile Menu Hambarger Action Button Start -->
                            <a href="javascript:void(0)"
                                class="header-action-btn header-action-btn-menu d-lg-none d-md-flex">
                                <i class="icon-menu"></i>
                            </a>
                            <!-- Mobile Menu Hambarger Action Button End -->

                        </div>
                    </div>
                    <!-- Header Action End -->

                </div>
            </div>
        </div>
    </div>
    <!-- Header Bottom End -->

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

import { onMounted} from 'vue'

export default {
 setup () {

    onMounted(() => {
    $(".cart-visible").on('click', function(){
      $(".header-cart-content").slideToggle("slow");
    });

    $(".action-execute").on('click', function() {
      // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
      if ($(".action-execute, .header-search-form").hasClass("visible-execute")) {
        $(".action-execute, .header-search-form").removeClass("visible-execute");
      }
      // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
      else {
        $(".action-execute, .header-search-form").removeClass("visible-execute");
        $(".action-execute, .header-search-form").addClass("visible-execute");
      }
    });
    })

     


    return {}
  }

}


</script>