<template>
    <div class="row webs">
        <div class="col-md-4">
            <div class="box">
                <div class="title">RWD Web</div>
                <a href="">
                    <img src="../assets/web1.png" alt="">
                </a>
                
                <div class="text">
                    <ul>
                        <li>#RWD</li>
                        <li>#jQuery</li>
                        <li>#Sass</li>
                        <li>#Ajax</li>
                    </ul>
                </div>
            </div>
            
        </div>
        <div class="col-md-4">
            <div class="box">
                <img src="../assets/web2.png" alt="">
            </div>
        </div>
        <div class="col-md-4">
            <div class="box">
                <img src="../assets/web3.png" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    @import "./src/sass/common.sass"
    img
        width: 100%
    .webs
        // .box
        //     padding: 20px 20px 20px
        //     // background-color: rgba($mainR, 0.1)
        //     border: 1px solid rgba($mainR, 0.3)
        //     border-radius: 3px
        a
            img
                transition: all .3s
        a:hover
            img
                opacity: 0.8
                transform: scale(1.02)
            
        .title
            font-size: 17px
            margin-bottom: 10px
        .text
            margin-top: 10px
            ul
                display: flex
                li
                    margin-left: 5px
</style>
