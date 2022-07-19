import { Asset, EntryFields } from "contentful";
import { useEffect, useState } from "react";
import useSWRImmutable from "swr/immutable";
import { getCmsContent } from "../lib/api";

//trae la data de la pagina desde cms
export function useGetDataFromCms() {
  const { data, error } = useSWRImmutable("/api/content", getCmsContent);

  return data ? data : error;
}

//cambia el display del home cuando termina de cargar el video
export const useShowPage = () => {
  const [flag, setFlag] = useState(false);
  const [display, setDisplay] = useState("none");
  useEffect(() => {
    flag ? setDisplay("block") : setDisplay("none");
  }, [flag]);
  function toggle() {
    setFlag(!flag);
  }
  return { toggle, display };
};

function getCmsImgUrl(object: Asset) {
  return object.fields.file.url;
}
function getCmsDescription(object: EntryFields.RichText) {
  const description = object.content[0].value;
  return description;
}

//devuelve los datos de servicios del state
export function useGetServicesData() {
  const state = useGetDataFromCms();

  const services = state?.filter((item) => item.serviceTitle);
  const formatedServices = services.map((service) => {
    return {
      serviceTitle: service.serviceTitle,
      imgUrl: getCmsImgUrl(service.serviceImg),
    };
  });
  return formatedServices;
}
export function useGetProyectsData() {
  const state = useGetDataFromCms();
  const proyects = state?.filter((item) => item.proyectTitle);

  const formatedProyects = proyects?.map((proyect) => {
    return {
      techs: proyect.techs,
      proyectTitle: proyect.proyectTitle,
      imgUrl: getCmsImgUrl(proyect.proyectPreviewImg),
      movilUrl: getCmsImgUrl(proyect.imgMovil),
      mediumUrl: getCmsImgUrl(proyect.imgMedium),
      gitHubLink: proyect.gitHubLink,
      webLink: proyect.webLink,
      proyectDescription: getCmsDescription(
        proyect.proyectDescription.content[0]
      ),
    };
  });
  return formatedProyects;
}
export function useGetAboutMeData() {
  const state = useGetDataFromCms();
  const aboutMe = state?.filter((item) => item.aboutMeTitle);
  if (aboutMe.length > 0) {
    const formattedAboutMe = {
      aboutMeTitle: aboutMe[0]?.aboutMeTitle,
      imgUrl: getCmsImgUrl(aboutMe[0]?.aboutMeImg),
      aboutMeDescription: getCmsDescription(aboutMe[0]?.aboutMeDescription[0]),
    };
    return formattedAboutMe;
  }
}
export function useGetWidth() {
  const [width, setWidth] = useState("movil");
  useEffect(() => {
    if (window.innerWidth < 480) setWidth("movil");

    if (window.innerWidth < 769) setWidth("medium");

    if (window.innerWidth >= 769) setWidth("large");
  }, []);
  return width;
}
