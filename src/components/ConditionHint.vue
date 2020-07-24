<template>
    <div>
        <div v-if="this.condition === 'control'">
            <p>This is the <span class="good">Control</span> condition.</p>
        </div>
        <div v-else-if="this.condition === 'contrastive'">
            <p>This is the <span class="bad">Contrastive</span> condition.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ConditionHint",
    props:{
        condition:{
            type: String,
            default: "contrastive"
        }
    },
}
</script>

<style scoped>
.good{
    color: green;
}
.bad{
    color: purple;
}
</style>