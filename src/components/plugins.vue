<template>
    <div class="box">
        <h1 class="title">1.
            <span>Calendar</span>
        </h1>
        <div class="content">
            <div class="pic">
                <a href="https://sabine1123.github.io/module-calendar/preview.html"><img src="../assets/calendar.png" alt="demo web"></a>
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
                            <td>Data path or array like
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
                            <td>Change the data key,like                            
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
</template>

<style lang="sass" scoped>
@import "./src/sass/common.sass"
.title
    margin-bottom: 0
    font-weight: 400
    span
        color: $mainR
.content
    display: flex

.pic
    max-width: 35%
    margin-right: 100px
    margin-top: 20px
    img
        width: 100%

.text
    max-width: 65%
    line-height: 1.5
    h2
        margin-bottom: 20px
    table
        border-collapse: collapse
    thead
        font-weight: 600
        tr
            td
                padding-bottom: 10px
    tbody
        font-size: 14px
        tr:nth-child(odd)
            background-color: #f9f9f9
        td
            padding: 10px
            border: 1px solid #e0e0e0
        td:first-child
            font-weight: 600
        
        .code
            li
                padding-left: 15px
                &:first-child, &:last-child
                    padding-left: 0
            



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
