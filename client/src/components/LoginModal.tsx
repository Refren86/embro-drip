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

type LoginModalProps = {
  isOpen: boolean;
  toggleLoginModal: () => void;
  toggleModals: () => void;
};

const loginSchema = z.object({
  email: z.string().email({ message: "Введено невірний формат" }),
  password: z.string().min(6, "Пароль надто короткий"),
});

function LoginModal({ isOpen, toggleLoginModal, toggleModals }: LoginModalProps) {
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
          <DialogTitle className="text-2xl font-bold">Логін</DialogTitle>
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
                  <FormLabel>Ел. пошта</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Е-мейл..." {...field} />
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
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Пароль..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Увійти
            </Button>

            <p className="text-center">
              Немає аккаунту?{" "}
              <Link to="?sign-up=true" className="underline" onClick={toggleModals}>
                Зареєструватись
              </Link>
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export { LoginModal };
