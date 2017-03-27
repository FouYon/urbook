import dva from 'dva';
import { Toast } from 'antd-mobile';
import createLoading from 'dva-loading';
import './index.html';

const ERROR_MSG_DURATION = 3; // 3 秒
// 1. Initialize
const app = dva({
  onError(e) {
    Toast.fail(e.message, ERROR_MSG_DURATION);
  }
});

app.use(createLoading());

// 2. Model

app.model(require('./models/app'));
app.model(require('./models/user'));

// 3. Router
app.router(require('./router'));

// 4. Start
app.start('#root');
