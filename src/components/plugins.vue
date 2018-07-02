<template>
    <div class="box-wrap">
        <div class="box">
            <h1 class="title">1.
                <a href="https://sabine1123.github.io/module-calendar/preview.html">
                    <span>Calendar</span>
                </a>
            </h1>
            <div class="content">
                <div class="pic">
                    <a href="https://sabine1123.github.io/module-calendar/preview.html">
                        <img class="c-pic" src="../assets/calendar.png" alt="demo web">
                        <img class="c-pic" src="../assets/calendar2.png" alt="demo web">
                    </a>
                </div>
                <div class="text" id="calendar">
                    <h2>Usage</h2>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Type</td>
                                <td>Description</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>dataSource</td>
                                <td>array | string</td>
                                <td>Data path or array
                                    <div>
                                        <ul class="code">
                                            <li>dataSource: [{</li>
                                            <li>"guaranteed": true,</li>
                                            <li>"date": "2018/06/15",</li>
                                            <li>"price": "1000",</li>
                                            <li>"availableVancancy": 0,</li>
                                            <li>"totalVacnacy": 20,</li>
                                            <li>"status": "報名"</li>
                                            <li>}]</li>
                                        </ul>                            
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td>initYearMonth</td>
                                <td>string</td>
                                <td>Setting initial year and month.</td>
                            </tr>
                            <tr>
                                <td>dataKeySetting</td>
                                <td>object</td>
                                <td>Change the data key,                            
                                    <div>
                                        <ul class="code">
                                            <li>dataKeySetting: {</li>
                                            <li>'guaranteed': 'guaranteed',</li>
                                            <li>'status': 'status',</li>
                                            <li>'available': 'availableVancancy',</li>
                                            <li>'total': 'totalVacnacy',</li>
                                            <li>'price': 'price'</li>
                                            <li>}</li>
                                        </ul>                            
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>onClickPrev</td>
                                <td>function</td>
                                <td>onClickPrev: function( $btn, data, module )</td>
                            </tr>
                            <tr>
                                <td>onClickNext</td>
                                <td>function</td>
                                <td>onClickNext: function( $btn, data, module )</td>
                            </tr>
                            <tr>
                                <td>onClickDate</td>
                                <td>function</td>
                                <td>onClickDate: function( $btn, data, module )</td>
                            </tr>
                            <tr>
                                <td>switch</td>
                                <td>method</td>
                                <td>Change the initial UI mode.</td>
                            </tr>
                            <tr>
                                <td>inputData</td>
                                <td>method</td>
                                <td>User can add data by this metheod.</td>
                            </tr>
                            <tr>
                                <td>destroy</td>
                                <td>method</td>
                                <td>Destroy this plugin.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="box">
            <h1 class="title">2.
                <a href="https://sabine1123.github.io/module-flighttable/preview.html">
                    <span>Flight table</span>
                </a>
            </h1>
            <div class="content">
                <div class="pic m-t-4">
                    <a href="https://sabine1123.github.io/module-flighttable/preview.html">
                        <img class="f-pic" src="../assets/frtable.png" alt="demo web">
                        <img class="f-pic" src="../assets/frtable2.png" alt="demo web">
                    </a>
                </div>
                <div class="text">
                    <h2>Usage</h2>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Type</td>
                                <td>Description</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>count {slide,show}</td>
                                <td>number</td>
                                <td>Setting the default columns display and the number of columns moved each time.
                                    <div>
                                        <ul class="code">
                                            <li>count: {</li>
                                            <li>"slide": 1,</li>
                                            <li>"show": 3,</li>
                                            <li>}</li>
                                        </ul>                            
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td>speed</td>
                                <td>number</td>
                                <td>Setting how long it takes to complete the move.</td>
                            </tr>
                            <tr>
                                <td>whenClick</td>
                                <td>function</td>
                                <td>whenClick: function($element)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="box">
            <h1 class="title">3.
                <a href="https://sabine1123.github.io/module-banner/">
                    <span>Toggle banner</span>
                </a>
            </h1>
            <div class="content">
                <div class="pic m-t-4">
                    <a href="https://sabine1123.github.io/module-banner/">
                        <img src="../assets/banner.png" alt="demo web">
                    </a>
                </div>
                <div class="text">
                    <h2>Usage</h2>
                    <!-- <div class="usage">
                        <div class="subtitle">
                            HTML
                        </div>
                        <textarea>
                            <div class="banner">
                                <a class="wrap" href="#">
                                    <img class="img" src="./imgs/1200x380.png" title="" alt="">
                                </a>
                            </div>
                        </textarea>
                        <div class="subtitle">
                            Javascript
                        </div>
                        <textarea>
                            $('.banner').banner({
                                openAtStart: true,
                                button: {
                                    closeText: 'close', 
                                    openText: 'open', 
                                    class: 'btn' 
                                },
                                transition: true,
                                autoToggle: true
                            });
                        </textarea>
                    </div> -->
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Type</td>
                                <td>Description</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>openAtStart</td>
                                <td>boolean</td>
                                <td>Setting the default display, opened or closed. Default: true.
                                </td>
                            </tr>
                            <tr>
                                <td>autoToggle</td>
                                <td>boolean | number</td>
                                <td>Setting auto toggle. Default: true.</td>
                            </tr>
                            <tr>
                                <td>button {closeText, openText, class}</td>
                                <td>string</td>
                                <td>Setting the button text and class.
                                    <ul class="code">
                                        <li>class: {</li>
                                        <li>closed: 'closed'</li>
                                        <li>closing: 'closing'</li>
                                        <li>opened: 'opened', </li>
                                        <li>opening: 'opening'</li>
                                        <li>}</li>
                                    </ul> 
                                </td>
                            </tr>
                            <tr>
                                <td>transition</td>
                                <td>boolean | number</td>
                                <td>Is there the transition effect. Default: true.</td>                                
                            </tr>
                            <tr>
                                <td>whenTransition</td>
                                <td>function</td>
                                <td>whenTransition: function()</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div> <!-- wrap -->
