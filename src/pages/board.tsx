import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useResponsive } from "@/hooks/useReponsive";
import EisenhowerMatrix from "@/sections/eisenhower-matrix";
import SideBar from "@/sections/side-bar";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Board() {
   
  const {isDesktop} = useResponsive()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="flex flex-col md:flex-row gap-3 p-3 h-[90%] justify-center">
        <EisenhowerMatrix/>
        {isDesktop ? (
          <SideBar/>
        ):(
          <>
            <Drawer direction="left" open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
              <DrawerContent className="h-full w-fit  bg-csky [&>div:first-child]:hidden rounded-r-xl">
                <SideBar/>
              </DrawerContent>
            </Drawer>
            <Button onClick={() => setIsOpen(true)} className="fixed right-0 bottom-0 z-50 rounded-full m-2 w-10 h-10 "><Plus/></Button>
          </>
        )}
    </main>
  )
}
