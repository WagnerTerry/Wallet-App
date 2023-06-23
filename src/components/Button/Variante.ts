import theme from "../../styles/theme"

interface ButtonStyle {
    button: {
        backgroundColor: string | undefined;
        borderWidth?: number | undefined;
        borderColor?: string | undefined;
    }
    title: {
        color: string
    }
    icon: {
        color: string
    }
}

export interface ButtonVariant {
    enabled: ButtonStyle;
    disabled: ButtonStyle;
}

const buttonPrimary: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: theme?.COLORS.PRIMARY,
        },
        title: {
            color: String(theme?.COLORS.WHITE)
        },
        icon: {
            color: String(theme?.COLORS.WHITE)
        },
    },
    disabled: {
        button: {
            backgroundColor: theme?.COLORS.PRIMARY,
        },
        title: {
            color: String(theme?.COLORS.GRAY)
        },
        icon: {
            color: String(theme?.COLORS.WHITE)
        },
    },
}

const buttonOutLine: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderColor: String(theme?.COLORS.PRIMARY)
        },
        title: {
            color: String(theme?.COLORS.GRAY1)
        },
        icon: {
            color: String(theme?.COLORS.GRAY1)
        },
    },
    disabled: {
        button: {
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderColor: String(theme?.COLORS.PRIMARY)
        },
        title: {
            color: String(theme?.COLORS.GRAY_100)
        },
        icon: {
            color: String(theme?.COLORS.GRAY_100)
        },
    },
}

const buttonBlack: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: '#100c08',
            borderWidth: 2,
            borderColor: String(theme?.COLORS.PRIMARY)
        },
        title: {
            color: "#fbb605"
        },
        icon: {
            color: "#fbb605"
        },
    },
    disabled: {
        button: {
            backgroundColor: '#b8b8b8',
            borderWidth: 2,
            borderColor: String(theme?.COLORS.PRIMARY)
        },
        title: {
            color: String(theme?.COLORS.WHITE)
        },
        icon: {
            color: String(theme?.COLORS.WHITE)
        },
    },
}

export const variants = {
    primary: buttonPrimary,
    outline: buttonOutLine,
    black: buttonBlack
}