import { Maximize, Minimize, Minus, X } from "lucide-react";
import { Button } from "./ui/button";

export const AppBar = () => {
  const action = (action: string) => {
    window.ipcRenderer.send("request-" + action);
  };

  return (
    <nav className="h-[25px] bg-cpurple flex items-center justify-between p-2 appbar-drag">
      <div>LOGO</div>
      <div>
        <Button
          onClick={() => action("minimize")}
          variant={"csky"}
          size={"icon"}
        >
          <Minus />
        </Button>
        <Button onClick={() => action("toggle")} variant={"csky"} size={"icon"}>
          <Maximize />
        </Button>
        <Button onClick={() => action("quit")} variant={"csky"} size={"icon"}>
          <X />
        </Button>
      </div>
    </nav>
  );
};
