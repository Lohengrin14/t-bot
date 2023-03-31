import styles from './ResumeListItem.module.css';
import React, { FC } from 'react';
import { Resume } from '../../types/resume';

interface ResumeListItemProps {
  resume: Resume;
}

const ResumeListItem: FC<ResumeListItemProps> = ({ resume }) => {
  return (
    <div className={styles.container} onClick={() => alert(1)}>
      <div className={styles.vacancy}>
        <div className={styles.vacancy__title}>
          <div>Vadvertise</div>
          <div className={styles.vacancy__date}>16 октряря</div>
        </div>
        <div className={styles.vacancy__discription}>
          <span>Frontend-разработчик (проект Digital Object)</span>
        </div>
        <div className={styles.body__salary}>от 70000 до 90000 Р</div>
        <div className={styles.body__workConditions}>
          <span>полный рабочий день</span> • <span>удаленно</span>
        </div>
        <div className={styles.body__skills}>
          React • Node.js • JavaScript • HTML • CSS • PostCSS • Адаптивная
          верстка • БЭМ • Webpack
        </div>
      </div>
    </div>
  );
};

export default ResumeListItem;
