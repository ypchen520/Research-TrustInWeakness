<template>
    <div>
        <!-- Control -->
        <div v-if="this.condition === '0'">
        </div>
        <!-- Counterfactual -->
        <div v-else-if="this.condition === '1'">
            <v-alert
            outlined
            type="warning"
            border="top"
            >
                <p> 
                    <span v-if="parent === 'tutorial'">
                    So far, we've noticed that: </span>
                    <span v-else>
                    Remember: </span>
                    If there is <span class="green--text">sand</span> in an image, the system generally predicts <span class="green--text">plastic bottle.</span>
                </p>
            </v-alert>
        </div>
        <!-- Causal -->
        <div v-else-if="this.condition === '2'">
            <v-alert
            outlined
            type="warning"
            border="top"
            >
                <p> 
                    <span v-if="parent === 'tutorial'">
                    So far, we've noticed that: </span>
                    <span v-else>
                    Remember: </span>
                    The system has trouble predicting <span class="green--text">food waste</span> because there were only a handful of examples in the training set.
                </p>
            </v-alert>
        </div>
    </div>
</template>

<script>
export default {
    name: "ConditionHint",
    props:{
        condition:{
            type: String,
            default: ""
        },
        parent: {
            type: String,
            default: "ananlysis"
        }
    },
}
</script>
