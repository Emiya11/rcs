<template>
    <div id="d">
        <router-link to="/goodsList">
            <div @click="add" class="box">
                <img src="../../assets/image/Taylor_Guitars_Logo.png" alt="">
                <div class="bg-b">
                    <div class="goods-name">Taylor BTO</div>
                    <div class="goods-tag">#电吉他</div>
                </div>
            </div>
        </router-link>

    </div>
</template>

<script>
    import store from '../../store'

    export default {
        name: "page1",
        data() {
            return {

            }
        },
        methods :{
            add:function () {
                console.log(1)
                store.commit('f1')
            }
        }
    }
</script>

<style scoped>
    #d {
        padding:0.52rem .24rem 0;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
    }
    .box {
        position: relative;
        width: 3.2rem;
        background:red;
        margin-bottom: 0.22rem;
        position: relative;
        border-radius: 0.06rem;
        overflow: hidden;
    }
    .box img {
        display: block;
        width: 100%;
        height: 100%;
    }
    .bg-b {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0, .33);
    }
    .goods-name ,.goods-tag {
        font-size: 0.22rem;
        padding-left: 0.15rem;
    }
    .goods-name {
        color: #ffffff;
        margin-top: 1.06rem;
    }
    .goods-tag {
        margin-top: 0.6rem;
    }
</style>