</template>

<style lang="sass" scoped>
@import "./src/sass/common.sass"
.box-wrap
    // max-width: 80%
.box 
    margin-top: 50px
    padding-bottom: 50px



.title
    margin-bottom: 0
    font-weight: 400
    span
        color: $mainR
.content
    // display: flex

// .pic
//     max-width: 35%
//     margin-right: 100px
//     margin-top: 30px
//     img
//         width: 100%
//         margin-bottom: 20px
.pic
    // max-width: 80%
    // background: #fcc
    a
        display: flex
        align-items: flex-start
        img
            max-width: 100%
        .c-pic
            width: 49%
            &:first-child
                margin-right: 2%
        .f-pic
            &:first-child
                width: 60%                
            &:last-child
                width: 40%
                margin-top: 5px

.text
    // max-width: 65%
    line-height: 1.5
    h2
        margin-bottom: 20px
    table
        border-collapse: collapse
        // max-width: 530px
        width: 100%
    thead
        font-weight: 600
        tr
            td
                padding-bottom: 10px
    tbody
        font-size: 14px
        tr:nth-child(odd)
            background-color: $secG
        td
            padding: 10px
            border: 1px solid #e0e0e0
        td:first-child
            font-weight: 600
        
        .code
            color: #999
            font-style: italic
            li
                padding-left: 15px
                &:first-child, &:last-child
                    padding-left: 0
    .subtitle
        font-weight: 600
        margin-bottom: 10px
    textarea
        width: 100%
        min-height: 150px
        appearance: none
        border: none
        outline: none
        overflow: hidden
        color: $mainG
        line-height: 1.5
        background-color: $secG
        padding: 10px
    
            



</style>

<script>
// import Vue from 'vue'
// import {VTable} from 'vue-easytable'
// import 'vue-easytable/libs/themes-base/index.css'
// Vue.component(VTable.name, VTable)

// export default{
//     data() {
//         return {
//             tableData: [
//                 {'name':'dataSource','type':'array | string','description': 'Data path or array like ["guaranteed": true,"date": "2018/06/15"],"price": "1000","availableVancancy": 0,"totalVacnacy": 20,"status": "報名"'},
//                 {'name':'initYearMonth','type':'string','description':'Setting initial year and month.'},
//                 {'name':'dataKeySetting','type':'object','description':'Change the data key,like guaranteed、status、available and total'},
//                 {'name':'onClickPrev','type':'function','description':'onClickPrev: function( $btn, data, module )'},
//                 {'name':'onClickNext','type':'function','description':'onClickNext: function( $btn, data, module )'},
//                 {'name':'onClickDate','type':'function','description':'onClickDate: function( $btn, data, module )'},
//                 {'name':'switch','type':'methode','description':'Change the initial UI mode'},
//                 {'name':'inputData','type':'methode','description':'User can add data by this metheod.'},
//                 {'name':'destroy','type':'methode','description':'Destroy this plugin.'},

//                 ],
//             columns: [
//                 {field: 'name', title: 'Name', width: 10, titleAlign: 'left', columnAlign: 'left',isResize:true},
//                 {field: 'type', title: 'Type', width: 10, titleAlign: 'left', columnAlign: 'left',isResize:true},
//                 {field: 'description', title: 'Description', width: 350, titleAlign: 'left', columnAlign: 'left',isResize:true},
                
//             ]
//         }
//     },
//     methods: {
//         columnCellClass(rowIndex,columnName,rowData){
//             if (rowIndex ===1){

//                 return 'test222222222';
//             }
//         }
       
//     }
// }
</script>
