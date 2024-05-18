import authAction from 'action/authAction';
import userAction from 'action/userAction'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "./delete-account.scss";
import RightButtonLink from 'components/RightButton/RightButtonLink';
import ButtonRight from 'components/Buttons/buttonRight/ButtonRight';

const DeleteAccount = () => {

    const id = useSelector(store => store.user.user);
    const dispatch = useDispatch();

    return (
        <div className='delete__body-user'>
            <ButtonRight  cb={() => dispatch(userAction.deleteUser(id))} text={"Delete account"}/>
            <ButtonRight  cb={() => dispatch(authAction.logout())} text={"Logout"}/>
        </div>
    )
}

export default DeleteAccount