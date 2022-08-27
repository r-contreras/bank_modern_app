
function Button({ styles, text }) {
    return (
        <button type="button" className={`font-poppins rounded-[10px] py-4 px-6 bg-blue-gradient text-black ${styles}`}>
            {text}
        </button>
    )
}

export default Button