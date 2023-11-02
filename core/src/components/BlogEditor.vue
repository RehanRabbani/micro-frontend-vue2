<template>
    <div>
        <RestrauntDetail />
        <div class="w-full max-w-screen-lg mx-auto my-8">
            <div class="mt-8">
                <h2 class="text-3xl font-serif font-semibold text-gray-900">Reviews:</h2>
                <ul class="mt-4 space-y-6">
                    <li v-for="(post, index) in blogPosts" :key="index">
                        <div class="bg-white p-4 border rounded-lg shadow-md">
                            <div class="flex items-start">
                                <div class="w-12 h-12 mr-4">
                                    <img src="https://via.placeholder.com/150" alt="User Avatar"
                                        class="w-full h-full object-cover rounded-full">
                                </div>
                                <div class="flex-1">
                                    <div class="text-gray-800 text-lg font-semibold">{{ post?.name }}</div>
                                    <div class="text-gray-500 text-sm">Posted 2 hours ago</div>
                                    <p class="text-gray-700 mt-2">{{ post?.reviews }}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>


            <div class="bg-white rounded-lg shadow-md p-8 my-8">
                <h1 class="text-4xl font-serif font-bold mb-4 text-gray-900">Give Review</h1>
                <p>Restaurant Name:{{ JSON.parse($route.query.restaurant).name }}</p>
                <div class="relative mb-8">
                    <input v-model="name" class="w-full p-4 bg-gray-100 border mt-2" placeholder="Enter name">
                    <textarea v-model="blogContent"
                        class="w-full p-4 bg-gray-100 border rounded-lg resize-none focus:outline-none" rows="10"
                        placeholder="Start writing..."></textarea>
                    <div class="">
                        <button @click="publishBlog"
                            class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none">
                            Publish
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
import RestrauntDetail from "blogList/RestrauntDetail";

export default {
    name: "BlogEditor",
    components: {
        RestrauntDetail
    },

    data() {
        return {
            blogContent: "",
            name: "",
        };
    },
    computed: {
        blogPosts() {
            return this.$store.getters.blogPosts;
        },
    },
    methods: {
        publishBlog() {
            if (this.blogContent) {
                this.$store.dispatch("publishBlogPost", { reviews: this.blogContent, name: this.name });
                this.blogContent = "";
                this.name = "";
            }

        },

    },

};
</script>
  
<style scoped>
/* You can add custom styles here if needed */
</style>
  