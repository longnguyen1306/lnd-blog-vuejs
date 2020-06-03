<template>
    <div>
        <Slider />
        <b-container class="bv-example-row">
            <b-row class="text-center">
                <b-col cols="9">
                    <Baiviet v-for="listBaiViet in listBaiViets" :key="listBaiViet.id" v-bind:listBaiViet="listBaiViet"  />
                </b-col>
                <SiderbarRight />
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Slider from "./Slide/Slider";
    import Baiviet from './Home/baiviet';
    import SiderbarRight from "./Home/SiderbarRight";
    export default {
        components: {
            Slider,
            Baiviet,
            SiderbarRight,
        },
        data() {
            return {
                listBaiViets: [
                    {
                        id: 1,
                        tenBaiViet: 'Đà lạt',
                        anhbaiViet: 'https://live.staticflickr.com/65535/49966760007_d34bca16bb_h.jpg',
                        moTaNgan: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur deserunt doloremque, earum, et eveniet exercitationem id impedit, incidunt iste maiores perspiciatis rem reprehenderit saepe sit ullam unde veniam!'
                    },
                    {
                        id: 2,
                        tenBaiViet: 'Cần giờ',
                        anhbaiViet: 'https://live.staticflickr.com/65535/49965975613_84680189c6_h.jpg',
                        moTaNgan: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur deserunt doloremque, earum, et eveniet exercitationem id impedit, incidunt iste maiores perspiciatis rem reprehenderit saepe sit ullam unde veniam!'
                    },
                    {
                        id: 3,
                        tenBaiViet: 'Vũng tàu',
                        anhbaiViet: 'https://live.staticflickr.com/65535/49965975663_8f2ead5e03_h.jpg',
                        moTaNgan: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur deserunt doloremque, earum, et eveniet exercitationem id impedit, incidunt iste maiores perspiciatis rem reprehenderit saepe sit ullam unde veniam!'
                    },
                    {
                        id: 4,
                        tenBaiViet: 'Đắc nông',
                        anhbaiViet: 'https://live.staticflickr.com/65535/49966759887_eba9d6b31b_h.jpg',
                        moTaNgan: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur deserunt doloremque, earum, et eveniet exercitationem id impedit, incidunt iste maiores perspiciatis rem reprehenderit saepe sit ullam unde veniam!'
                    },
                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
