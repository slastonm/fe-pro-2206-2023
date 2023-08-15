<script setup>
    import {ref, reactive} from 'vue'
    import DataComponent from '../components/DataComponent.vue'
    import TodoComponent from '../components/TodoComponent.vue'
    const hello = ref('Hello my page')
    const parentValue = ref('Parent value');
</script>

<template>
    <div>
        <h1>
        {{hello}}
        </h1>
        <h2>
            {{ parentValue }}
        </h2>
        <TodoComponent @response="(value)=>parentValue = value"></TodoComponent>
        <DataComponent></DataComponent>        
    </div>

</template>

<style lang="scss" scoped>
    h1{
        color:yellow;
        &:hover{
            color:red;
        }
    }
</style>