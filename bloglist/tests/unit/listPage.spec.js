import { mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import ListPage from "../../src/components/ListPage";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe("MyComponent", () => {
  it("renders without errors", () => {
    const wrapper = mount(ListPage, {
      localVue,
      router,
    });
    expect(wrapper.exists()).toBe(true);
  });
  it("displays the correct number of restaurants", () => {
    const wrapper = mount(ListPage, { localVue, router });
    const restaurantCards = wrapper.findAll(
      ".bg-white.shadow-md.rounded-lg.p-4"
    );
    expect(restaurantCards.length).toBe(wrapper.vm.restaurants.length);
  });
  it("displays restaurant names", () => {
    const wrapper = mount(ListPage, { localVue, router });
    const restaurantNames = wrapper.findAll(".text-xl.font-semibold.mt-2");
    const expectedNames = wrapper.vm.restaurants.map(
      (restaurant) => restaurant.name
    );
    restaurantNames.wrappers.forEach((nameWrapper, index) => {
      expect(nameWrapper.text()).toBe(expectedNames[index]);
    });
  });
});
