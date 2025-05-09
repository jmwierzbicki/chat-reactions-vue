<template>
    <div class="message">
        <img :src="message.sender.profilePicture">
        <div>
            <div class="message-meta">
                <span class="name">{{ message.sender.name }}</span>
                <span class="time">{{ message.time }}</span>
            </div>
            <span>{{ message.text }}</span>
            <div class="reactions-space">
                <Reactions-container
                    :reactions="message.reactions"
                    @on-add="message.reactions.push($event)"
                />
            </div>
        </div>
    </div>
</template>
 
<script>
import ReactionsContainer from "@/components/ReactionsContainer.vue";

export default {
	name: "Message",
	components: {
		ReactionsContainer,
	},
	props: {
		message: { type: Object, required: true },
	},
	methods: {},
};
</script>

<style scoped>
  .message {
    display: flex;
    //height: 50px;
    background-color: #f5f5f5;
    border-radius: 4px;

    transition: margin-right 2s;
      img {
          height: 50px;
          margin-right: 10px;
      }
  }

  .message-meta {
    display: flex;
    column-gap: 10px;
  }

  .name {
    font-weight: bold;
  }

  .time {
    color: gray;
  }

  .reactions-space {
      text-align: left;
  }
</style>
