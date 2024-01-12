import { defineComponent } from 'vue';
import styles from './index.module.scss';
import { ElButton } from 'element-plus';

const Home = defineComponent({
  name: 'Home',
  setup() {
    return () => {
      return (
        <div class={styles['home-wrapper']}>
          <ElButton type='primary'>按钮</ElButton>
        </div>
      );
    };
  }
});

export default Home;
