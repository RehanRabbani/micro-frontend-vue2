<template>
    <div>
        <NavBar></NavBar>

        <div class="container mx-auto p-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="restaurant in restaurants" :key="restaurant.id">
                    <div class="bg-white shadow-md rounded-lg p-4">
                        <img :src="restaurant.image" alt="Restaurant" class="w-full h-40 object-cover">
                        <h2 class="text-xl font-semibold mt-2">{{ restaurant.name }}</h2>
                        <p class="text-gray-600">{{ restaurant.description }}</p>
                        <router-link
                            :to="{ path: '/restaurant/' + restaurant.id, query: { restaurant: JSON.stringify(restaurant) } }"
                            class="bg-blue-500 text-white py-2 px-4 mt-2 block rounded-full text-center hover:bg-blue-600">
                            reviews</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import NavBar from './NavBar.vue';
export default {
    data() {
        return {
            restaurants: [
                {
                    id: 1,
                    name: 'Restaurant 1231231',
                    description: 'Delicious food from Restaurant 1',
                    image: 'https://via.placeholder.com/150',
                },
                {
                    id: 2,
                    name: 'Restaurant 2',
                    description: 'Tasty dishes from Restaurant 2',
                    image: 'https://via.placeholder.com/150',
                },
                {
                    id: 3,
                    name: 'Restaurant 3',
                    description: 'Tasty dishes from Restaurant 2',
                    image: 'https://via.placeholder.com/150',
                },
                {
                    id: 4,
                    name: 'Restaurant 4',
                    description: 'Tasty dishes from Restaurant 2',
                    image: 'https://via.placeholder.com/150',
                },
                {
                    id: 5,
                    name: 'Restaurant 5',
                    description: 'Tasty dishes from Restaurant 2',
                    image: 'https://via.placeholder.com/150',
                },
                {
                    id: 6,
                    name: 'Restaurant 6',
                    description: 'Tasty dishes from Restaurant 2',
                    image: 'https://via.placeholder.com/150',
                },

            ],
        };
    },
    components: {
        NavBar
    }
};
</script>
  