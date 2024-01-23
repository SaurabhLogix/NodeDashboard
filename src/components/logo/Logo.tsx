import Image from "next/image";
import logoLight from "@assets/images/logo-light.png";
import logoDark from "@assets/images/logo-dark.png";
import { LAYOUT_MODE_TYPES } from "@/redux/features/dashboard/layout/layout";

type LogoProps = {
    theme?: LAYOUT_MODE_TYPES.LIGHTMODE | LAYOUT_MODE_TYPES.DARKMODE;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'light' | 'dark'
}

const logoSize = {
    sm: { height: '2rem', width: '6rem' },
    md: { height: '3rem', width: '8rem' },
    lg: { height: '4rem', width: '10rem' },
    xl: { height: '5rem', width: '12rem' },
}

export default function Logo({ theme, variant, size = 'sm' }: LogoProps) {
    let logoUrl = logoLight;

    if (variant) logoUrl = variant === 'light' ? logoLight : logoDark;
    else if (theme) logoUrl = theme === LAYOUT_MODE_TYPES.LIGHTMODE ? logoDark : logoLight;


    return (
        <Image src={logoUrl} style={{ ...logoSize[size] }} alt="Logo" />
    )
}