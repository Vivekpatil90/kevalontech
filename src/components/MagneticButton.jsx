import useMagnetic from '../hooks/useMagnetic.js'
export default function MagneticButton({ children, className='', as:Tag='button', ...rest }) {
  const ref = useMagnetic(0.3)
  return (
    <Tag ref={ref} className={`transition-transform duration-200 will-change-transform ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
