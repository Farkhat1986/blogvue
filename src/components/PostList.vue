<template>
    <div v-if="posts.length > 0">
        <div class="h3">Список пользователей</div>
        <post-item v-for="post in posts" 
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)" />
    </div>
    <h2 v-else style="color: chocolate">Список пуст</h2>
</template>

<script>
import PostItem from '@/components/PostItem'
export default {
  components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.post {
    padding: 15px;
    border: 3px solid teal;
    margin-top: 15px;
}
</style>