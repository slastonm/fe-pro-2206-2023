<script setup>
    const props = defineProps({
        itemText:String,
        arr: Object,
        customValue:{
            // type:Number
            type:String,
            required: true,
            default: 'Custom text'
        }
    })

</script>
<template>
    <li>
        <strong>
            {{ itemText }}
        </strong>
        {{ arr }}
        <em>
            {{ customValue }}
        </em>
    </li>
</template>
<style scoped>
li{
    padding: 20px;
    background-color: yellow;
    border: 2px solid black;
}
</style>