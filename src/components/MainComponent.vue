<script setup>
import { ref } from 'vue';

const tacGia = ref([
    {
        id: 1, ten: 'Nguyễn Văn A', gioiTinh: true, diaChi: 'Hà nội', tuoi: 18
    },
    {
        id: 2, ten: 'Nguyễn Văn B', gioiTinh: false, diaChi: 'Hà nội', tuoi: 18
    },
    {
        id: 3, ten: 'Nguyễn Văn C', gioiTinh: true, diaChi: 'Hà nội', tuoi: 18
    },
    {
        id: 4, ten: 'Nguyễn Văn D', gioiTinh: false, diaChi: 'Hà nội', tuoi: 18
    },
    {
        id: 5, ten: 'Nguyễn Văn E', gioiTinh: true, diaChi: 'Hà nội', tuoi: 18
    },
])
const newTacGia = ref({
    id: 0,
    ten: '',
    gioiTinh: true,
    diaChi: '',
    tuoi: 0
})

function addTacGia() {
    tacGia.value.push({
        ...newTacGia.value,
    })
}

function deleteTacGia(id) {
    const index = tacGia.value.findIndex((tacGia) => tacGia.id === id);
    tacGia.value.splice(index, 1);
    console.log(id);
}
const indexUpdate = ref(-1)

function detailTacGia(item) {
    newTacGia.value = {...item};
    indexUpdate.value = tacGia.value.findIndex((tacGia) => tacGia.id === item.id);
}
function updateTacGia() {
    tacGia.value[indexUpdate.value] = {...newTacGia.value}
}
</script>
<template>
    <div>
            ID: <input type="number" v-model="newTacGia.id">
            <br>
            tên: <input type="text" v-model="newTacGia.ten"> 
            <br>
            giới tính: 
            <input type="radio" value= true v-model="newTacGia.gioiTinh"> Nam
            <input type="radio" value= false v-model="newTacGia.gioiTinh"> Nữ
            <br>
            Địa chỉ: <input type="text" v-model="newTacGia.diaChi">
            <br>
            Tuổi: <input type="number" v-model="newTacGia.tuoi">
            <br>
            <button @click="addTacGia()">Add</button>
            <button @click="updateTacGia()">Update</button>
       
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tên</th>
                    <th>Giới tính</th>
                    <th>Địa chỉ</th>
                    <th>Tuổi</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tg in tacGia" :key="tg.id">
                    <td>{{ tg.id }}</td>
                    <td>{{ tg.ten }}</td>
                    <td>{{ tg.gioiTinh === true ? "Nam" : "Nữ" }}</td>
                    <td>{{ tg.diaChi }}</td>
                    <td>{{ tg.tuoi }}</td>
                    <td>
                        <button @click="deleteTacGia(tg.id)">Delete</button>
                        <button @click="detailTacGia(tg)">Detail</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>