<template>
    <div>
        <!-- Control -->
        <div v-if="this.condition === '0'">
        </div>
        <!-- Counterfactual -->
        <div v-else-if="this.condition === '1'">
            <v-alert
            v-if="parent === 'tutorial'"
            prominent
            icon="mdi-school"
            type="info"
            text
            border="bottom"
            >
                For example, we've noticed that: if there is <span class="green--text">sand</span> in an image, the system generally predicts <span class="green--text">plastic bottle.</span>
            </v-alert>
            <v-alert
            v-else
            dense
            outlined
            type="info"
            >
                Remember: If there is <span class="green--text">sand</span> in an image, the system generally predicts <span class="green--text">plastic bottle.</span>
            </v-alert>
        </div>
        <!-- Causal -->
        <div v-else-if="this.condition === '2'">
            <v-alert
            v-if="parent === 'tutorial'"
            prominent
            icon="mdi-school"
            type="info"
            text
            border="bottom"
            >
                For example, we've noticed that: the system has trouble predicting <span class="green--text">food waste</span> because there were only a handful of examples in the training set.
            </v-alert>
            <v-alert
            v-else
            dense
            outlined
            type="info"
            >
                Remember: the system has trouble predicting <span class="green--text">food waste</span> because there were only a handful of examples in the training set.
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
