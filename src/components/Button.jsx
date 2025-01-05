const Button = ({ label, iconUrl, backgroundColor, textColor, borderColor, fullWidth }) => {
  
  return (
    <button className={`flex items-center justify-center gap-1 py-4 text-lg leading-none rounded-full px-7 border ${backgroundColor ? backgroundColor : `bg-coral-red`} ${textColor ? textColor : 'text-white'} ${borderColor ? borderColor : 'border-coral-red'} ${fullWidth && `w-full`}`}
    >
      {label}
      {iconUrl && <img 
        src={iconUrl} 
        alt="icon" 
        className="w-5 h-5 ml-2 rounded-full"
        />}
    </button>
  )
}

export default Button
