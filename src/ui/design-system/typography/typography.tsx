import clsx from "clsx";


interface Props {
    variant?: 
        "heading-xl" 
        | "heading-sm" 
        | "heading-xs" 
        | "body-lg" 
        | "body-md" 
        | "nav-text" 
        | "button-lg" 
        | "button-md" 
        | "caption" 
        | "caption-sm" 
        | "heading-lg";
    component?: "div" | "p" | "span";
    theme?: "black" | "white" | "primary" | "secondary";
    weight?: "regular" | "medium" | "bold" | "light";
    className?: string;
    children: React.ReactNode;

}

export const Typography = ({variant = "body-md", component: Component= "div", theme = "black", weight = "regular",className, children}: Props) => {

    let variantStyles: string = "";

    switch(variant) {
        case "heading-xl":
            variantStyles= "text-red-500"
            break;
        case "heading-sm":
            variantStyles= "text-green-500"
            break;
    }
    return (
        <Component className={clsx(variantStyles, className)}>{children}</Component>
    )
}