import "./block-header-item.scss"

const BlockHeaderItem = ({children, title, label}) => {
    return (
        <div class="block-header-item ">
            <div class="block-header-item__container">
                <div class="block-header-item__body">
                    <div class='main__header-item main__header-item-width header-item'>
                        <div class='header-item__label '>
                            <p >{label}</p>
                        </div>
                        <div class='header-item__title'>
                            <h2>{title}</h2>
                        </div>
                    </div>
                    {
                        children && <div class="main-header__button">
                                        {children}
                                    </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default BlockHeaderItem