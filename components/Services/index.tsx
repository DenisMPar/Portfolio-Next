import {
  CardsWrapper,
  ServicesContainer,
  ServicesTitle,
} from "./servicesElements";
import { ServicesCard } from "../../ui/servicesCard";
import { useGetServicesData } from "../../hooks";

function Services() {
  const services = useGetServicesData();

  return (
    <ServicesContainer id="technologies">
      <ServicesTitle>Mis Tecnologías</ServicesTitle>
      <CardsWrapper>
        {services.map((service) => (
          <ServicesCard
            key={service.serviceTitle}
            title={service.serviceTitle}
            img={service.imgUrl}
          ></ServicesCard>
        ))}
      </CardsWrapper>
    </ServicesContainer>
  );
}

export { Services };
