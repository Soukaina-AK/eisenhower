import { Maximize, Minimize, Minus, X } from "lucide-react";
import { Button } from "./ui/button";

export const AppBar = () => {
  return (
    <nav className="h-[25px] bg-cpurple flex items-center justify-between p-2">
      <div>LOGO</div>
      <div>
        <Button variant={"csky"} size={"icon"}>
          <Minus />
        </Button>
        <Button variant={"csky"} size={"icon"}>
          <Maximize />
        </Button>
        <Button variant={"csky"} size={"icon"}>
          <X />
        </Button>
      </div>
    </nav>
  );
};
