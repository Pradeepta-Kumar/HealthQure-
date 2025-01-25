"use client";
import { useCallback, useState, useEffect } from "react";
import { HealthVitals } from "../../../models/User";
import { useSession } from "next-auth/react";
import axios, { AxiosError } from "axios";
import { Button } from "../../../components/ui/button";
import { ApiResponse } from "../../../types/ApiResponse";
import { Loader2, RefreshCcw } from "lucide-react";
import HealthCard from "../../../components/HealthCard";
import { useToast } from "../../../components/ui/useToast";

const DashboardPage = () => {
  const [diseases, setDiseases] = useState<HealthVitals[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const { data: session } = useSession();

  const fetchHealthDetails = useCallback(
    async (refresh: boolean = false) => {
      setIsLoading(true);
      try {
        const response = await axios.get<ApiResponse>("/api/getHealthDetails");
        setDiseases(response.data.diseases || []);
        if (refresh) {
          toast({
            title: "Latest health data is here",
            description: "All health details fetched successfully",
          });
        }
      } catch (err) {
        const axiosError = err as AxiosError;
        console.error(axiosError);
        toast({
          title: "Error",
          description: "Failed to fetch health details",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    },
    [toast]
  );

  useEffect(() => {
    if (session && session.user) {
      fetchHealthDetails();
    }
  }, [session, fetchHealthDetails]);

  if (!session || !session.user) {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center font-bold text-2xl pt-20">
        <p>Please Log-in!</p>
        <p>The page you're trying to access needs to be authenticated</p>
      </div>
    );
  }

  const fullname = session.user.fullname || "User";

  return (
    <div className="py-4 px-6 md:px-10 lg:px-20  lg:mx-auto p-6 w-full bg-black text-white h-full">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">User Dashboard</h1>
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold my-3">Welcome, {fullname}</h3>
        <Button
          className="mt-4"
          variant="outline"
          onClick={(e) => {
            e.preventDefault();
            fetchHealthDetails(true);
          }}
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin text-black" />
          ) : (
            <RefreshCcw className="h-4 w-4 text-black" />
          )}
        </Button>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {diseases.length > 0 ? (
            diseases.map((disease, index) => (
              <HealthCard key={index} disease={disease} />
            ))
          ) : (
            <p>No health data to display.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
