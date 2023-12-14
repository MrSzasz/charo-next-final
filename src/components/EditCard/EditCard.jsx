import { useState } from "react";

const EditCard = ({ painting, editFn, deleteFn }) => {
  const [years, setYears] = useState([2020, 2021, 2022, 2023]);
  return (
    <div
      className="min-w-[20em] w-[30%] flex flex-col justify-center items-center border border-black rounded-lg p-4 gap-6"
      id={painting.id}
    >
      <img src={painting.img[0]} alt="" />
      <form className="flex flex-col gap-2">
        <input
          className="py-4 border-b border-black text-black w-full"
          type="text"
          name="editGalleryName"
          id="editGalleryName"
          placeholder="Nombre"
          defaultValue={painting.name}
        />
        <div className="flex items-center justify-center gap-4 w-full">
          <input
            className="py-4 border-b border-black text-black w-12 text-center"
            type="number"
            name="editGalleryIn1"
            id="editGalleryIn1"
            placeholder="10"
            defaultValue={painting.size.split(" ")[0]}
          />
          &nbsp;x
          <input
            className="py-4 border-b border-black text-black w-12 text-center"
            type="number"
            name="editGalleryIn2"
            id="editGalleryIn2"
            placeholder="10"
            defaultValue={painting.size.split(" ")[2]}
          />
          &nbsp;in
        </div>
        <input
          className="py-4 border-b border-black text-black w-full"
          type="text"
          name="editGalleryTechnique"
          id="editGalleryTechnique"
          placeholder="Técnica o descripción"
          defaultValue={painting.technique}
        />
        <div className="flex gap-4">
          <select
            name="editGalleryCategory"
            id="editGalleryCategory"
            defaultValue={painting.category}
            className="py-2 bg-white border-b border-black text-black w-1/2"
            required
          >
            <option value="work">Pintura</option>
            <option value="exhibitions">Exhibición</option>
          </select>
          <select
            name="galleryCategory"
            id="galleryCategory"
            defaultValue={Number(painting.year)}
            required
            className="py-2 bg-white border-b border-black text-black w-1/2"
          >
            {years.map((year, i) => (
              <option key={i} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center items-center gap-4 pt-8 pb-4">
          <button
            onClick={(e) => {
              editFn(e, painting.id);
            }}
            className="border-black text-white font-semibold bg-green-600 rounded-lg p-4 px-8 border w-fit tracking-wider hover:bg-green-500  transition-all"
          >
            Guardar
          </button>
          <button
            onClick={(e) => {
              deleteFn(e, painting.id, painting.new || false, painting.img);
            }}
            className="border-black text-white font-semibold bg-red-600 rounded-lg p-4 px-8 border w-fit tracking-wider hover:bg-red-500  transition-all"
          >
            Eliminar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCard;
