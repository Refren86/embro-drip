import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { trailingDots } from "@/lib/utils";

function Footer() {
  const { t } = useTranslation();

  const categories = [
    {
      title: t("categories.hoodies"),
      endpoint: "hoodies",
    },
    {
      title: t("categories.tshirts"),
      endpoint: "shirts",
    },
    {
      title: t("categories.caps"),
      endpoint: "hats",
    },
    {
      title: t("categories.men"),
      endpoint: "men",
    },
    {
      title: t("categories.women"),
      endpoint: "women",
    },
  ];

  return (
    <div>
      <div className="bg-secondary p-4 mt-12">
        <div className="max-w-[1600px] mx-auto flex justify-center items-center">
          <h4 className="text-xl font-semibold">{t("subscribe.text")}</h4>
          <Input
            placeholder={trailingDots(t("login.email"))}
            className="w-56 ml-12 mr-2"
          />
          <Button>{t("subscribe.button")}</Button>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-[1600px] mx-auto px-4 py-8 flex justify-between">
          <div>
            <h3 className="font-bold text-xl mb-4">{t("categories.title")}</h3>

            <nav className="flex flex-col gap-y-2">
              {categories.map((category) => (
                <Link
                key={category.title}
                  to={`/categories/${category.endpoint}`}
                  className="hover:text-primary transition-text duration-300"
                >
                  {category.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">{t("contacts.title")}</h3>

            <div className="flex flex-col gap-y-2">
              <div>
                <p className="font-semibold">{t("contacts.phone")}</p>
                <a>+1234567890</a>
              </div>
              <div>
                <p className="font-semibold">{t("contacts.email")}</p>
                <a>example@gmail.com</a>
              </div>
              <div>
                <p className="font-semibold">{t("contacts.schedule")}</p>
                <p>{t("contacts.weekdays")} 10:00-21:00</p>
                <p>{t("contacts.weekends")} 10:00-20:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
