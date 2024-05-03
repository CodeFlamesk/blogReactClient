import "./block-header-item.scss"

const BlockHeaderItem = ({children, title, label}) => {
    return (
        <div className="block-header-item ">
            <div className="block-header-item__container">
                <div className="block-header-item__body">
                    <div className='main__header-item main__header-item-width header-item'>
                        <div className='header-item__label '>
                            <p >{label}</p>
                        </div>
                        <div className='header-item__title'>
                            <h2>{title}</h2>
                        </div>
                    </div>
                    {
                        children && <div className="main-header__button">
                                        {children}
                                    </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default BlockHeaderItem