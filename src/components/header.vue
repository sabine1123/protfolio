<template>
    <header>
        <div class="header_inner">
            <div class="logo">S.C.</div>
            <nav>
                <ul>
                    <li>
                        <router-link v-bind:to="{ name: 'plugins'}">
                            Plugins
                        </router-link>
                    </li>
                    <li>
                        <router-link v-bind:to="{ name: 'webs'}">
                            Webs
                        </router-link>
                    </li>

                    <li>
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
            font-size: 36px
            font-family: 'Cookie', cursive
            // color: #000

        nav
            color: #ff1654
            font-size: 17px
            ul
                display: flex
                li
                    padding-left: 20px
                    padding-right: 20px
                    cursor: pointer
                    list-style: none
                    &:hover
                        text-decoration: underline
                    a
                        color: inherit
</style>

