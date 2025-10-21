import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import EisenhowerMatrix from "@/sections/eisenhower-matrix";
import SideBar from "@/sections/side-bar";

export default function Board() {
   

  return (
    <main className="flex flex-col md:flex-row gap-3 p-3 h-[90%] justify-center">

        <EisenhowerMatrix/>
    
        <Drawer direction="left">
          <DrawerTrigger>Open</DrawerTrigger>
          <DrawerContent className="h-full w-fit  bg-csky [&>div:first-child]:hidden rounded-r-xl">
            <SideBar/>
          </DrawerContent>
        </Drawer>
    </main>
  )
}
