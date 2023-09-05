import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/Dialog";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/Form";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { trailingDots } from "@/lib/utils";

type SignUpModalProps = {
  isOpen: boolean;
  toggleSignUpModal: () => void;
  toggleModals: () => void;
};

const signUpSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email({ message: "Введено невірний формат" }),
  password: z.string().min(6, "Пароль надто короткий"),
});

function SignUpModal({
  isOpen,
  toggleSignUpModal,
  toggleModals,
}: SignUpModalProps) {
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof signUpSchema>) {
    console.log("Data >>>", data);
    toggleSignUpModal();
  }

  return (
    <Dialog open={isOpen} onOpenChange={toggleSignUpModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {t("signUp.title")}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("signUp.name")}</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder={trailingDots(t("signUp.name"))}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("signUp.surname")}</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder={trailingDots(t("signUp.surname"))}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("signUp.email")}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={trailingDots(t("signUp.email"))}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("signUp.password")}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={trailingDots(t("signUp.password"))}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-2">
              <Button type="submit" className="w-full">
                {t("signUp.signUp")}
              </Button>
            </div>

            <p className="text-center">
              <Trans
                i18nKey="signUp.signInRedirect"
                components={{
                  Link: (
                    <Link
                      to="?login=true"
                      className="underline"
                      onClick={toggleModals}
                    />
                  ),
                }}
              />
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export { SignUpModal };
