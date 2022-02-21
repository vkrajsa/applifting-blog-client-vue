import { mount } from '@vue/test-utils';
import UserLogin from '@/views/admin/UserLogin.vue';
import { createStore } from 'vuex';

const actions = {
  logIn: jest.fn(),
};

const createVuexStore = () => {
  return createStore({
    modules: {
      auth: {
        actions,
        namespaced: true,
      },
    },
  });
};

function factory() {
  const store = createVuexStore();
  return mount(UserLogin, {
    global: { plugins: [store] },
  });
}

describe('UserLogin', () => {
  it('shows validation errors if user submits with fields missing', async () => {
    const wrapper = factory();

    await wrapper.find('form').trigger('submit.prevent');
    // TO DO: check if validaion errors are displayed

    expect(actions.logIn).not.toHaveBeenCalled();
  });

  it('dispatches action if user sumbits filled form', async () => {
    const wrapper = factory();

    await wrapper.find('input[type="text"]').setValue('random input');
    await wrapper.find('input[type="password"]').setValue('random input');

    await wrapper.find('form').trigger('submit.prevent');

    // TO DO: mock axios error wrong credentials
    expect(actions.logIn).toHaveBeenCalled();
    expect(wrapper.router.push).toHaveBeenCalledTimes(1);
  });
});
