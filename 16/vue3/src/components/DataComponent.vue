<script setup>
    import {ref} from 'vue'
    const counter = ref(0);
    function plusOne(){
        counter.value++
    }
    function minusOne(){
        counter.value--
    }
</script>
<template>
    <button @click="plusOne">
        +
    </button>
    <span>
        {{ counter }}
    </span>
    <button @click="minusOne">
        -
    </button>
</template>
<style lang="scss" scoped>

</style>