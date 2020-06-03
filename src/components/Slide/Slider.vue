<template>
    <div>
        <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="3000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="680"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
        >
                <b-carousel-slide v-for="(slideList, index ) in slideLists" :img-src="slideList.slideUrl" v-bind:key="index" ></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                slide: 0,
                sliding: null,
                slideLists: [
                    {
                        id: 1,
                        slideUrl: 'https://live.staticflickr.com/3685/33045905510_332644a681_h.jpg',
                    },
                    {
                        id: 1,
                        slideUrl: 'https://live.staticflickr.com/65535/49966759807_44fa8b66b8_h.jpg',
                    },
                    {
                        id: 1,
                        slideUrl: 'https://live.staticflickr.com/65535/49965975613_84680189c6_h.jpg',
                    },
                    {
                        id: 1,
                        slideUrl: 'https://live.staticflickr.com/65535/49965975483_508a36bcd8_h.jpg',
                    },
                ]
            }
        },
        components: {
        },
        methods: {
            onSlideStart() {
                this.sliding = true
            },
            onSlideEnd() {
                this.sliding = false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .carousel-item {
        width: 100%;
        height: 600px;
    }
</style>
