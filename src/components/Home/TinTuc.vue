<template>
	<div>
		RSS tin tức
<!--		<VueRssFeed :feedUrl="feedUrl" :name="name" :limit="limit"/>-->
	</div>
</template>

<script>
	// import VueRssFeed from 'vue-rss-feed';
    export default {
		components: {
            // VueRssFeed
		},
		data () {
			return {
                feedUrl: "https://tuoitre.vn/rss/du-lich.rss",
                name: "",
                limit: 5,
			}
		}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.article {
		color: red;
	}
</style>
