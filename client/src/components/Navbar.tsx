import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingCart, User, X } from 'lucide-react';

import { LoginModal } from './LoginModal';
import { SignUpModal } from './SignUpModal';
import { useAppSelector } from '@/store/hooks';
import { selectUser } from '@/store/slices/userSlice';
import { cn, getCountryFlagCodeByLanguage } from '@/lib/utils';
import { Button } from './ui/Button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from './ui/DropdownMenu';
import HoodieImg from '../assets/images/categories/hoodies.jpg';
import Logo from '../assets/icons/logo-white.svg';

type LanguagesCodes = 'en' | 'uk';
type NativeNames = {
  nativeName: 'EN' | 'UA';
};

type Languages = Record<LanguagesCodes, NativeNames>;

const lngs: Languages = {
  en: { nativeName: 'EN' },
  uk: { nativeName: 'UA' },
};

const cartItems = [
  {
    id: 1,
    title: 'Жовте худі',
    count: 1,
    price: 400,
    image: HoodieImg,
  },
];

function Navbar() {
  const user = useAppSelector(selectUser);
  const [searchParams, setSearchParams] = useSearchParams();
  const { i18n, t } = useTranslation();

  const [isLoginOpen, setLoginOpen] = useState(!!searchParams.get('login'));
  const [isSignUpOpen, setSignUpOpen] = useState(!!searchParams.get('sign-up'));

  function toggleLoginModal() {
    if (isLoginOpen) {
      searchParams.delete('login');
      setSearchParams(searchParams);
      setLoginOpen(false);
    } else {
      setLoginOpen(true);
    }
  }

  function toggleSignUpModal() {
    if (isSignUpOpen) {
      searchParams.delete('sign-up');
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

  console.log('User >>>', user);

  return (
    <div>
      <div className="bg-primary h-8 flex justify-center items-center">
        <p>
          <Trans
            i18nKey="navbar.promotion"
            components={{
              b: <b />,
              Link: <Link to="?sign-up=true" onClick={toggleSignUpModal} className="underline" />,
            }}
          />
        </p>
      </div>
      <nav className="bg-secondary h-16">
        <div className="flex justify-between items-center max-w-[1600px] mx-auto px-4 h-full">
          {/* Left */}
          <Link to="/">
            <img src={Logo} width={200} />
          </Link>

          {/* Right */}
          <div className="flex items-center gap-x-4">
            <div className="flex gap-x-3">
              {Object.keys(lngs).map((lng) => (
                <button
                  key={lng}
                  className={cn(
                    'flex items-center gap-x-1 h-[42px] text-muted-foreground',
                    i18n.resolvedLanguage === lng && 'text-foreground'
                  )}
                  onClick={() => {
                    i18n.changeLanguage(lng);
                  }}
                >
                  <img
                    src={`https://hatscripts.github.io/circle-flags/flags/${getCountryFlagCodeByLanguage(
                      lng as LanguagesCodes
                    )}.svg`}
                    width="16"
                  />
                  {lngs[lng as LanguagesCodes].nativeName}
                </button>
              ))}
            </div>

            <div className="flex justify-center items-center min-w-[48px] h-12 hover:bg-primary/40 rounded-full cursor-pointer transition-background duration-300">
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full h-full">
                  <div className="relative flex justify-center items-center">
                    <ShoppingCart size={28} />

                    <span className="flex justify-center items-center absolute -right-0 -top-1 rounded-full bg-destructive text-foreground text-xs font-semibold w-5 h-5">
                      1
                    </span>
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  {cartItems.map((item) => {
                    return (
                      <DropdownMenuItem key={item.id}>
                        <div className="flex items-center gap-x-16 p-2">
                          <div className="flex">
                            <img src={item.image} alt={item.title} width={60} height={80} />

                            <div className="pl-4">
                              <p className="text-base font-medium">{item.title}</p>
                              <p>Кількість: {item.count}</p>
                              <p>Ціна: {item.price * item.count}₴</p>
                            </div>
                          </div>

                          <Button variant="destructive">
                            <X />
                          </Button>
                        </div>
                      </DropdownMenuItem>
                    );
                  })}

                  <DropdownMenuItem>
                    <Link to="/cart" className="w-full">
                      <Button className="w-full">Придбати товар</Button>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex justify-center items-center min-w-[48px] h-12 hover:bg-primary/40 rounded-full cursor-pointer transition-background duration-300">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-full h-full font-semibold">
                    {user.name.charAt(0)}. {user.surname.charAt(0)}.
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <DropdownMenuLabel>{t('navbar.account')}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>{t('navbar.settings')}</DropdownMenuItem>
                    <DropdownMenuItem>{t('navbar.shoppingHistory')}</DropdownMenuItem>
                    <DropdownMenuItem>{t('navbar.logOut')}</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="?login=true" onClick={toggleLoginModal}>
                  <User size={28} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <LoginModal isOpen={isLoginOpen} toggleLoginModal={toggleLoginModal} toggleModals={toggleModals} />
      <SignUpModal isOpen={isSignUpOpen} toggleSignUpModal={toggleSignUpModal} toggleModals={toggleModals} />
    </div>
  );
}

export { Navbar };
