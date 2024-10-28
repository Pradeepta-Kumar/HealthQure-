import { HealthVitals } from "@/models/User";

export interface ApiResponse {
    success: boolean;
    message: string;
    diseases? : Array<HealthVitals>;
}