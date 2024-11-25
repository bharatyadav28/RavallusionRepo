import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export const CustomButton = ({ children, ...props }) => {
  const { className, onClick } = props;

  const classes = cn(
    "rounded-xl border-[1px] border-[var(--neon-purple)] bg-[var(--button-bg)] p-4 px-10 text-base btn",
    className
  );
  return (
    <Button {...props} className={classes} onClick={onClick}>
      {children}
    </Button>
  );
};
