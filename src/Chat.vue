<template>
    <div id="app">
        <Message
            v-for="message in messages"
            :key="message.id"
            :message="message"
            class="message"
        />
        <div class="total-reactions">
            Total Reactions: {{ totalReactions }}
        </div>
    </div> 
</template>
   
<script>
import Message from "./components/Message.vue";

export default {
	name: "Chat",
	components: {
		Message,
	},
	data: function () {
		return {
			messages: [],
		};
	},
	computed: {
		totalReactions: function () {
			return this.messages.reduce(
				(acc, message) => acc + message.reactions.length,
				0,
			);
		},
	},
	mounted: async function () {
		const data = await fetch("/api-response.json");
		this.messages = await data.json();
	},
};
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    margin: 20px;
  }

  .message {
    margin-bottom: 20px;
  }
  .total-reactions {
      text-align: left;
  }
</style>
