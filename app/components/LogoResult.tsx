import React from "react";
import Image from 'next/image';

type Props = {
  imageSrc: string;
};

const LogoResult: React.FC<Props> = ({imageSrc}) => {
  return (
    <div className="w-full h-full flex justify-center items-center animate-slide-in">
      <Image src={imageSrc} alt='test' width={475} height={475} />
      {/* <Image src={imageSrc} alt={tweet} width={475} height={475} className={styles.image} /> */}
    </div>
  );
};

export default LogoResult;
