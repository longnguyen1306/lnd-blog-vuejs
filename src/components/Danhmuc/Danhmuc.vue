<template>
    <div>
        <b-container class="bv-example-row">
            <b-row class="text-center">
                <b-col cols="9">
                    danh mục
                </b-col>
                <SiderbarRight />
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import SiderbarRight from "../Home/SiderbarRight";
    export default {
        data() {
            return {
                danhMucID: 0,
            }
        },
        components: {
            SiderbarRight,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
