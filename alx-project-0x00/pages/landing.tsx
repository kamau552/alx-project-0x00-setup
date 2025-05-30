import Card from "@/components/card";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex gap-0.5 ml-1 mt-4">
        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-sm">Book now</button>
        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md">reach out</button>
        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-full">check out</button>
      </div>
    </div>
  );
}

export default Landing;
