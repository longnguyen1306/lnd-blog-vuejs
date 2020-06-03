<template>
    <div class="contnet-home">
        <b-card body-class="noidungbaiviet" class="mb-2" img-top>
            <vue-load-image class="card">
                <img slot="image" :src="listBaiViet.anhbaiViet" :alt="listBaiViet.tenBaiViet"/>
                <img slot="preloader" src="../../assets/image-loader.gif" alt="loading"/>
                <div slot="error">error message</div>
            </vue-load-image>

            <b-link :to="{ name: 'chiTietBaiViet', params: { baiVietID: listBaiViet.id }}">
               <h4> {{ listBaiViet.tenBaiViet }}</h4>
            </b-link>
            <b-card-text>
                {{ listBaiViet.moTaNgan }}
            </b-card-text>

            <router-link :to="{ name: 'chiTietBaiViet', params: { baiVietID: listBaiViet.id }}" class="baiviet-xemtiep">
                 Xem tiếp <b-icon icon="arrow-right-short" type="button" class="icon-xemtiep" ></b-icon>
            </router-link>
        </b-card>
    </div>
</template>

<script>
    import VueLoadImage from 'vue-load-image'
    export default {
        mounted() {

        },
        components: {
            VueLoadImage
        },
        props:['listBaiViet'],
        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none !important;
    }
    .contnet-home {
        margin: 4em 0;
    }
    .noidungbaiviet {
        z-index: 100;
        background: #fff;
        text-align: left;
    }
    .noidungbaiviet > a > h4 {
        padding: 15px 0;
    }
    .noidungbaiviet > p {
        padding-bottom: 15px;
    }
    h4 {
        color: #212121;
        font-weight: 700;
        text-transform: uppercase;
    }
    h4:hover {
        color: #FFAC3A;
    }
    .card {
        border: none;
        overflow: hidden;
    }
    img {
        max-height: 500px;
        object-fit: cover;
    }
    .card img {
        transition: transform .5s ease;
    }
    .card img:hover {
        transform: scale(1.2);
    }
    .baiviet-xemtiep {
        font-weight: 600;
        color: #FFF;
        padding: 9px 25px;
        background-color: #FFAC3A;
        margin-top: 9px;
        letter-spacing: 1px;
        display: inline-block;
        text-decoration: none;
        font-size: 16px;
        border: 1px solid #FFAC3A
    }
    .baiviet-xemtiep:hover  {
        background-color: #FFFFFF;
        color: #FFAC3A;
    }
    .icon-xemtiep {
        font-size: 21px;
        font-weight: bold;
    }
</style>

