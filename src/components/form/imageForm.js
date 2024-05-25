import Image from "next/image";

const ImageForm = ({ src, alt, width, height }) => {
  return (
    <div className="hidden lg:block">
      <Image alt={alt} src={src} width={width} height={height} />
    </div>
  );
};

export default ImageForm;
