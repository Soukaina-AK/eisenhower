import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa6";
export default function Login() {
  return (
    <div className="w-full  h-full flex flex-col">
      <main
        role="main"
        className="flex gap-4  items-center justify-center flex-[0.9] "
      >
        <div className="md:flex-[0.5] text-center md:text-start px-4">
          <h1 className="text-4xl">Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            expedita pariatur ratione ut mollitia harum id, modi cum similique.
            Vitae.
          </p>
          <Button>
            <FaGoogle />
            Connect with google
          </Button>
        </div>
        <div className="flex-[0.5] items-center justify-center hidden md:flex">
          <img
            className="max-w-full rounded-xl"
            src="/images/splash2.jpg"
            alt=""
          />
        </div>
      </main>
      <footer className="text-center italic p-2 flex-[0.1]">
        <small>By Soukaina AKAROUM & Abdelali AIT ADDI</small>
      </footer>
    </div>
  );
}
