import { Maximize, Minimize, Minus, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";

export const AppBar = () => {
  return (
    <nav className="w-full h-[25px] flex items-center justify-between">
      <div>LOGO</div>
      <div>
        <Button size={"icon"}>
          <Minus />
        </Button>
        <Button size={"icon"}>
          <Maximize />
        </Button>
        <Button size={"icon"}>
          <X />
        </Button>
      </div>
    </nav>
  );
};
