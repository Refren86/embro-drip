import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils";

import Logo from "../assets/icons/logo-white.svg";
import { LoginModal } from "./LoginModal";
import { SignUpModal } from "./SignUpModal";

type Language = Record<string, { nativeName: "EN" | "UA" }>;

const lngs: Language = {
  gb: { nativeName: "EN" },
  ua: { nativeName: "UA" },
};

function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { i18n } = useTranslation();

  const [isLoginOpen, setLoginOpen] = useState(!!searchParams.get("login"));
  const [isSignUpOpen, setSignUpOpen] = useState(!!searchParams.get("sign-up"));

  function toggleLoginModal() {
    if (isLoginOpen) {
      searchParams.delete("login");
      setSearchParams(searchParams);
      setLoginOpen(false);
    } else {
      setLoginOpen(true);
    }
  }

  function toggleSignUpModal() {
    if (isSignUpOpen) {
      searchParams.delete("sign-up");
      setSearchParams(searchParams);
      setSignUpOpen(false);
    } else {
      setSignUpOpen(true);
    }
  }

  function toggleModals() {
    if (isLoginOpen) {
      setLoginOpen(false);
      setSignUpOpen(true);
    } else {
      setSignUpOpen(false);
      setLoginOpen(true);
    }
  }

  return (
    <div>
      <div className="bg-primary h-8 flex justify-center items-center">
        <p>
          Зареєструйтесь та отримайте <b>знижку 20%</b> на перше замовлення.{" "}
          <Link
            to="?sign-up=true"
            onClick={toggleSignUpModal}
            className="underline"
          >
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
            <div className="flex gap-x-4">
              {Object.keys(lngs).map((lng) => (
                <button
                  key={lng}
                  className={cn(
                    "flex items-center gap-x-1 h-[42px] text-muted-foreground",
                    i18n.resolvedLanguage === lng && "text-foreground"
                  )}
                  type="submit"
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  <img
                    src={`https://hatscripts.github.io/circle-flags/flags/${lng}.svg`}
                    width="16"
                  />
                  {lngs[lng].nativeName}
                </button>
              ))}
            </div>

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
              <Link to="?login=true" onClick={toggleLoginModal}>
                <User size={32} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <LoginModal
        isOpen={isLoginOpen}
        toggleLoginModal={toggleLoginModal}
        toggleModals={toggleModals}
      />
      <SignUpModal
        isOpen={isSignUpOpen}
        toggleSignUpModal={toggleSignUpModal}
        toggleModals={toggleModals}
      />
    </div>
  );
}

export { Navbar };
