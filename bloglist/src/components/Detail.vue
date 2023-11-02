<template>
    <div class="py-8">
        <h1 class="text-2xl font-semibold text-gray-900 mb-4">Restaurant Detail</h1>
        <div class="bg-white p-4 rounded-lg shadow-md">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 md:mr-6">
                    <img :src="JSON.parse($route.query.restaurant)?.image" alt="Restaurant Image"
                        class="w-full h-auto rounded-lg mb-4 md:mb-0">
                </div>
                <div class="md:w-1/2">
                    <h2 class="text-xl font-semibold text-gray-900 mb-2">Restaurant ID: {{ $route.params.id }}</h2>
                    <p class="text-lg text-gray-800 mb-2">Restaurant Name: {{ JSON.parse($route.query.restaurant)?.name }}
                    </p>
                    <p class="text-lg text-gray-800 mb-2">Restaurant Description: {{
                        JSON.parse($route.query.restaurant)?.description }}</p>
                    <p class="text-lg text-gray-800 mb-2">Restaurant Rating: {{ JSON.parse($route.query.restaurant)?.rating
                    }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "RestrantDetail",
};
</script>
  
<style>
/* Add custom styles here */
</style>