import dva from 'dva';
import ReactDOM from 'react-dom';
import './index.css';

// 1. Initialize
// const app = dva();
// // 2. Plugins
// // app.use({});
// // 3. Model
// // app.model(require('./models/example').default);
// // 4. Router
// app.router(require('./router').default);
// // 5. Start
// app.start('#root');

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  const app = dva();
  app.router(require('./router').default);
  app.start('#root');
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode('#root');

}

