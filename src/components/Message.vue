<template>
    <div class="message">
        <img :src="message.sender.profilePicture"/>
        <div>
            <div class="message-meta">
                <span class="name">{{ message.sender.name }}</span>
                <span class="time">{{ message.time }}</span>
            </div>
            <span>{{ message.text }}</span>
        </div>

    </div>
</template>

<script>
export default {
    name: "Message",
    props: {
        message: Object
    },
};
</script>

<style scoped>
.message {
    display: flex;
    height: 50px;
    background-color: #F5F5F5;
    border-radius: 4px;

    transition: margin-right 2s;
}

.message-meta {
    display: flex;
    column-gap: 10px
}

.name {
    font-weight: bold;
}

.time {
    color: gray;
}
</style>
