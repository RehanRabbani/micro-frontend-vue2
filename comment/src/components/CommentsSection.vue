<template>
    <div class="bg-white rounded-lg shadow-md p-4">
        <h1 class="text-2xl font-semibold mb-4">Comments</h1>
        <div class="mb-4">
            <textarea v-model="commentText"
                class="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" rows="3"
                placeholder="Add a comment"></textarea>
        </div>
        <div>
            <button @click="addComment" class="bg-green-500 text-white px-4 py-2 rounded-lg">
                Add Comment
            </button>
        </div>
        <div class="mt-4">
            <h2 class="text-xl font-semibold">Comments:</h2>
            <ul>
                <li v-for="(comment, index) in comments" :key="index" class="bg-gray-100 p-3 rounded-lg mb-2">
                    {{ comment }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommentsSection",
    data() {
        return {
            commentText: "",
        };
    },
    computed: {
        comments() {
            return this.$store.getters.comments;
        },
    },
    methods: {
        addComment() {
            if (this.commentText) {
                this.$store.commit("addComment", this.commentText);
                this.commentText = "";
            }
        },
    },
};
</script>

<style scoped>
/* Scoped styles for Comments component */
</style>
