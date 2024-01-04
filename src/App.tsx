/// <reference types="vitest" />
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';

const App = defineComponent({
  name: 'App',
  setup() {
    return () => {
      return <ElConfigProvider namespace='bt'>app</ElConfigProvider>;
    };
  }
});

export default App;

if (import.meta.vitest) {
  const a = 1 + 1;
  const { it, expect } = import.meta.vitest;
  it('test a = 2', () => {
    expect(a).toBe(2);
  });
}
