import Link from "next/link";

const Card = ({ title, url, id }) => {
  return (
    <Link href={`/details/${id}`} className="md:w-1/6 flex flex-col gap-3">
      <img className="hover:scale-110 transition-all" src={url} alt="" />
      <h3>{title}</h3>
    </Link>
  );
};

export default Card;
