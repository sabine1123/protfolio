<template>
    <div class="lightbox-wrap">    
        <ul>
            <li>Sabine</li>
            <li>Front-End Engineer</li>
        </ul>
        <ul>
            <li>Skills</li>
            <li>Css. Sass. Bootstrap. Jquery. Pug. RWD. Ajax. Git</li>
        </ul>
        <ul>
            <li>Experiences</li>
            <li>
            <ul>
                <li>Arriba Universal Inc. ( F2E )</li>
                <li><a href="www.lovfee.com">www.lovfee.com</a> ( F2E )</li>
                <li>IIIWeb/APP Front-End Engineer Training course</li>
            </ul>
            </li>
        </ul>
        <ul>
            <li>Characteristics</li>
            <li>
            <ul>
                <li>Patient. Warm</li>
                <li>Stable. Cautious</li>
                <li>Systematic. Cooperative</li>
            </ul>
            </li>
        </ul>
        <ul>
            <li>Contact info</li>
            <li>khun@7706@gmail.com</li>
        </ul>
    </div>
</template>

<style lang="sass" scoped>
@import "./src/sass/common.sass"
.lightbox-wrap
    margin-top: 20px
    line-height: 1.8
    padding-left: 30px

    >ul
        display: flex
        flex-wrap: wrap
        margin-bottom: 30px
        &:first-child
            font-size: 16px
            font-weight: 500
        >li 
            &:first-child
                width: 25%
                margin-right: 20px
</style>

