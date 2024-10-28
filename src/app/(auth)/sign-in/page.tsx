"use client";
import Link from "next/link";
import { useToast } from "../../../components/ui/useToast";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signinSchema } from "@/schemas/signinSchema";
import { useState } from "react";
import { signIn } from "next-auth/react";

const page = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signinSchema>) => {

    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      toast({
        title: 'Error',
        description: result.error,
        variant: 'destructive',
      });
      router.push("/");
      router.refresh();
    }

    if (result?.url) {
      router.replace('/dashboard');
    }
  };
  return (
    <div className="flex justify-around bg-black mx-auto items-center">
      <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-black rounded-lg text-white border border-sm border-gray-900 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl mb-6 text-white">
            Welcome back to HealthQure+
          </h1>
          <p className="mb-4 text-sm font-semibold text-white">Sign in to get your health tracks</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email"
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              
            />
            <Button type="submit" className="font-semibold text-sm bg-white text-black hover:bg-gray-400">
              Sign-in
            </Button>
          </form>
        </Form>
        <div className="text-center mt-4">
          <p>
            new to HealthQure+ ?&nbsp;
            <Link href="/sign-up" className="text-blue-600 hover:text-blue:800">
              Sign up for free
            </Link>
          </p>
        </div> 
      </div>
    </div>
    <div>
      <img src="https://img.freepik.com/premium-vector/vision-scope-document-abstract-concept-vector-illustration_107173-25589.jpg" className="w-[400px] h-[400px] rounded-md" alt="Login image" />
    </div>
    </div>
  );
};
export default page;