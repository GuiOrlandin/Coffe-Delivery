import { CoffeCard } from "../CoffeCard";
import { CoffeListContainer, CoffeListContent } from "./styles";
import { coffees } from "../../../../../Data/coffee";

export function CoffeList() {
  return (
    <CoffeListContainer>
      <h1>Nossos cafés</h1>
      <CoffeListContent>
        {coffees.map((coffee) => (
          <CoffeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeListContent>
    </CoffeListContainer>
  );
}
