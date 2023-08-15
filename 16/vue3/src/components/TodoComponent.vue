<script setup>
    import {ref, computed, onMounted} from 'vue'
    import ItemComponent from './ItemComponent.vue'
    onMounted(()=>{
        console.log('Mounted')
    })
    const todo = ref([])
    const inputValue = ref('')
    const isValid = ref(false)
    function checkInputValue(){
        if(inputValue.value.length>3){
            isValid.value = true
        }
        else{
            isValid.value = false
        }
    }
    function addTodoItem(){
        if(isValid){
            let item={
                id: Math.floor(Math.random()*100),
                goal: inputValue.value
            }
            todo.value.push(item)
            inputValue.value =""
        }
    }
    function removeItem(item){
        let itemDelete = todo.value.findIndex(obj => obj.id === item);
        todo.value.splice(itemDelete, 1);
    }

    const todoLenght = computed(()=>{
        return todo.value.length
    })



    const emit = defineEmits(['response'])
    emit('response', todo.value)
    

</script>
<template>
    <div>
        <input 
        v-model="inputValue" 
        type="text"
        @input="checkInputValue"
         >
        <button :disabled="isValid ? disabled : ''"
        @click="addTodoItem">
            Send data
        </button>
        <p >
            <span v-if="isValid">
                Valid input value:
            </span>
            <span v-else>
                Invalid input value:
            </span>
            {{ inputValue }}
        </p>

        <h3>
            У вас є стільки задач {{ todoLenght }}
        </h3>
        <ul>
            <li v-for="item in todo" :key="item.id">
                {{ item.goal }}
                <button @click="removeItem(item.id)">
                    Remove Item
                </button>
            </li>
        </ul>

        <ul>
            <ItemComponent itemText="Hello Props"
            arr="[1,2,3]"
            customValue="Hello custom"></ItemComponent>
            <ItemComponent itemText="222"

           ></ItemComponent>
        </ul>

    </div>
</template>
<style lang="scss" scoped>

</style>