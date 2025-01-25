"use client";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useToast } from "../../../components/ui/useToast";
import { useRouter } from "next/navigation";
import { signupSchema } from "@/schemas/signupSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ApiResponse } from "@/types/ApiResponse";
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
import { Loader2 } from "lucide-react";

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    setIsSubmitting(true);
    try {
      console.log(data);
      const response = await axios.post<ApiResponse>("/api/sign-up", data);
      toast({
        title: "Success",
        description: response.data.message,
      });
      router.replace(`/verify/${data.fullname}`);
      setIsSubmitting(false);
    } catch (err) {
      console.error("Error in creating the new user", err);
      const axiosError = err as AxiosError<ApiResponse>;
      let message = axiosError.response?.data.message;
      toast({
        title: "Sign up FAILED!",
        description: message || "An error occurred. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-6 md:p-8 space-y-8 bg-black rounded-lg border border-gray-900 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Welcome to HealthQure+
          </h1>
          <p className="mb-4 text-sm font-semibold">
            Sign up to keep your health on track
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
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
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full font-semibold bg-white text-black hover:bg-gray-400"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Sign-up"
              )}
            </Button>
          </form>
        </Form>
        <div className="text-center">
          <p>
            Already have an account?{" "}
            <Link href="/sign-in" className="text-blue-600 hover:text-blue-800">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:ml-8">
        <img
          src="https://c8.alamy.com/comp/2C76HXE/thin-line-blue-icon-of-the-best-place-for-remote-work-young-woman-is-working-outsourced-lat-design-vector-illustration-ready-to-animation-vector-co-2C76HXE.jpg"
          className="w-[300px] md:w-[400px] rounded-md"
          alt="Signup-Image"
        />
      </div>
    </div>
  );
};

export default Page;
