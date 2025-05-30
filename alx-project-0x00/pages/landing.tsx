import Card from "@/components/card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex gap-0.5 ml-1 mt-4">
        <Button className="bg-blue-500 text-white px-4 py-2 rounded-sm">Book now</Button>
        <Button className="bg-blue-500 text-white px-4 py-2 rounded-md">reach out</Button>
        <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg">check out</Button>
        <Button className="bg-blue-500 text-white px-4 py-2 rounded-full">Contact us</Button>
      </div>
    </div>
  );
}

export default Landing;
