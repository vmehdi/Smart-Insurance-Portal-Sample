import { InsurancePlans } from "@/components/InsurancePlans";
import { InsuranceSubmitted } from "@/components/InsuranceSubmitted";

export default function Home() {
  return (
    <div className="container mx-auto">
      <InsurancePlans />
      <InsuranceSubmitted />
    </div>
  );
}
