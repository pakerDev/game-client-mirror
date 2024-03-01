import tw from "twin.macro";
import CustomBorder from "@/components/custom-border";

const Container = tw.div`w-screen h-screen flex justify-center items-center bg-gray-100`;

export default function App() {
  return (
    <Container>
      <CustomBorder />
    </Container>
  );
}
