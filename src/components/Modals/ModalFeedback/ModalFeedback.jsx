import React from 'react'
import ModalsParent from '../ModalsParent/ModalsParent'
import Title24 from 'components/Title24/Title24';
import { useDispatch, useSelector } from 'react-redux';
import { changeForgotActive } from 'store/modalsStore';


const ModalFeedback = ({text, mainTitle}) => {
    const {
        active
    } = useSelector(store => store.modals);

    const dispatch = useDispatch();

    const onActiveForgot = () => {
        
        dispatch(changeForgotActive(true))
    }


    return (
        <ModalsParent cb={() => onActiveForgot()}>
            <div className="modals-thank-body">
                <Title24 text={mainTitle}/>
                <p>{text}</p> 
            </div>
        </ModalsParent>
    )
}

export default ModalFeedback