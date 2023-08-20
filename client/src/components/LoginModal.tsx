import { z } from "zod";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/Dialog";
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
import { trailingDots } from "@/lib/utils";

type LoginModalProps = {
  isOpen: boolean;
  toggleLoginModal: () => void;
  toggleModals: () => void;
};

function LoginModal({
  isOpen,
  toggleLoginModal,
  toggleModals,
}: LoginModalProps) {
  const { t } = useTranslation();

  const loginSchema = z.object({
    email: z.string().email({ message: t("login.emailError") }),
    password: z.string().min(6, t("login.passwordError")),
  });

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof loginSchema>) {
    console.log("Data >>>", data);
    toggleLoginModal();
  }

  return (
    <Dialog open={isOpen} onOpenChange={toggleLoginModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {t("login.title")}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("login.email")}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={trailingDots(t("login.email"))}
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
                  <FormLabel>{t("login.password")}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={trailingDots(t("login.password"))}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-2">
              <Button type="submit" className="w-full">
                {t("login.signIn")}
              </Button>
            </div>

            <p className="text-center">
              <Trans
                i18nKey="login.signUpRedirect"
                components={{
                  Link: (
                    <Link
                      to="?sign-up=true"
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

export { LoginModal };
