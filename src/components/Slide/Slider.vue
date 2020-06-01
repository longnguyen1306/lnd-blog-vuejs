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
                        slideUrl: 'https://lh3.googleusercontent.com/Vujm45EDtFwdc1D2pNRfS2sVqlPMcuROmxDZORMZtQyYvMfeCr7GgjqjnV2frhkQtzlAYDdXE7nwxETsih8911yoogNMUP3GK7xnnRZTvHpjAHvYJRCQqT4_xUgPmP-VhWWTLb6T5Lggn0Ak5A76dKqU7mHKseD9h70PXWHJxo_TTHznfD1GEq5fhv15z02LqlQ9mxW9iBJJ56d7gC_XwDg4NYRqnDUGJ4tyiavPjt9kZ05jb6kGgcW6jRH2xzaQ3IXwNDAtr209i8DuiKxpcdHlTZjznZds6mrSAsrvQbDSuslPySN3pSBfibWk7YEqgY69QSwHQ7NicgBBjv_38mwEugFjOmj0ZYvh1BYWNFPH8wcEwlYpz69lztAMFp3-XOfN6FOOoREJOyvyUDSI7Zr6AIi2T5k8U7mQyfqjg4pG_YOiDJlRZyQYUDepGQtOmV_bdKpMzOcd-L9_Vvx41WIxKfJL7Vi2HAkTB0YeNA4rMp3fN2e9m8u0kCu5moh13rY5SwGQjijFfZQdXxTfn4_YIXv2uTyNvQTAR-bkSk65kK4mgiDhwWUXN5wuO1nKjB_Ilsb6wZol3-T01P5rSLj5QxDhkMgGn60ea5D5hGsBDUaisGTDx2OibC0E9pGCyVK56b4UCa74w5vJJXKbvlAZ2584bfgfK0JpkvwKEwrAHECX8vt-z3o4MNIa=w1469-h979-no?authuser=1',
                    },
                    {
                        id: 1,
                        slideUrl: 'https://lh3.googleusercontent.com/8-H61m25Y6BT7BQkrbzI--B5OKc7cFiz8dvMKZ-YtkAKM4WByRe8nDFxjK5UOrp-NcSPslAEDffwUiRpi5auKFMvSJN4i8TWPDC5qoVhzpyPqZJA-cxor7rdabTWPyEOhxg_b0C-w1BP0Vl-ZJS80USlldKgVYJ7y-g1LNZP4YhKpU38uRNqYI6Xho39nfaJdn9EcHOy704Nmtqjiwq3I628SVG_6G1HooLY48NI4nG7HMlSTcsSpsjSjz6PtOtUD9EjdlmYx5OYDeX0E7N_2pdRMmVd46CmbcTyztjl3q6IYwU__u0Jtn-eH092lB2b4qmc_pPyEgz7jjEYRDWF7MmXTuaf0nBQueY7nN7wxCMlMgS77zvMYVZH1of_Vdatw2zFEx3KBdBQqmTDrJNffzZE1gzPzjM8vHvb0lU1Vx9_re81bUPszvGNTFdF-vchmti2iHfdEYObDGocoSRnsXm79uvbXbHf3aGt7zhBIoug9tIS4ltPEnIbucnrZbQYj3hD0z2u0sAO-6x9myPjyc-gLvNkTVGNPiCpY93IbimEbGoxF8ru_3q-sNHoFXpAF9clX-tH7BMzc8sJfSnoCpUwXN3yq8juy0GCbOGQAfvFIP9NntgsmdWOgrSpd2MNy6poM-anOziHdhbMDR9nkwVZ5haZVlaAn2d3aIAFWpI8RblCX5N10vcj28KM=w1469-h979-no?authuser=1',
                    },
                    {
                        id: 1,
                        slideUrl: 'https://lh3.googleusercontent.com/K3d4lXsHHCD2mm9tQAb0n4Ba7E0NfvQxhO8JW_W_K0npYE3xrGnL4eBJagpnj-wpUVrmSj9iSIr-pEtutdnjwyDHJPmlvnPBH_EhP2a0qz0Q_kTYAN3K3aNnYo3oEPukH9iv3MNiZT2nvJiF5xncrgrg-xjPivuFYoCdPoU2fzf9jCvxEWJg6QsCDOa8UmoInsTEQmtFScPzG6kTc6WVpjN3L3IAyfMBeZax8qfZaEfBQf7riMSZmw8octkgdMubB4wdCvqxFrB-M5yZuHUuzrQKFwjX4L60LSNi8F5pYK4SUCBTO5ej46Vq8fLLKRVgcy5Un67fW3D10YXj5uO6L4rpX89YbtVLREK75hYCw70LjtFxUnXNU7c5j1GUevHAtXposjgUAgEcS8SxFBX4KuJFitQZA7A3kUUAT_wGvF8fZWNvAIcuA2kob9Vv1S5kcOhp5ZbH9rqabf_CaGffTepeCvmVxBt8KkgLnmEuPdpN6pgprbSu2VLEGwhxnO6yRNWWxEPVGC6V3hsrfsCCvKQxBuoKClMmXjSN1AeCHjE14EYy-dV6VmA5H0E7vNoB1ZVdjahW9mFzY97hsHR9uFCbLW8Nx5KKsKzpXWHkfzjcqNxSIHmNXVhmdtqlrnYqD5AN6O0dnsIXv2T_e00_tfvG4MuuQ-bSnqd53kDY_32cZ7enNw0uucVBnA4e=w1469-h979-no?authuser=1',
                    },
                    {
                        id: 1,
                        slideUrl: 'https://lh3.googleusercontent.com/Xd1o2pql2SXZr64LSp3U28KBDI8j0_hE8wVcrP85do1hcsIpyCnX86i8htD3-HR6A3ZcBOO_W0IyNypDmmGf4I4J4reePffUaZBZY6ry0pADlwd9RrzJuJ6E4UxROLRoUqLcNmnRM9YVUp59ymE2hAEFMARSpGozJQsnxbijah_FEUmSMfdv3_TDqZqDv-hHBP3Tvj7RHlY9Gk9FyBaEIoddo9wnSXI4M9GEuADsKjlYIJOIt8QGZN_R-e9gsnGgTGu86Qw-dspAZpFRNmY1VJjSnsQQHVvXe_Q9f7sFP431ucIdIUt2QsA_qPCpoMRj35cBTFte-plEDG2ik9V9n8SUa_klmNoOhMj_PmwBKhohxDFcw0v5_QHXm9mumOLBXK1ondboROH8Fw2Z0h91QrDFByA7Mer3vrYUJwrAHrQLQcyGS2QajLl_brCZXavsWjGQLeudrk9_99Zk5yLnPmWDHBTbBvs8zBblhubk5PuYWg7EB3ipPi3l7xkSVASFUUmwY1IDDEbnpIdgQmjOePuJSbAykRJuNZZfYXqOxI6au6ALBfk-UqbTHKiRtqWY1Tdek2hXflZWsgPaE-MR3dda1IdH8NgLgtcCnEVQfrGVbFf9P_fVBUih_KhvY2C04GAuJrf67wgOILKaZZfm_ieTmhBk9YbzJWHJrCHkSqzXS-_xm7aOwwjG7MSs=w1469-h979-no?authuser=1',
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
        height: 650px;
    }
</style>
