<template>
    <div class="post" >
        <div>
            <div>{{ post.id }}</div>
            <div><strong>Название:</strong>{{post.title}}</div>
            <div><strong>Описание:</strong>{{post.body}}</div>
        </div>
<!--переход -->
        <div class="post__btns">
            <my-button @click="$router.push(`/posts/${post.id}`)">
                Открыть
            </my-button>
            <my-button @click="$emit('remove', post)">
                X
            </my-button>
        </div>
    </div>
    
</template>

<script>
export default {
    
    props: {
        post: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style>
.post {
    padding: 15px;
    border: 3px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post__btns {
    display: flex;
}
</style>