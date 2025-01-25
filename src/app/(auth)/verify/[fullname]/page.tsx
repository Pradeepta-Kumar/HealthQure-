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
import { Loader2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Form } from "../../../../components/ui/form";
import { z } from "zod";

const VerifyAccount = () => {
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
        title: "Verification failed",
        description: errMsg || "An error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="w-full max-w-lg p-6 md:p-8 bg-black rounded-lg shadow-lg border border-gray-800">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Verify Account
          </h1>
          <p className="text-sm md:text-base font-semibold mb-6">
            Enter your secret code to verify your account and get started!
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm md:text-base font-bold">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="user@example.com"
                      {...field}
                    />
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
                  <FormLabel className="text-sm md:text-base font-bold">
                    Code
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="XXXXXX"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full text-sm md:text-base font-semibold bg-white text-black hover:bg-gray-400"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default VerifyAccount;
