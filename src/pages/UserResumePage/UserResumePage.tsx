import styles from './UserResumePage.module.css'

import React, { LegacyRef, RefObject, useEffect, useRef, useState } from 'react';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import List from '../../components/List/List';

import CreateInputFiled from '../../components/CreateInputFiled/CreateInputFiled';
import DropMenu from '../../components/DropMenu/DropMenu';
import { busyness, office_remote, qualification, skills, specialization, towns } from '../../utilites/constants/bindInputValues';
import { useSelector } from 'react-redux';
import { UserResume } from '../../types/userResume';
import test from 'node:test';
import { useForm } from 'react-hook-form';

type requiredFields =
    | 'user_name'
    | 'resume_name'
    | 'specialization'
    | 'qualification'
    | 'skills'
    | 'salary'
    | 'town'
    | 'busyness'
    | 'office_remote'
    | 'description'
    | 'contacts';

// type FieldRef = {
//     [key in requiredFields]: null | RefObject<HTMLDivElement>;
// };

// type RequiredField = {
//     [key: string]: Boolean;
// };
interface FieldRef {
    [key: string]: null | RefObject<HTMLDivElement>
}

interface RequiredField {
    [key: string]: boolean
}
const UserResumePage = () => {
    const user = useTypedSelector(store => store.user.user)
    const userResume = useTypedSelector(store => store.userResume.userResume)
    const { deleteUserResume, updateUserResume, stringPropertyUpdateUserResume, arrayPropertyPopDataUserResume, arrayPropertyPushDataUserResume } = useAction()
    const { } = useForm()
    const [isValid, setIsValid] = useState<RequiredField>({
        user_name: true,
        resume_name: true,
        specialization: true,
        qualification: true,
        skills: true,
        salary: true,
        town: true,
        busyness: true,
        office_remote: true,
        description: true,
        contacts: true
    })

    const fieldRef: FieldRef = {
        user_name: null,
        resume_name: null,
        specialization: null,
        qualification: null,
        skills: null,
        salary: null,
        town: null,
        busyness: null,
        office_remote: null,
        description: null,
        contacts: null
    }

    for (let key of Object.keys(fieldRef)) {
        fieldRef[key] = React.createRef()
    }

    const validateUserResumeForm = () => {
        const requiredFieldKeys = Object.keys(isValid)
        if (userResume) {
            for (let entry of Object.entries(userResume)) {

                if (!requiredFieldKeys.includes(entry[0])) {
                    continue
                }
                if (entry[1].length > 0) {
                    fieldRef[entry[0]]?.current?.setAttribute('style', 'color: white')
                    setIsValid((isValid) => { isValid[entry[0]] = true; return isValid })
                    continue
                }

                fieldRef[entry[0]]?.current?.scrollIntoView()
                fieldRef[entry[0]]?.current?.setAttribute('style', 'color: red')

                // setIsValid((isValid) => { isValid[entry[0]] = false; return isValid })
                console.log(entry[0])
                break

                // console.log('here')
                // console.log([entry[0]])
                // setIsValid({ ...isValid, ['user_name']: false })
                // console.log(isValid)
                // break;
            }
        }
    }

    const validField = (value: string) => {
        if (value.length > 0) {
            return true
        }
    }
    return (<>
        {/* style={isValid.a ? { backgroudcolor: 'black' } : { 'backgroundcolor': 'red' }} */}
        {/* 
            {userResumes.length > 0 ? <List items={userResumes} renderItem={(item: UserResume) => <div key={item.id}>{item.resume_name}</div>}></List> : <></>} */}
        {/* <h1>{userResumes?.user_name}</h1> */}
        <button onClick={() => stringPropertyUpdateUserResume('user_name', 'test')}>HERE</button>
        <div ref={fieldRef.user_name} style={isValid.user_name ? {} : { color: 'red' }}>
            <CreateInputFiled property={'user_name'} placeholder='Имя...' tip='Ваше имя' onChange={stringPropertyUpdateUserResume}></CreateInputFiled>
        </div>
        <div ref={fieldRef.resume_name} style={isValid.resume_name ? {} : { color: 'red' }}>
            <CreateInputFiled property={'resume_name'} placeholder='Требуется...' tip='Название ваканси' onChange={stringPropertyUpdateUserResume}></CreateInputFiled>
        </div>
        <div ref={fieldRef.specialization}>
            <DropMenu itemSelectAction={{ callback: stringPropertyUpdateUserResume, property: 'specialization' }} title={'Специлизация'} items={specialization} ></DropMenu>
        </div>
        <div ref={fieldRef.qualification}>
            <DropMenu itemSelectAction={{ callback: stringPropertyUpdateUserResume, property: 'qualification' }} title={'Ваш уровень'} items={qualification}></DropMenu>
        </div>
        <div ref={fieldRef.skills}>
            <DropMenu itemUnSelectAction={{ callback: arrayPropertyPopDataUserResume, property: 'skills' }} itemSelectAction={{ callback: arrayPropertyPushDataUserResume, property: 'skills' }} title={'Навыки:'} multiChoice={true} items={skills} ></DropMenu>
        </div>
        <div ref={fieldRef.salary}>
            <CreateInputFiled onlyNumber={true} property={'salary'} placeholder='от:' tip='Желаемая зарплата' onChange={stringPropertyUpdateUserResume}></CreateInputFiled>
        </div>
        <div ref={fieldRef.town}>
            <DropMenu itemSelectAction={{ callback: stringPropertyUpdateUserResume, property: 'town' }} title={'Город'} items={towns} ></DropMenu>
        </div>
        <div ref={fieldRef.busyness}>
            <DropMenu itemSelectAction={{ callback: stringPropertyUpdateUserResume, property: 'busyness' }} title={'Занятость'} items={busyness} ></DropMenu>
        </div>

        <div ref={fieldRef.office_remote}>
            <DropMenu itemSelectAction={{ callback: stringPropertyUpdateUserResume, property: 'office_remote' }} title={'Формат работы:'} items={office_remote} ></DropMenu>
        </div>
        <div ref={fieldRef.description}>
            <textarea placeholder='Описание вакансии' ></textarea>
        </div>
        <div ref={fieldRef.contacts}>
            <CreateInputFiled onlyNumber={true} property={'contacts'} placeholder='9101234567 ' tip='Контактный телефон' onChange={stringPropertyUpdateUserResume}></CreateInputFiled>
        </div>
        <button onClick={() => validateUserResumeForm()}>Сохранить</button>
    </>

    );
};

export default UserResumePage;