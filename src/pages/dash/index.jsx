import { useEffect, useState } from "react";
import { uploadFileToFirebase } from "../../../firebase/config";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";
import { useRouter } from "next/router";
import { useAppContext } from "../../../context/AppContext";
import Loading from "../../components/Loading/Loading";

const Dashboard = () => {
  const [years, setYears] = useState([2020, 2021, 2022, 2023]);
  const [userLoading, setUserLoading] = useState(true);
  const router = useRouter();
  const { userLogged, userLogOut } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Subiendo...", { id: "loadingCreatePainting" });

    const imageFilesArray = Array.from(e.target[6].files);
    const urlImageArray = [];

    for (const file of imageFilesArray) {
      let imgUrl = await uploadFileToFirebase(file);
      urlImageArray.push(imgUrl);
    }

    const db = await getFirestore();
    try {
      await addDoc(collection(db, "works"), {
        category: e.target[0].value,
        name: e.target[2].value,
        year: Number(e.target[1].value),
        size: `${e.target[3].value} x ${e.target[4].value} in`,
        technique: e.target[5].value,
        img: urlImageArray,
        new: true,
      }).then(console.log("done"));
    } catch (error) {
      console.error(error);
      toast.error("Hubo un error! Intente nuevamente en unos minutos");
    } finally {
      toast.dismiss("loadingCreatePainting");
      toast.success("Subido correctamente!");
    }
  };

  const handleLogOut = async () => {
    await userLogOut().then(() => {
      router.push("/");
    });
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
    <div className="grid place-items-center min-h-screen h-fit py-4">
      {userLoading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full flex justify-between px-8">
            <Link
              className="flex gap-4 items-center justify-center w-fit transition-all hover:gap-6 hover:border-b hover:border-black py-2 border-b border-transparent"
              href="/"
            >
              <AiOutlineArrowLeft /> Volver
            </Link>
            <button
              onClick={handleLogOut}
              className="border-black font-semibold bg-red-600 text-white rounded-lg p-2 px-4 border w-fit tracking-wider hover:bg-red-500  transition-all"
            >
              Cerrar sesión
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 py-4">
            <h2 className="text-3xl">Instrucciones</h2>
            <p className="w-full px-8 md:p-0 md:w-8/12">
              Se deberá elegir la categoría y el año para que se filtre en la
              página, el asterisco (*) indica que el campo es obligatorio, los
              que no poseen el mismo es para facilitar a la hora de agregar una
              exhibición. Se pueden seleccionar varias imágenes a la vez, las
              mismas deben tener un peso menor a 5MB. Para editar los elementos
              guardados se deberá hacer click en el botón{" "}
              <i>"Editar elementos guardados"</i> al final de la página.
            </p>
          </div>
          <form
            className="flex flex-col justify-center items-center w-full md:w-[75%] gap-2"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex gap-4">
              <select
                name="galleryCategory"
                id="galleryCategory"
                required
                className="py-2 bg-white border-b border-black text-black md:w-1/2"
              >
                <option value="work">Pintura</option>
                <option value="exhibitions">Exhibición</option>
              </select>
              <select
                name="galleryCategory"
                id="galleryCategory"
                required
                className="py-2 bg-white border-b border-black text-black md:w-1/2"
              >
                {years.map((year, i) => (
                  <option key={i} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <input
              className="py-4 border-b border-black text-black w-[85%] md:w-[75%]"
              type="text"
              name="galleryName"
              id="galleryName"
              placeholder="Nombre*"
              required
            />
            <div className="flex items-center justify-center gap-4 w-[85%] md:w-[75%]">
              <input
                className="py-4 border-b border-black text-black w-12 text-center"
                type="number"
                name="galleryIn1"
                id="galleryIn1"
                placeholder="10"
              />
              &nbsp;x
              <input
                className="py-4 border-b border-black text-black w-12 text-center"
                type="number"
                name="galleryIn2"
                id="galleryIn12"
                placeholder="10"
              />
              &nbsp;in
            </div>
            <input
              className="py-4 border-b border-black text-black w-[85%] md:w-[75%]"
              type="text"
              name="galleryTechnique"
              id="galleryTechnique"
              placeholder="Técnica o descripción"
            />
            <div className="p-4 flex gap-4 w-[85%] md:w-[75%]">
              <input
                type="file"
                name="galleryImages"
                id="galleryImages"
                multiple
                required
                className="py-4 border rounded-lg p-4 border-black text-black text-center"
                accept="image/x-png,image/gif,image/jpeg"
                onChange={(e) => {
                  if (e.target.files[0].size > 5767168) {
                    toast.error("El archivo sobrepasa los 5MB");
                    e.target.value = "";
                  }
                }}
              />
              <button
                type="button"
                onClick={() => {
                  document.querySelector("#galleryImages").value = "";
                }}
              >
                <IoIosCloseCircle color="red" size={"2em"} />
              </button>
            </div>
            <button className="border-black rounded-lg p-4 px-8 border w-fit tracking-wider hover:bg-black hover:text-white transition-all">
              Guardar
            </button>
          </form>
          <Link
            className="flex gap-4 items-center justify-center pt-8 w-fit transition-all hover:gap-6 hover:border-b hover:border-black py-2 border-b border-transparent"
            href="/dash/edit"
          >
            Editar elementos guardados <AiOutlineArrowRight />
          </Link>
        </>
      )}
      <Toaster />
    </div>
  );
};

export default Dashboard;
