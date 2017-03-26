/* global document */
import React from 'react';
import styles from './mask.less';
import { classnames } from '../utils';

class Mask extends React.Component {
  render() {
    const maskClass = classnames({
      'mask-hide': !this.props.visible
    });
    // 显示遮罩时禁止body滚动
    document.body.style.overflow = this.props.visible ? 'hidden' : 'scroll';
    return (
      <div className={styles.mask + ' ' + maskClass}>
        {this.props.children}
      </div>
    );
  }
}

export default Mask;
