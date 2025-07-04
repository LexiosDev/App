"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ConfettiSideCannons } from "./magicui/confetti";
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [DarkMod, setDarkMod] = useState(false);

  return (
    <div
      className={cn("flex flex-col gap-6", DarkMod && "dark", className)}
      {...props}
    >
      <Card className="overflow-hidden p-0  w-[100dvw] h-[100dvh] dark:bg-blue-950 flex justify-center rounded-none items-center border-none shadow-none">
        <Button
          onClick={() => setDarkMod((prev) => !prev)}
          className="fixed top-4 right-4 bg-white text-black border-2 border-blue-200 hover:bg-blue-200 hover:brightness-105 dark:bg-blue-900 dark:text-white rounded-full h-10 w-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-contrast-icon lucide-contrast"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 18a6 6 0 0 0 0-12v12z" />
          </svg>
        </Button>

        <div className="absolute top-1/5 left-1/5"></div>
        <CardContent className="grid p-0 md:grid-cols-2 w-3/5">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold dark:text-white">
                  Olá, bem-vindo👋
                </h1>
                <p className="text-muted-foreground text-balance dark:text-white">
                  Logue na plataforma para ter mais funções!
                </p>
              </div>
              <div className="grid gap-3 dark:text-white">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="meuemail@exemplo.com"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full cursor-pointer border-1 dark:bg-blue-900 hover:brightness-85 hover:bg-white bg-white dark:text-white text-black border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
              >
                Login
              </Button>

              <div className="flex items-center w-full font-normal">
                <div className="flex-grow border-t border-black dark:border-white"></div>
                <span className="mx-4 dark:text-white">Ou continue com</span>
                <div className="flex-grow border-t border-black dark:border-white"></div>
              </div>

              <div className="grid grid-cols-1 gap-4  dark:text-white">
                <Button
                  variant="outline"
                  type="button"
                  className="w-full cursor-pointer border-1 dark:bg-blue-900 hover:brightness-85 hover:bg-white bg-white text-black border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] dark:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only dark:text-white">
                    Entre pelo Google
                  </span>
                </Button>
              </div>
              <div className="text-center text-sm dark:text-white">
                Não consegue entrar?{" "}
                <a href="#" className="underline underline-offset-4">
                  Suporte
                </a>
              </div>
            </div>
          </form>
          <ConfettiSideCannons></ConfettiSideCannons>
        </CardContent>
      </Card>
    </div>
  );
}
