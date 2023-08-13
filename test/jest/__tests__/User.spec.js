import { shallowMount } from "@vue/test-utils";
import Users from "../../../src/components/Users.vue";

describe("Users", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(MyComponent, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
