import { forwardRef, ComponentProps, FC } from "react";

interface CardProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
}

const Card: FC<CardProps> = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={`relative flex-[1] flex flex-col gap-2 rounded-lg border-solid min-h-[300px] p-2 ${className}`}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
