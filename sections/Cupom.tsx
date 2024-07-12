interface Props {
  codigo: string;
  descricao: string;
}

function Gallery(props: Props) {
  return (
    <div>
      <span>{props.codigo}</span>
      <p>{props.descricao}</p>
    </div>
  );
}

export default Gallery;
