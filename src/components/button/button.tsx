import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {VariantProps, cva} from 'class-variance-authority'
import {LucideIcon} from 'lucide-react'

import {cn} from '@/lib/utils'

const buttonVariants = cva(
	// 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
	'inline-flex items-center ajustify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground hover:bg-primary/90',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline:
					'border border-input hover:bg-accent hover:text-accent-foreground',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: ''
			},
			size: {
				default: 'h-10 py-2 px-4',
				sm: 'h-9 px-3 rounded-md',
				lg: 'h-11 px-8 rounded-md'
			},
			active: {
				true: 'font-semibold bg-secondary-background',
				false: 'text-primary hover:text-secondary'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
	icon?: LucideIcon
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			active,
			asChild = false,
			icon,
			children,
			...props
		},
		ref
	) => {
		console.log(active)
		const Comp = asChild ? Slot : 'button'
		const Icon = icon
		return (
			<Comp
				className={cn(buttonVariants({variant, size, className}))}
				ref={ref}
				{...props}
			>
				{Icon ? <Icon className="w-5 h-5" /> : undefined}
				{children}
			</Comp>
		)
	}
)
Button.displayName = 'Button'

export {Button, buttonVariants}
