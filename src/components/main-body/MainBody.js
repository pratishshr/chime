import React from 'react';
import cn from 'classnames';

import styles from './MainBody.scss';

const MainBody = ({ children }) => <div className={cn('row', styles.mainBody)}>{children}</div>;

export default MainBody;
