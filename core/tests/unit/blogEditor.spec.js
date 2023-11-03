// import { ShallowMount, createLocalVue } from "@vue/test-utils";
// const localVue = createLocalVue();

// describe("BlogEditor", () => {
//   it("renders without errors", () => {
//     const wrapper = ShallowMount(BlogEditor, {
//       localVue,
//       mocks: {
//         $store: {
//           getters: {
//             blogPosts: [],
//           },
//           dispatch: jest.fn(),
//         },
//         $route: {
//           query: {
//             restaurant: JSON.stringify({
//               name: "Test Restaurant",
//             }),
//           },
//         },
//       },
//     });
//     expect(wrapper.exists()).toBe(true);
//   });
// });

import { shallowMount } from "@vue/test-utils";

import BlogEditor from "@/components/BlogEditor";

describe("MyComponent", () => {
  it("renders without errors", () => {
    const wrapper = shallowMount(BlogEditor);
    expect(wrapper.exists()).toBe(true);
  });
});
