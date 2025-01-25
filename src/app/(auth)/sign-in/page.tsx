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
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      });
      router.push("/");
      router.refresh();
    }

    if (result?.url) {
      router.replace("/dashboard");
    }
  };
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-black px-4 sm:px-8">
      {/* Form Section */}
      <div className="flex justify-center items-center w-full lg:w-1/2 mb-8 lg:mb-0">
        <div className="w-full max-w-md p-8 space-y-8 bg-gray-900 text-white rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold tracking-tight lg:text-3xl mb-4 text-white">
              Welcome back to HealthQure+
            </h1>
            <p className="mb-6 text-sm font-semibold text-gray-300">
              Sign in to get your health tracks
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
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
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full py-2 font-semibold text-sm bg-white text-black hover:bg-gray-300 transition-all duration-200 rounded-md"
              >
                Sign-in
              </Button>
            </form>
          </Form>
          <div className="text-center mt-4">
            <p>
              New to HealthQure+?&nbsp;
              <Link
                href="/sign-up"
                className="text-blue-500 hover:text-blue-700 transition-all"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full lg:w-1/2">
        <img
          src="https://img.freepik.com/premium-vector/vision-scope-document-abstract-concept-vector-illustration_107173-25589.jpg"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-md"
          alt="Login illustration"
        />
      </div>
    </div>
  );
};

export default page;
