import { mount } from "@vue/test-utils";
import ResturantRecipes from "@/components/ResturantRecipes";

describe("ResturantRecipes", () => {
  it("renders a list of recipes", () => {
    const wrapper = mount(ResturantRecipes);

    const recipes = [
      {
        name: "Spaghetti Carbonara",
        ingredients: [
          "spaghetti",
          "eggs",
          "pecorino cheese",
          "guanciale",
          "black pepper",
        ],
        instructions:
          "Cook spaghetti al dente. In a separate bowl, mix eggs, grated pecorino cheese, and black pepper. In a pan, cook guanciale until crispy. Toss cooked spaghetti with guanciale, then add the egg and cheese mixture. Mix well and serve.",
      },
      {
        name: "Chicken Stir-Fry",
        ingredients: [
          "chicken breast",
          "bell peppers",
          "broccoli",
          "soy sauce",
          "garlic",
          "ginger",
        ],
        instructions:
          "Slice chicken into strips and stir-fry in a hot pan with garlic and ginger. Add sliced bell peppers and broccoli. When vegetables are tender, add soy sauce and stir well. Serve hot.",
      },
      {
        name: "Vegetable Lasagna",
        ingredients: [
          "lasagna noodles",
          "zucchini",
          "eggplant",
          "ricotta cheese",
          "mozzarella cheese",
          "tomato sauce",
        ],
        instructions:
          "Roast slices of zucchini and eggplant. Layer lasagna noodles with ricotta cheese, roasted vegetables, and tomato sauce. Top with mozzarella cheese and bake until bubbly and golden.",
      },
    ];

    wrapper.setData({ recipes });

    const recipeNames = wrapper.findAll(".text-xl");
    expect(recipeNames.length).toBe(recipes.length);

    const ingredientLists = wrapper.findAll(".list-disc");
    expect(ingredientLists.length).toBe(recipes.length);
  });
});
