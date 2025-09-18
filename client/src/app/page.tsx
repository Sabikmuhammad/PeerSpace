import Container from "@/components/container";

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <Container className="col-span-2 bg-gray-200 h-screen">left</Container>
      <Container className="col-span-7 bg-gray-300 h-screen">hi</Container>
      <Container className="col-span-3 bg-gray-200 h-screen">right</Container>
    </div>
  );
}
