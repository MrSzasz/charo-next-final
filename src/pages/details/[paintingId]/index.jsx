import Layout from "@/components/Layout/Layout";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { useEffect, useState } from "react";

const PaintingDetails = ({ dataFromDB }) => {
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    const array = [];

    dataFromDB.img.forEach((img) => {
      array.push({ original: img, thumbnail: img });
    });

    setImageArray(array);
  }, []);

  return (
    <Layout title={dataFromDB.name + " | MERCEDES LLANOS"}>
      <div className="pb-10">
        <div className="flex flex-col text-center py-12 gap-2">
          <h2 className="text-xl italic">
            "{dataFromDB.name}"
            <span className="text-base hidden md:inline">
              - {dataFromDB.year}
            </span>
          </h2>
          <span className="text-base md:hidden">{dataFromDB.year}</span>
          <h3>{dataFromDB.technique}</h3>
          <small>{dataFromDB.size}</small>
        </div>
        <ImageGallery showPlayButton={false} items={imageArray} />
      </div>
    </Layout>
  );
};

export default PaintingDetails;

export async function getServerSideProps(context) {
  try {
    const db = getFirestore();

    const paintingInStorage = await getDoc(
      doc(db, "works", context.params.paintingId)
    );

    return {
      props: {
        dataFromDB: paintingInStorage.data(),
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        err: "err",
      },
    };
  }
}
