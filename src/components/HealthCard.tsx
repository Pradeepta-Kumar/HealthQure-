"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HealthVitals } from "@/models/User";

type HealthCardProps = {
  disease: HealthVitals;
};

const HealthCard = ({ disease }: HealthCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="bg-black text-white font-semibold text-lg flex items-center justify-center py-1">
          Here is your disease
        </CardTitle>
        <CardDescription className="font-semibold text-black">
          Gender: {disease.gender}
        </CardDescription>
        <CardDescription className="font-semibold text-black">
          Age: {disease.age}
        </CardDescription>
        <CardDescription className="font-semibold text-black">
          Pulse rate: {disease.pulseRate}
        </CardDescription>
        <CardDescription className="font-semibold text-black">
          Blood pressure: {disease.bloodPressure}
        </CardDescription>
        <CardDescription className="font-semibold text-black">
          Respiration rate: {disease.respirationRate}
        </CardDescription>
        <CardDescription className="font-semibold text-black">
          Body temprature: {disease.bodyTemp}
        </CardDescription>
        <CardDescription className="font-semibold text-black">
          Oxygen level: {disease.oxygenRate}
        </CardDescription>
        <CardDescription className="font-semibold text-black">
          Blood glucose levels: {disease.bloodGlucose}
        </CardDescription>
        <CardDescription className="font-semibold text-black">
          Weight: {disease.weight}
        </CardDescription>
        <CardDescription className="font-semibold text-black">
          Cholesterol: {disease.cholesterol}
        </CardDescription>
        <CardDescription className="font-semibold text-black">
          Result: {disease.result}
        </CardDescription>
      </CardHeader>
      <CardContent>{/* <p>Card content</p> */}</CardContent>
    </Card>
  );
};

export default HealthCard;
