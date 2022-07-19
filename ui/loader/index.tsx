import css from "./Index.module.css";

//componente que muestra un spinner de carga
function LoaderComp() {
  return (
    <div className={css.wrapper}>
      <div className={css["lds-dual-ring"]}></div>
    </div>
  );
}

export { LoaderComp };
