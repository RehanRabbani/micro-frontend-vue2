import { createLocalVue, mount } from "@vue/test-utils";
import BlogEditor from "@/components/BlogEditor.vue";

const localVue = createLocalVue();

describe("BlogEditor", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(BlogEditor, {
      localVue,
      mocks: {
        $store: {
          state: {},
          getters: {
            blogPosts: [
              {
                name: "User 1",
                reviews: "Review 1",
              },
              {
                name: "User 2",
                reviews: "Review 2",
              },
            ],
          },
          dispatch: jest.fn(),
        },
        $route: {
          query: {
            restaurant: JSON.stringify({ name: "Restaurant Name" }),
          },
        },
      },
    });
  });

  it("renders the BlogEditor component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("displays existing blog posts", () => {
    const blogPostElements = wrapper.findAll("li");
    expect(blogPostElements.length).toBe(wrapper.vm.blogPosts.length);
  });

  it("adds a new blog post when the 'Publish' button is clicked", async () => {
    const newBlogPost = "New Blog Post";
    const newName = "New User";

    wrapper.setData({ blogContent: newBlogPost, name: newName });

    const publishButton = wrapper.find("button");
    await publishButton.trigger("click");

    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith("publishBlogPost", {
      reviews: newBlogPost,
      name: newName,
    });
    expect(wrapper.vm.blogContent).toBe("");
    expect(wrapper.vm.name).toBe("");
  });
});
