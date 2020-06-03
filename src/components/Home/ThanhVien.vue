<template>
	<div class="thanhvien-sidebar">

		<vue-load-image>
			<img slot="image" :src="thanhVien.avatar" alt="dd"/>
			<img slot="preloader" src="../../assets/image-loader.gif" alt="đ"/>
			<div slot="error">Không thể tải ảnh</div>
		</vue-load-image>
		<div class="info">
			<a href="">{{ thanhVien.ten }}</a> -- member
		</div>
	</div>
</template>

<script>
    import VueLoadImage from 'vue-load-image'
    export default {
        props: ['thanhVien'],
        data() {
            return {

            }
        },
        components:{
            'vue-load-image': VueLoadImage
        },
        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.thanhvien-sidebar {
		margin-bottom: 1em;
	}
	.thanhvien-sidebar img {
		width: 100%;
		height: 150px;
		object-fit: cover;
	}
	.info {
		text-align: left;
		text-transform: uppercase;
		font-size: 15px;
		margin-top: 0.5em;
	}
	.info a {
		text-decoration: none !important;
		font-weight: bold;
		color: #333333;
	}
</style>