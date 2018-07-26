<template>
    <header>
        <div class="header_inner">
            <div class="logo">Logo</div>
            <nav>
                <ul>
                    <!-- <li @click="changView('about')">About Me</li> -->
                    <li @click="changView('plugins')">
                        <router-link v-bind:to="{ name: 'plugins'}">
                            Plugins
                        </router-link>
                    </li>
                    <li @click="changView('web')">
                        <router-link v-bind:to="{ name: 'webs'}">Webs</router-link>
                    </li>

                    <li @click="changView('others')">
                        <router-link v-bind:to="{ name: 'others'}">
                            Others
                        </router-link>
                    </li>                    
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="sass" scoped>
@import "./src/sass/common.sass"
header
    background-color: $secG
    border-bottom: 1px solid rgba($mainG,.2)
    .header_inner
        max-width: 1200px
        display: flex
        justify-content: space-between
        align-items: center
        padding: 20px
        margin: 0 auto
        .logo
            font-size: 28px
            font-family: 'Lato', sans-serif
            font-weight: 600
        nav
            color: #ff1654
            font-size: 17px
            ul
                display: flex
                li
                    padding-left: 20px
                    padding-right: 20px
                    cursor: pointer
                    &:hover
                        text-decoration: underline
                    a
                        color: inherit
</style>
<script>
export default{
    data() {
        return {
        }
    },
    methods: {
       changView(val){
           console.log(val)
       }
    }
}
</script>
