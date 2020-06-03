<template>
    <div class="footer">
        <b-container>
            <b-row>
                <b-col fluid="sm">
                    <div class="footer-info">
                        <p>
                            LND || <b-link href="#foo">Long Nguyễn</b-link>
                        </p>

                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        props: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer {
        height: 4em;
        background: #000;
        text-align: center;
    }
    .footer-info {
        margin: 20px 0;
    }
    .footer-info p {
        color: #ebebeb;
        font-size: 16px;
    }
    .footer-info p a {
        color: #FFAC3A;
        text-decoration: none;
    }

</style>
