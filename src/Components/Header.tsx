import { Button } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { UserContexType } from '~/@types/data';

import Dogs from '../Assets/Dogs';
import { UserContext } from '../UserContext';
import styles from './Header.module.css';

export const Header = () => {
  const { data, userLogout } = React.useContext(UserContext) as UserContexType;

  const classHeader: string = styles.header;

  return (
    <div className={classHeader}>
      <nav className={`${styles.nav} container`}>
        <Link className={`logo`} to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        {data ?
          <><Link className={`${styles.login}`} to='/account'>{data.nome.toUpperCase()}</Link>
            <Button onClick={userLogout}>Logout</Button></> :
          <Link className={`${styles.login}`} to='/login'>Login / Sign Up</Link>}
      </nav>
    </div>
  );
};
