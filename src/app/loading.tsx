import { Spinner } from "@nextui-org/react";
import { Navbar } from "../components/UI/Navbar";

export default function loading() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center mt-12">
        <Spinner />
      </div>
    </div>
  );
}
