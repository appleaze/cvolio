import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface LaptopProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  dark?: boolean
}

const Laptop = ({ imgSrc, className, dark = false, ...props }: LaptopProps) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}>
      <img
        src={ '/laptop_mockup.png'
        }
        className='pointer-events-none z-50 select-none'
        alt='laptop'
      />

      <div className='absolute -z-10 inset-y-20 inset-x-6'>
        <img
          className='object-cover w-96 h-auto'
          src={imgSrc}
          alt='overlaying phone image'
        />
      </div>
    </div>
  )
}

export default Laptop