import { mount } from "@vue/test-utils";
import CommentsSection from "@/components/CommentsSection.vue";

const mockStore = {
  state: {},
  getters: {
    comments: ["Comment 1", "Comment 2"],
  },
  commit: jest.fn(),
};
describe("CommentsSection", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CommentsSection, {
      mocks: {
        $store: mockStore,
      },
    });
  });

  it("renders the CommentsSection component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("displays existing comments", () => {
    const commentElements = wrapper.findAll("li");
    expect(commentElements.length).toBe(mockStore.getters.comments.length);
  });

  it("adds a new comment when the 'Add Comment' button is clicked", async () => {
    const newComment = "New Comment";
    wrapper.setData({ commentText: newComment });

    const addButton = wrapper.find("button");
    await addButton.trigger("click");

    expect(mockStore.commit).toHaveBeenCalledWith("addComment", newComment);
    expect(wrapper.vm.commentText).toBe("");
  });
});
