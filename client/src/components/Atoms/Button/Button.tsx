import { Button as MuiButton, ButtonProps as MuiButtonProps} from '@mui/material'

export interface ButtonProps
    extends Pick<MuiButtonProps, 'children' | 'type' | 'fullWidth' | 'variant' | 'color' | 'startIcon' | 'onClick'> {
    bold?: boolean
}

export const Button = (props: ButtonProps) => {
    const { bold, ...rest } = props
    return (
        <MuiButton
            style={
                bold
                    ? {
                        fontWeight: 'bold'
                    }
                    : {}
            }
            {...rest}
        />
    )
}