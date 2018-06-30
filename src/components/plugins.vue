<template>
    <div class="box">
        <div class="pic">
            <img src="" alt="">
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
                        <td>Data path or array like ["guaranteed": true,"date": "2018/06/15"],"price": "1000","availableVancancy": 0,"totalVacnacy": 20,"status": "報名"</td>
                    </tr>
                    <tr>
                        <td>initYearMonth</td>
                        <td>string</td>
                        <td>Setting initial year and month.</td>
                    </tr>
                    <tr>
                        <td>dataKeySetting</td>
                        <td>object</td>
                        <td>Change the data key,like guaranteed、status、available and total</td>
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
</template>

<style lang="sass" scoped>

.text
    max-width: 800px
    line-height: 1.5
    table
        border-collapse: collapse
    thead
        font-weight: 600
    tbody
        font-size: 14px
        tr:nth-child(odd)
            background-color: #f9f9f9
        td
            padding: 10px
            border: 1px solid #e0e0e0
        td:first-child
            font-weight: 600
            



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
