<template>
    <header>
        <div class="logo">
            <h1>
                <router-link :to="{ name: 'home' }">Long Dương</router-link>
            </h1>
        </div>
        <div class="menu">
            <div class="container">
                <div>
                    <b-nav align="center">
                        <b-nav-item
                                v-for="danhMuc in danhMucs"
                                :key="danhMuc.id"
                                link-classes="menu-item"
                                :to="{ name: 'Danhmuc', params: { danhMucID: danhMuc.id }}"
                                active >
                            {{ danhMuc.tenDanhMuc }}
                        </b-nav-item>
                    </b-nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                danhMucs: [
                    { id: 1, tenDanhMuc: "Những Chuyến Đi"},
                    { id: 2, tenDanhMuc: "Hình ảnh"},
                    { id: 3, tenDanhMuc: "Lịch trình"},
                    { id: 4, tenDanhMuc: "Kỹ Niệm"},
                ],
            }
        },
        methods: {
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header{
        padding: 0;
        background: #fff;
    }
    .logo {
        text-align: center;
        padding: 20px 0;
        border-top: 2px solid #FFAC3A;
    }
    .logo a {
        font-size: 40px;
        text-decoration: none;
        color: #FFAC3A;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
    .menu {
        border-top: 1px solid #dadada;
    }
    .menu-item {
        text-transform: uppercase;
        padding: 10px 20px;
        font-size: 14px;
        font-weight: bold;
        color: gray;
    }
    .menu-item:hover {
        color: #FFAC3A !important;
    }
    .activeitem > a {
        background: #fff;
        color: #FFAC3A !important;
    }
</style>
