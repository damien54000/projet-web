import clsx from "clsx";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "tertiary" |"disabled";
    icon?: any;
    iconPosition?: "left" | "right";
    disabled? : boolean;
    children?: React.ReactNode;
}

export const Button = ({size = "medium", variant = "primary", icon, iconPosition = "left", disabled, children}: Props) => {

    let variantStyles: string;
    let sizeStyles: string;
    let icoSize: number = 0;

    switch (variant) {
        case "primary"://Default
            variantStyles="bg-gradient-primary hover:shadow-primary hover:-translate-y-1 transition duration-300 text-white rounded-full";
            break;
        case "secondary":
            variantStyles="bg-gradient-secondary shadow-base hover:shadow-secondary hover:-translate-y-1 transition duration-300 text-white rounded-full";
            break;
        case "tertiary":
            variantStyles="bg-gray shadow-base hover:shadow-tertiary hover:-translate-y-1 transition duration-300 text-black rounded-full";
            break;
        case "disabled":
            variantStyles="";
            break;
    }

    switch (size) {
        case "small":
            sizeStyles = "text-xl px-[34px] py-[10px] ";
            break;
        case "medium":
            sizeStyles = "text-xl px-[35.5px] py-[10px]";
            break;
        case "large":
            sizeStyles = "text-7xl px-[107.5px] py-[10px]";
            break;
    }

    return (
        <>
        <button type="button" className={clsx(variantStyles, sizeStyles)} onClick={() => console.log('click')} disabled ={disabled}>
            {children}
        </button>
        </>
    );
};