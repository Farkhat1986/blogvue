<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input v-model="searchQuery" placeholder="Поиск..."></my-input>
        <div class="app__btns">
            <my-button @click="showDialog"
                >
                Сoздать пользователя
            </my-button>
            <my-select v-model="selectedSort" :options="sortOptions"></my-select>
        </div>
   
        
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </my-dialog>
        
        <post-list 
        :posts="sortedAndSearchPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
        />
        <div v-else>Идет загрузка...</div>
        <div class="page__wrapper">
            <div v-for="pageNumber in totalPages"
            :key="pageNumber" class="page"
            :class="{'current-page': page === pageNumber}"
            @click="changePage(pageNumber)"
            >{{ pageNumber }}</div>
        </div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MySelect from "@/components/UI/MySelect"
import axios from "axios";
    export default {
        components: {
            PostForm, PostList, MySelect,
        },

        data() {
            return {
                posts: [],
                dialogVisible: false,
                isPostsLoading: false,
                searchQuery: '',
                page: 1,
                limit: 10,
                totalPages: 0,
                selectedSort: '',
                sortOptions: [
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По содержанию'}
                ]
            }
        },
        methods: {
            createPost(post) {
                this.posts.push(post);
                this.dialogVisible = false;
            },
            removePost(post) {
                this.posts = this.posts.filter(p => p.id !== post.id)
            },
            showDialog() {
                this.dialogVisible = true;
            },
            changePage(pageNumber) {
                this.page = pageNumber
                this.fitchPosts()
            },
            async fitchPosts() {
                try {
                    this.isPostsLoading = true;
                    
                        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {params: {_page: this.page, _limit: this.limit}});
                        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = response.data;
                    this.isPostsLoading = false;
                    
                    
                   
                    
                } catch {
                    alert('Ошибка')
                } finally {
                    this.isPostsLoading = false;
                }
            }
            

        },
        mounted() {
            this.fitchPosts();
        },
        computed: {
            sortedPosts() {
                return [...this.posts].sort((post1, post2) => {
                    return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
                })
            },
            sortedAndSearchPosts() {
                return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
            }
        }
    }
</script>

<style>

.app {
    padding: 20px;
}
.app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;

}

.page__wrapper {
    display: flex;
    margin-top: 10px;
}
.page {
    border: 1px solid black;
    padding: 10px;
}
.current-page {
    border: 2px solid teal;
}

</style>
