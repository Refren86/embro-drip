import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";

import Logo from "../../public/icons/logo-white.svg";
import { Input } from "./ui/Input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/Dialog";

function Navbar() {
  return (
    <div>
      <div className="bg-primary h-8 flex justify-center items-center">
        <p>
          Зареєструйтесь та отримайте <b>знижку 20%</b> на перше замовлення.{" "}
          <Link to="/sign-up" className="underline">
            <b>Зареєструватись</b>
          </Link>
        </p>
      </div>
      <nav className="bg-secondary h-16">
        <div className="flex justify-between items-center max-w-[1600px] mx-auto px-4 h-full">
          {/* Left */}
          <div>
            <Link to="/">
              <img src={Logo} width={200} />
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-x-4">
            <Input placeholder="Пошук..." />

            <div className="flex justify-center items-center min-w-[48px] h-12 hover:bg-primary/40 rounded-full transition-background duration-300">
              <Link to="/cart" className="relative">
                <ShoppingCart size={32} />

                {/* Cart items count */}
                <span className="flex justify-center items-center absolute -right-2 -top-1 rounded-full bg-destructive text-foreground text-xs font-semibold w-5 h-5">
                  1
                </span>
              </Link>
            </div>

            <div className="flex justify-center items-center min-w-[48px] h-12 hover:bg-primary/40 rounded-full transition-background duration-300">
              <Dialog>
                <DialogTrigger asChild>
                  <Link to="?login">
                    <User size={32} />
                  </Link>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export { Navbar };
