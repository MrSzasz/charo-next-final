import Layout from "@/components/Layout/Layout";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const index = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast.loading("Sending...", { id: "sendEmailToast" });

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID_ENVKEY,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID_ENVKEY,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY_ENVKEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.dismiss("sendEmailToast");
          toast.success("Email sent successfully", {
            style: {
              backgroundColor: "#61d345",
              color: "white",
              fontWeight: 600,
            },
          });
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          toast.dismiss("sendEmailToast");
          toast.error("Something went wrong, please try again later", {
            style: {
              backgroundColor: "#ff4b4b",
              color: "white",
              fontWeight: 600,
            },
          });
        }
      );
  };

  return (
    <Layout title="CONTACT | MERCEDES LLANOS">
      <div className="grid md:grid-flow-col md:grid-cols-2 place-content-center place-items-center gap-12 md:gap-0 py-8">
        <div className="flex flex-col items-center justify-center md:w-1/2 gap-10">
          <h2 className="text-xl text-center">
            For inquiries, questions, comments, etc. contact:
          </h2>
          <div className="flex flex-col justify-center items-start">
            <h3>Galerie Balice Hertling</h3>
            <a href="mailto:gallery@balicehertling.com" className="underline">
              gallery@balicehertling.com
            </a>
            <a href="tel:+330979429699" className="underline">
              +33 (0) 9 79 42 96 99
            </a>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h3>Mercedes Llanos</h3>
            <a href="mailto:merchallanos@gmail.com" className="underline">
              merchallanos@gmail.com
            </a>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          id="form"
          className="flex flex-col gap-4 md:w-10/12"
        >
          <input
            className="p-4 border-b border-black"
            type="text"
            name="name"
            id="name"
            required
            placeholder="Name*"
          />
          <input
            className="p-4 border-b border-black"
            type="text"
            name="lastName"
            id="lastName"
            required
            placeholder="Last Name*"
          />
          <input
            className="p-4 border-b border-black"
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email*"
          />
          <textarea
            className="p-4 border-b border-black"
            cols={12}
            required
            name="message"
            id="message"
            placeholder="Message*"
          />
          <button className="m-auto border-black rounded-lg p-4 px-8 border w-fit tracking-wider hover:bg-black hover:text-white transition-all">
            Submit
          </button>
        </form>
      </div>
      <Toaster />
    </Layout>
  );
};

export default index;
