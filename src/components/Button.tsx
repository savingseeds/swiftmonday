interface ButtonProps {
  text: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

function Button({ text, onClick, variant = 'primary', size = 'medium', disabled = false }: ButtonProps) {
  const baseStyles = "font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"

  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg",
    secondary: "bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50"
  }

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button