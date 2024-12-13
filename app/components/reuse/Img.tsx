import React, { FC } from "react";

interface ImgProps {
  src: string;
  height: string;
  width: string;
}

const Img: FC<ImgProps> = ({ src, height, width }) => {
  return (
    <div
      className="bg-img"
      style={{
        backgroundImage: `url(${src})`,
        height: `${height}`,
        width: `${width}`,
      }}
    ></div>
  );
};

export default Img;
