import "./Button.css"

const Button = (icon, onClickAction) => {
    return (
        <>
            <div className='button-area'>
                <button className='button' onClick={onClickAction}>
                    {icon}
                </button>
            </div>
        </>
    );
};

export default Button;