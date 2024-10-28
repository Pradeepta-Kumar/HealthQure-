"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "../../../../components/ui/useToast";
import { verifySchema } from "../../../../schemas/VerifySchema";
import { ApiResponse } from "@/types/ApiResponse";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { Link, Loader2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Form } from "../../../../components/ui/form";
import { z } from "zod";

const verifyAccount = () => {
  const router = useRouter();
  const params = useParams<{ email: string }>();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof verifySchema>>({
    resolver: zodResolver(verifySchema),
  });
  const onSubmit = async (data: z.infer<typeof verifySchema>) => {
    try {
      const response = await axios.post("/api/verifyCode", {
        email: data.email,
        code: data.code,
      });
      toast({
        title: "Success",
        description: response.data.message,
      });
      router.replace("/sign-in");
    } catch (err) {
      console.error("Error creating and verifying the new user", err);
      const axiosError = err as AxiosError<ApiResponse>;
      let errMsg = axiosError.response?.data.message;
      toast({
        title: "Sign up failed",
        description: errMsg,
        variant: "destructive",
      });
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-black rounded-lg shadow-md text-white border border-sm border-gray-900 shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-4xl mb-6">
            Verify Account
          </h1>
          <p className="mb-4 font-semibold">Enter your secret code to <br />verify your account and get started!</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-xl">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="user@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-xl">Code</FormLabel>
                  <FormControl>
                    <Input placeholder="XXXXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="font-semibold text-lg bg-white text-black hover:bg-gray-400" type="submit">Submit</Button>
          </form>
        </Form>
        {/* <div className="text-center mt-4">
          <p>
            new to HealthQure+ ?
            <Link href="/sign-up" className="text-blue-600 hover:text-blue:800">
              Sign up for free
            </Link>
          </p>
        </div> */}
      </div>
    </div>
  );
};
export default verifyAccount;