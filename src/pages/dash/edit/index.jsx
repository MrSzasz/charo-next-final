import EditCard from "@/components/EditCard/EditCard";
import Loading from "@/components/Loading/Loading";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { deleteImageOnStorage } from "../../../../firebase/config";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "../../../../context/AppContext";

const Edit = ({ arrayFromDB }) => {
  const router = useRouter();
  const { userLogged } = useAppContext();
  const [userLoading, setUserLoading] = useState(true);

  const handleEdit = async (e, id) => {
    e.preventDefault();
    toast.loading("Cargando...", { id: "editLoading" });
    try {
      const db = await getFirestore();
      const dataRef = doc(db, "works", id);

      await updateDoc(dataRef, {
        name: e.target.parentElement.parentElement[0].value,
        size: `${e.target.parentElement.parentElement[1].value} x ${e.target.parentElement.parentElement[2].value} in`,
        technique: e.target.parentElement.parentElement[3].value,
        category: e.target.parentElement.parentElement[4].value,
        year: Number(e.target.parentElement.parentElement[5].value),
      });
    } catch (error) {
      toast.error("Hubo un error! Intente nuevamente más tarde");
      toast.dismiss("editLoading");
      console.error(error);
    } finally {
      toast.dismiss("editLoading");
      toast.success("Editado con éxito!");
    }
  };

  const handleDelete = (e, id, isNew, paintingUrls) => {
    e.preventDefault();
    toast.custom(
      <div className="bg-white p-8 border border-black rounded-lg flex flex-col gap-4">
        <p>¿Estás segura que querés eliminar?</p>
        <div className="flex justify-center items-center gap-2 pt-2">
          <button
            onClick={() => toast.dismiss("confirmDelete")}
            className="border-black bg-white rounded-lg p-2 px-4 border w-fit tracking-wider hover:bg-black hover:text-white  transition-all"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              toast.remove("confirmDelete");
              deleteItemOnDB(id, isNew, paintingUrls);
            }}
            className="border-black bg-red-600 rounded-lg p-2 px-4 border w-fit tracking-wider hover:bg-red-500  transition-all"
          >
            Borrar
          </button>
        </div>
      </div>,
      {
        duration: 999999,
        id: "confirmDelete",
      }
    );
  };

  const deleteItemOnDB = async (id, isNew, paintingUrls) => {
    toast.loading("Cargando...", { id: "deleteLoading" });

    try {
      if (Boolean(isNew)) {
        paintingUrls.forEach((url) => {
          deleteImageOnStorage(
            url.split("/")[7].split("%2F")[1].split("?alt")[0]
          );
        });
      }

      const db = await getFirestore();

      await deleteDoc(doc(db, "works", id));
    } catch (error) {
      toast.error("Hubo un error! Intente nuevamente más tarde");
      toast.dismiss("deleteLoading");
      console.error(error);
    } finally {
      document.getElementById(id).classList.toggle("hidden");
      toast.dismiss("deleteLoading");
      toast.success("Eliminado con éxito!");
    }
  };

  useEffect(() => {
    const getUserFromStorage = localStorage.getItem("userData");
    getUserFromStorage
      ? console.log(getUserFromStorage)
      : localStorage.setItem("userData", "null");
    if (userLogged === null && getUserFromStorage === "null") {
      router.push("/");
    } else {
      setUserLoading(false);
    }
  }, []);

  return (
    <div className="flex gap-4 flex-wrap justify-center  p-8">
      {userLoading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full">
            <Link
              className="flex gap-4 items-center justify-center w-fit transition-all hover:gap-6 hover:border-b hover:border-black py-2 border-b border-transparent"
              href="/dash"
            >
              <AiOutlineArrowLeft /> Volver
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 py-4">
            <h2 className="text-3xl">Instrucciones</h2>
            <p className="w-full px-2 md:p-0 md:w-8/12">
              Para editar los elementos guardados se deberá sobre escribir lo
              que desee editar, y luego tocar <i>"Guardar"</i> en el elemento
              editado. Para eliminar un elemento se deberá tocar el botón de{" "}
              <i>"Eliminar"</i> y confirmar la ventana que saldrá a
              continuación.{" "}
              <span className="text-red-600 font-bold">
                ESTA ACCIÓN NO SE PUEDE REVERTIR
              </span>
              .<br /> Las imágenes no se pueden editar, por lo que si hay un
              error se deberá eliminar y volver a subir las mismas junto a su
              descripción.
            </p>
          </div>
          <div className="flex flex-wrap justify-evenly  gap-4">
            {arrayFromDB ? (
              arrayFromDB
                .sort((a, b) => a.year - b.year)
                .map((item) => (
                  <EditCard
                    editFn={handleEdit}
                    deleteFn={handleDelete}
                    painting={item}
                    key={item.id}
                  />
                ))
            ) : (
              <Loading />
            )}
          </div>
        </>
      )}
      <Toaster />
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const db = getFirestore();

    const queryCollectionWork = collection(db, "works");

    let arrayFromDB = [];

    await getDocs(queryCollectionWork).then((res) =>
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

export default Edit;
