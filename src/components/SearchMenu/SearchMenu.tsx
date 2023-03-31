import styles from './SearchMenu.module.css';
import React, { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import List from '../List/List';

interface SearchMenuProps {
  searchFields: SearchMenuItem[];
}
interface SearchMenuItem {
  title: String;
  options: String[];
}

const SearchMenu: FC<SearchMenuProps> = ({ searchFields }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className=""
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
          console.log('drop click');
        }}
      >
        {' '}
        Drop Window
      </div>
      {!!open ? (
        <>
          <div className={styles.menu}>
            <List
              items={searchFields}
              renderItem={(item: SearchMenuItem, index) => (
                <div onClick={() => setOpen((open) => !open)} key={index}>
                  {item.title}
                </div>
              )}
            ></List>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SearchMenu;
