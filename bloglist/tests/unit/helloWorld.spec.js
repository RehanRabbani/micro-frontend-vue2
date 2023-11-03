import { mount, createLocalVue } from "@vue/test-utils";
import DetailRestuarant from "../../src/components/DetailRestuarant.vue";

const localVue = createLocalVue();

describe("MyComponent", () => {
  it("renders without errors", () => {
    const wrapper = mount(DetailRestuarant, {
      localVue,
    });
    expect(wrapper.exists()).toBe(true);
  });
});
