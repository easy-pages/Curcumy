import Types from "prop-types"

const Button = ({ onClick, text, icon, px = 4, my = "16", animate = true }) => {
    return (
        <div className="w-auto flex justify-center">
            <button
                onClick={onClick}
                className={`${animate && "animate-grow-up"} px-${px} my-${my} flex justify-center items-center gap-2 shadow-xl text-white bg-gradient-to-r from-[#33B044] to-[#148023] rounded-2xl`}
            >
                {icon}{text}
            </button>
        </div>
    )
}

Button.propTypes = {
    text: Types.string.isRequired,
    onClick: Types.func,
    animate: Types.bool,
    icon: Types.element,
    px: Types.string,
    my: Types.string
}

export default Button