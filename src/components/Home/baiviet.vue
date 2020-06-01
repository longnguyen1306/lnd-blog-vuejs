<template>
    <div class="contnet-home">
        <b-card
                body-class="noidungbaiviet"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
        >
            <b-link :to="{ name: 'chiTietBaiViet', params: { baiVietID: 3 }}">
               <h4> Tiêu đề bài viết</h4>
            </b-link>
            <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur deserunt doloremque, earum, et eveniet exercitationem id impedit, incidunt iste maiores perspiciatis rem reprehenderit saepe sit ullam unde veniam!
            </b-card-text>

            <router-link :to="{ name: 'chiTietBaiViet', params: { baiVietID: 3 }}" class="baiviet-xemtiep">
                 Xem tiếp <b-icon icon="arrow-right-short" class="icon-xemtiep" ></b-icon>
            </router-link>
        </b-card>
    </div>
</template>

<script>
    export default {
        components: {
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
    .card img {
        transition: transform .5s ease;
    }
    .card:hover img {
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

