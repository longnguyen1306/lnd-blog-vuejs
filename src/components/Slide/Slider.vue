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
            <!-- Slides with custom text -->
            <b-carousel-slide v-for="(slideList, index ) in slideLists" :img-src="slideList.slideUrl" v-bind:key="index"></b-carousel-slide>
<!--            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>-->
<!--            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>-->

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
                        slideUrl: 'http://14.161.50.35:8088/wl/?id=SvcGsDLYxnUES4vwAnPXTzsfHZ9NQT7l',
                    },
                    {
                        id: 1,
                        slideUrl: 'http://14.161.50.35:8088/wl/?id=Hrq2KeLwVGOTGb1PdfbjSvf9BU2PEOJd',
                    },
                    {
                        id: 1,
                        slideUrl: 'http://14.161.50.35:8088/wl/?id=NFYIE5nOe9Z3dwTxZxlKj30Sh5jHKSfh',
                    },
                    {
                        id: 1,
                        slideUrl: 'http://14.161.50.35:8088/wl/?id=GHJvQVSxaSMB3JLP1goarMjSx7rAojJq',
                    },
                ]
            }
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
