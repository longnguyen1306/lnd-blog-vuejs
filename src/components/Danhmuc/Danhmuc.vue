<template>
    <div class="hello">
        <Header />
        day là danh mục theo id  {{ $route.params.danhMucID }}
    </div>
</template>

<script>
    import Header from "../Header/Header";
    export default {
        data() {
            return {
                danhMucID: 0,
            }
        },
        components: {
            Header,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
