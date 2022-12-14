import { CoffeList } from "./components/CoffeeList";
import { Slogan } from "./components/Slogan";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Slogan />
      <CoffeList />
    </HomeContainer>
  );
}
