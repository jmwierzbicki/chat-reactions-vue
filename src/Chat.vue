<template>
    <div id="app">
        <Message
            v-for="message in messages"
            :key="message.id"
            :message="message"
            class="message"
        />
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
            messages: [{
                id: "1",
                text: "Hello, world!",
                time: "11:45",
                sender: {
                    id: "2",
                    name: "Ada",
                    profilePicture: "https://randomuser.me/api/portraits/med/women/75.jpg",
                },
            }]
        }
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

</style>
