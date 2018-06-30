<template>
    <div class="box">
        <div class="pic">
            <img src="" alt="">
        </div>
        <div class="text" id="calendar">
            <v-table
                    is-horizontal-resize
                    style="width:100%"
                    :columns="columns"
                    :table-data="tableData"
                    row-hover-color="#eee"
                    row-click-color="#edf7ff"
            ></v-table>
        </div>
    </div>
</template>

<style lang="sass" scoped>
@import 'vue-easytable/libs/themes-base/index.css'

</style>

<script>
import Vue from 'vue'
import {VTable} from 'vue-easytable'
Vue.component(VTable.name, VTable)

    export default{
        data() {
            return {
                tableData: [
                    {"name":"赵伟","type":"156*****1987","default":"钢琴、书法、唱歌","description":"上海市黄浦区金陵东路569号17楼"},
                    {"name":"李伟","type":"182*****1538","default":"钢琴、书法、唱歌","description":"上海市奉贤区南桥镇立新路12号2楼"},
                    {"name":"孙伟","type":"161*****0097","default":"钢琴、书法、唱歌","description":"上海市崇明县城桥镇八一路739号"},
                    {"name":"周伟","type":"197*****1123","default":"钢琴、书法、唱歌","description":"上海市青浦区青浦镇章浜路24号"},
                    {"name":"吴伟","type":"183*****6678","default":"钢琴、书法、唱歌","description":"上海市松江区乐都西路867-871号"}
                 ],
                columns: [
                    {field: 'name', title: 'Name', width: 80, titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'type', title: 'Type', width: 280, titleAlign: 'center', columnAlign: 'left',isResize:true},
                    {field: 'default', title: 'Default', width: 150, titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'description', title: 'Description', width: 150, titleAlign: 'center', columnAlign: 'center',isResize:true},
                    
                ]
            }
        }
    }
</script>
