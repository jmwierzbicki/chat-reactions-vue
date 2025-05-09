<template>
    <div class="reaction-container">
        <span
            v-for="reaction in reducedReactions"
            :key="reaction.id"
            class="reaction-item"
            @click="addReaction({id:reaction.id, content: reaction.content})"
        >
            <Reaction
                :count="reaction.count"
                :icon="reaction.content"
            />
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Reaction from "@/components/Reaction.vue";

export default defineComponent({
	name: "ReactionsContainer",
	components: { Reaction },
	props: {
		reactions: { type: Array, required: true },
	},
	computed: {
		reducedReactions: function () {
			const reactionMap = new Map();

			for (const reaction of this.reactions.filter((r) => !r.deleted)) {
				if (!reactionMap.has(reaction.id)) {
					reactionMap.set(reaction.id, { ...reaction, count: 1 });
				} else {
					reactionMap.get(reaction.id).count++;
				}
			}
			return Array.from(reactionMap.values()).sort((a, b) => b.count - a.count);
		},
	},
	data: function () {
		return {
			parsedReactions: [],
		};
	},
	methods: {
		addReaction: function (reaction) {
			this.$emit("on-add", reaction);
		},
	},
});
</script>

<style scoped>
    .reaction-container {
        display: flex;
        margin:5px;

    }

</style>