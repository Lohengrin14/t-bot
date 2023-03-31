import React, { FC, useEffect } from 'react';
import SearchMenu from '../../components/SearchMenu/SearchMenu';
import List from '../../components/List/List';
import ResumeListItem from '../../components/ResumeListItem/ResumeListItem';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Resume } from '../../types/resume';
import { testRusume } from '../../utilites/IWANTTOBEDELETES';
import styles from './ResumePage.module.css'

const ResumePage: FC = () => {
    const { fetchResume } = useAction()

    // const resume = useTypedSelector(state => state.resume.resume)
    useEffect(() => {
        fetchResume()
    }, [])


    const resume = testRusume;
    return <div>Создать резюме</div>


    // return (<div className={styles.container}>
    //     <SearchMenu searchFields={resumeSearchProps}></SearchMenu>
    //     <List items={resume} renderItem={(resume: Resume) => <ResumeListItem key={resume._id} resume={resume} />}></List>
    // </div >

    // );
};

export default ResumePage;