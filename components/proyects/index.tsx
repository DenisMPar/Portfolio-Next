import { InfoGrid } from "../InfoGrid";
import { useGetProyectsData } from "../../hooks";
import { ProyectsContainer, ProyectsTitle, ProyectWrapper } from "./elements";

export function Proyects() {
  const data = useGetProyectsData();

  return (
    <ProyectsContainer id="proyects">
      <ProyectsTitle>Proyectos</ProyectsTitle>
      <ProyectWrapper>
        {data.map((item) => {
          return (
            <InfoGrid
              techs={item.techs}
              img={item.imgUrl}
              type="proyect"
              title={item.proyectTitle}
              subtitle={item.proyectDescription}
              webLink={item.webLink}
              gitHubLink={item.gitHubLink ? item.gitHubLink : false}
              key={item.proyectTitle}
            ></InfoGrid>
          );
        })}
      </ProyectWrapper>
    </ProyectsContainer>
  );
}
