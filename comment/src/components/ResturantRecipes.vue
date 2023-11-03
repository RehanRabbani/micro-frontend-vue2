<template>
    <div class="w-full bg-white rounded-lg shadow-lg p-6">
        <h1 class="text-2xl font-semibold mb-4">Recipes</h1>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="recipe in recipes" :key="recipe.name" class="border p-4 rounded-lg">
                <h2 class="text-xl font-semibold">{{ recipe.name }}</h2>
                <ul class="list-disc ml-6 mt-2">
                    <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
                </ul>
                <p class="mt-4">{{ recipe.instructions }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "ResturantRecipes",
    data() {
        return {
            recipes: [
                {
                    name: "Spaghetti Carbonara",
                    ingredients: ["spaghetti", "eggs", "pecorino cheese", "guanciale", "black pepper"],
                    instructions: "Cook spaghetti al dente. In a separate bowl, mix eggs, grated pecorino cheese, and black pepper. In a pan, cook guanciale until crispy. Toss cooked spaghetti with guanciale, then add the egg and cheese mixture. Mix well and serve.",
                },
                {
                    name: "Chicken Stir-Fry",
                    ingredients: ["chicken breast", "bell peppers", "broccoli", "soy sauce", "garlic", "ginger"],
                    instructions: "Slice chicken into strips and stir-fry in a hot pan with garlic and ginger. Add sliced bell peppers and broccoli. When vegetables are tender, add soy sauce and stir well. Serve hot.",
                },
                {
                    name: "Vegetable Lasagna",
                    ingredients: ["lasagna noodles", "zucchini", "eggplant", "ricotta cheese", "mozzarella cheese", "tomato sauce"],
                    instructions: "Roast slices of zucchini and eggplant. Layer lasagna noodles with ricotta cheese, roasted vegetables, and tomato sauce. Top with mozzarella cheese and bake until bubbly and golden.",
                },
            ],
        };
    },
};
</script>
  
<style scoped>
/* You can add your Tailwind CSS classes here to style the component */
</style>
  