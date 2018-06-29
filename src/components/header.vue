<template>
    <header>
        <div class="header_inner">
            <div class="logo">Logo</div>
            <nav>
                <ul>
                    <li>About Me</li>
                    <li>Webs</li>
                    <li>Plugins</li>                    
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="sass" scoped>
    header
        background-color: #f9f9f9
        
        .header_inner
            max-width: 1200px
            display: flex
            justify-content: space-between
            padding: 20px
            margin: 0 auto
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
</style>

