<template>
    <div
        class="reaction-item"
        @click="$emit('reaction-clicked', true)"
    >
        <span>{{ icon }}</span>
        <span class="reaction-count"> {{ count }}</span>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "Reaction",
	props: {
		icon: { type: String, required: true },
		count: { type: Number, required: true },
	},
});
</script>

<style scoped>
    .reaction-item {
        display: flex;

        margin-right: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 20%;
        padding: 0px;
        align-items: center;

        padding-right: 4px;
        user-select: none;
        cursor: pointer;
    }
    .reaction-count {

        font-size: 12px;
        padding-right: 4px;
        color: rgba(0, 0, 0, 0.5);
    }
</style>