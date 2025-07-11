//Design system : Typography
//Gère la typographie du site (style, couleur)

import clsx from "clsx";

interface Props {
  variant?:
    | "heading-xl"
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
  component?: "div" | "p";
  theme?:
    | "black"
    | "white"
    | "primary"
    | "secondary"
    | "cyan"
    | "grey"
    | "black-2";
  weight?: "regular" | "medium" | "bold" | "light";
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  variant = "body-md",
  component: Component = "div",
  theme,
  className,
  children,
}: Props) => {
  let variantStyles: string = "";
  let colorStyles: string = "";

  switch (variant) {
    case "heading-xl":
      variantStyles = "text-9xl";
      break;
    case "heading-lg":
      variantStyles = "text-8xl";
      break;
    case "button-lg":
      variantStyles = "text-7xl";
      break;
    case "heading-sm":
      variantStyles = "text-6xl";
      break;
    case "heading-xs":
      variantStyles = "text-5xl";
      break;
    case "body-lg":
      variantStyles = "text-4xl";
      break;
    case "body-md": //default
      variantStyles = "text-3xl";
      break;
    case "nav-text":
      variantStyles = "text-2xl";
      break;
    case "button-md":
      variantStyles = "text-xl";
      break;
    case "caption":
      variantStyles = "text-lg";
      break;
    case "caption-sm":
      variantStyles = "text-base";
      break;
  }

  switch (theme) {
    case "black": //default
      colorStyles = "text-black";
      break;
    case "black-2":
      colorStyles = "text-black-2";
      break;
    case "white":
      colorStyles = "text-white";
      break;
    case "primary":
      colorStyles = "text-gradient-primary";
      break;
    case "grey":
      colorStyles = "text-grey-3";
      break;
    case "cyan":
      colorStyles = "text-cyan";
      break;
    default:
      break;
  }

  return (
    <Component className={clsx(variantStyles, colorStyles, className)}>
      {children}
    </Component>
  );
};
