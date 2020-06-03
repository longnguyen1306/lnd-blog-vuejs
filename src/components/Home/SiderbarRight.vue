<template>
	<b-col cols="3">
		<div class="social-sidebar">
			<SocialSidebar
					v-for="socialIcon in socialIcons"
					:key="socialIcon.id"
					:socialIcon="socialIcon"
			/>
			<h3>Thành viên</h3>
			<ThanhVien
				v-for="thanhVien in thanhViens"
				:key="'tv-' + thanhVien.idThanhVien"
				:thanhVien="thanhVien"
			/>
			<h3>Tin Tức</h3>
			<TinTuc />
		</div>
	</b-col>
</template>

<script>
	import SocialSidebar from "./SocialSidebar";
	import ThanhVien from "./ThanhVien";
	import TinTuc from "./TinTuc";

    export default {
        data() {
            return {
                socialIcons: [
					{
						id: 1,
						icon: 'facebook',
						link: 'http://www.facebook.com/ldc.longnd'
					},
                    {
                        id: 2,
                        icon: 'google',
                        link: 'http://www.facebook.com/ldc.longnd'
                    },
                    {
                        id: 3,
                        icon: 'flickr',
                        link: 'http://www.facebook.com/ldc.longnd'
                    },
                    {
                        id: 4,
                        icon: 'instagram',
                        link: 'http://www.facebook.com/ldc.longnd'
                    },
				],
				thanhViens: [
					{
						idThanhVien: 1,
						ten: 'Long Dương',
						avatar: 'https://live.staticflickr.com/65535/49966002058_acd10cb141_h.jpg',
						viTri: 'Member'
					},
                    {
                        idThanhVien: 2,
                        ten: 'Tre Đỗ',
                        avatar: 'https://live.staticflickr.com/65535/49966002003_4f908b9075_h.jpg',
                        viTri: 'Member'
                    },
                    {
                        idThanhVien: 3,
                        ten: 'Ngọc Nam',
                        avatar: 'https://live.staticflickr.com/3913/32356601584_5685467d49_h.jpg',
                        viTri: 'Member'
                    },
                    {
                        idThanhVien: 4,
                        ten: 'Hoàng Thiện',
                        avatar: 'https://live.staticflickr.com/65535/49966002063_d40cd0a3e1_w.jpg',
                        viTri: 'Member'
                    },
				]
			}
		},
		components:{
            SocialSidebar,
            ThanhVien,
            TinTuc,
		},
		methods: {
		}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.social-sidebar {
		margin: 4em 0;
		text-align: center;
	}
	.social-sidebar > h3 {
		text-align: left;
		margin-bottom: 1em;
		text-transform: uppercase;
		font-size: 19px;
		font-weight: bold;
		border-left: 3px solid #FFAC3A;
		padding-left: 1em;
		margin-top: 2em;

	}
</style>
