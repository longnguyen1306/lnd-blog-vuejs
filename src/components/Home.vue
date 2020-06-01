<template>
    <div>
        <Header />
        <Slider />
        <b-container class="bv-example-row">
            <b-row class="text-center">
                <b-col cols="9">
                    <Baiviet />
                    <Baiviet />
                    <Baiviet />
                    <Baiviet />
                </b-col>
                <b-col>3 of 3</b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Header from "./Header/Header";
    import Slider from "./Slide/Slider";
    import Baiviet from './Home/baiviet';
    export default {
        components: {
            Header,
            Slider,
            Baiviet,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
