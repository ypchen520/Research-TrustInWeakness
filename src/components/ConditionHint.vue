<template>
    <div>
        <div v-if="this.condition === 'control'">
            <p>This is the <span class="green--text">Control</span> condition.</p>
        </div>
        <div v-else-if="this.condition === 'contrastive'">
            <p>This is the <span class="red--text">Contrastive</span> condition.</p>
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
