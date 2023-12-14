import Card from "@/components/Card/Card";
import Layout from "@/components/Layout/Layout";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Paintings = ({ arrayFromDB }) => {
  const [parent] = useAutoAnimate();
  return (
    <Layout title={`MERCEDES LLANOS`}>
      <div
        ref={parent}
        className="flex flex-wrap gap-4 py-4 pb-8 justify-center"
      >
        {arrayFromDB.length === 0 ? (
          <div className="w-full h-[70vh] grid place-content-center">
            <h2 className="text-2xl">There is no items... Yet</h2>
          </div>
        ) : (
          arrayFromDB.map((paint, i) => (
            <Card title={paint.name} url={paint.img[0]} id={paint.id} key={i} />
          ))
        )}
      </div>
    </Layout>
  );
};

export default Paintings;

export async function getServerSideProps(context) {
  try {
    const db = getFirestore();

    const queryCollectionWork = collection(db, "works");

    let arrayFromDB = [];

    const queryCollectionFiltered = query(
      queryCollectionWork,
      where("category", "==", context.params.type),
      where("year", "==", Number(context.params.year))
    );

    await getDocs(queryCollectionFiltered).then((res) =>
      res.docs.map((item) => arrayFromDB.push({ ...item.data(), id: item.id }))
    );

    return {
      props: {
        arrayFromDB,
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
