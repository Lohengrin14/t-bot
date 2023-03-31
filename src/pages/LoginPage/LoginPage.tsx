import React, { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DropMenu from '../../components/DropMenu/DropMenu';
import DropMenuComposed from '../../components/DropMenuComposed/DropMenuComposed';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { userRoles } from '../../utilites/constants/appPaths';
import { busyness, qualification, skills, specialization } from '../../utilites/constants/bindInputValues';
import styles from './LoginPage.module.css'

const LoginPage: FC = () => {
    const state = useTypedSelector(state => state.user)
    const { fetchVacancy, fetchUser, setUserRole, stringPropertyUpdateUserResume, arrayPropertyPopDataUserResume, arrayPropertyPushDataUserResume } = useAction()
    const location = useLocation();

    const fromPage = location.state?.from?.pathname || '/'
    const tg = Telegram.WebApp
    useEffect(() => {
        tg.ready();




        fetchVacancy();
        if (tg.initDataUnsafe.user) {
            fetchUser(tg.initDataUnsafe.user)
        }

    }, [])

    const onClose = () => {
        tg.close()
    }


    // const dropProp = {
    //     menuTitle: 'Настройки поиска',
    //     menuVariants: [
    //         {
    //             variantTitle: 'Квалификация:', variantOptions: [{
    //                 optionTitle: 'intern', optionId: '0'
    //             }, {
    //                 optionTitle: 'junior', optionId: '1'
    //             }, {
    //                 optionTitle: 'middle', optionId: '2'
    //             }, {
    //                 optionTitle: 'senior', optionId: '3'
    //             }]
    //         },
    //         {
    //             variantTitle: 'Специлизация:', variantOptions: [{
    //                 optionTitle: 'frontend', optionId: '1'
    //             }, {
    //                 optionTitle: 'backend', optionId: '2'
    //             },
    //             {
    //                 optionTitle: 'fullstack', optionId: '3'
    //             }]
    //         },
    //         {
    //             variantTitle: 'Занятость:', variantOptions: [{
    //                 optionTitle: 'Полная', optionId: '1'
    //             }, {
    //                 optionTitle: 'Частичная', optionId: '2'
    //             },]
    //         }
    //     ]
    // }

    const dropProp = {
        menuTitle: 'Настройки поиска',
        menuVariants: [
            {
                variantTitle: 'Квалификация:', variantOptions: qualification, multiChoice: false
            },
            {
                variantTitle: 'Специлизация:', variantOptions: skills, multiChoice: true
            },
            {
                variantTitle: 'Занятость:', variantOptions: busyness, multiChoice: false
            }
        ]
    }

    return (
        <>
            <h1 className={styles.body}>Что Вы ищете?{fromPage}</h1>
            <h2>{JSON.stringify(state)}</h2>
            <button onClick={() => setUserRole(userRoles.workman)}>Работу</button>
            <button onClick={() => setUserRole(userRoles.employer)}>Сотрубников</button>
            <button onClick={onClose}>TEST</button>
            {/* <DropMenu multiChoice={true} itemUnSelectAction={{ callback: arrayPropertyPopDataUserResume, property: 'skills' }} itemSelectAction={{ callback: arrayPropertyPushDataUserResume, property: 'skills' }} title={'Ваш уровень:'} items={qualification}></DropMenu> */}
            <DropMenuComposed menuTitle={dropProp.menuTitle} menuVariants={dropProp.menuVariants}></DropMenuComposed>
        </>

    );
};

export default LoginPage;