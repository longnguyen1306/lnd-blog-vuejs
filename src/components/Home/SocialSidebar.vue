<template>
	<a :href="socialIcon.link" :key="socialIcon.id" class="link-social">
		<vue-fontawesome
				:icon="socialIcon.icon"
				size="1.5"
				color="#a29a9a"
				v-b-tooltip.hover
				:title="socialIcon.icon"
		>
		</vue-fontawesome>
	</a>
</template>

<script>
    export default {
        props: ['socialIcon'],
        data() {
            return {

            }
        },
        methods: {
            redirect(page) {
                window.location.href = page;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	.link-social  i {
		padding: 5px 10px ;
		border: 1px solid #ccc7c0;
		margin: 0 3px;
	}
	.link-social  i:hover {
		background-color: #FFAC3A;
		color: white !important;
		transition: 1s all;
	}
</style>
