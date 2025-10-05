// import React from "react";

// const Contact = () => {
//   return (
//     <>
//       <div className=" h-full flex flex-col gap-5 items-start text-white ">
//         <div className="mb-5 flex flex-col gap-2">
//           <div className="text-white text-2xl font-thin">Contact</div>
//           <div className="text-white text-md font-thin">
//             <p>Drop a message! I'll reach out shortly.</p>
//           </div>
//         </div>
//         <div className="p-5 border-b border-t border-l border-white/20 rounded-l-4xl w-full h-full ">
//           <form>
//             <div className="flex flex-col gap-10">
//               <div className="flex flex-col gap-3">
//                 <label className="text-lg font-medium">Name</label>{" "}
//                 <input
//                   type="text"
//                   className="p-2 rounded-t-2xl border-b border-white/20 w-full focus:border-emerald-600/40 transition-all duration-500 outline-none bg-transparent focus:shadow-[0px_10px_35px_-9px_rgba(16,_185,_129,_0.2)]"
//                 />
//               </div>
//               <div className="flex flex-col gap-3">
//                 <label className="text-lg font-medium">Mail</label>
//                 <input
//                   type="email"
//                   className="p-2  rounded-t-2xl border-b border-white/20 w-full focus:border-emerald-600/40 transition-all duration-500 outline-none bg-transparent focus:shadow-[0px_10px_30px_-9px_rgba(16,_185,_129,_0.2)]"
//                 />
//               </div>
//               <div className="flex flex-col gap-3">
//                 <label className="text-lg font-medium">Message</label>
//                 <textarea className="p-2 rounded-t-2xl border-b border-white/20 w-full focus:border-emerald-600/40 transition-all duration-500 outline-none bg-transparent focus:shadow-[0px_10px_30px_-9px_rgba(16,_185,_129,_0.2)]" />
//               </div>
//               <div className="flex justify-center ">
//                 <button className="w-[50%] sm:w-[20%] p-2 rounded-4xl bg-emerald-600 text-white/60 hover:bg-emerald-600/80 hover:text-white transition-all duration-500 border border-emerald-600/40 hover:shadow-[0px_10px_30px_-5px_rgba(16,_185,_129,_0.2)]">
//                   Send
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mvgwqbzd");
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (e) => {
    e.preventDefault(); // prevent page reload
    const formData = new FormData(e.target);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    const errors = { name: "", email: "", message: "" };
    let hasError = false;

    if (!name) {
      errors.name = "Name is required.";
      hasError = true;
    }

    if (!email) {
      errors.email = "Email is required.";
      hasError = true;
    }

    if (!message) {
      errors.message = "Message cannot be empty.";
      hasError = true;
    }

    setFormErrors(errors);

    if (!hasError) {
      handleSubmit(e).then(() => {
        setSubmitted(true);
      });
    }
  };

  return (
    <div className="h-full flex flex-col gap-5 items-start text-white">
      <div className="mb-5 flex flex-col gap-2">
        <div className="text-white text-2xl font-thin">Contact</div>
        <div className="text-white text-md font-thin">
          <p>Drop a message! I'll reach out shortly.</p>
        </div>
      </div>
      <div className="w-full flex ">
        <div className="p-5 border-b border-t border-l border-white/20 rounded-l-4xl w-full h-full">
          <form onSubmit={validateForm}>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <label className="text-lg font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  className="p-2 rounded-t-2xl border-b border-white/20 w-full sm:w-1/3 focus:border-emerald-600/40 transition-all duration-500 outline-none bg-transparent focus:shadow-[0px_10px_35px_-9px_rgba(16,_185,_129,_0.2)]"
                />
                {formErrors.name && (
                  <p className="text-red-400 text-sm">{formErrors.name}</p>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-lg font-medium">Mail</label>
                <input
                  type="email"
                  name="email"
                  className="p-2 rounded-t-2xl border-b border-white/20 w-full sm:w-1/3 focus:border-emerald-600/40 transition-all duration-500 outline-none bg-transparent focus:shadow-[0px_10px_30px_-9px_rgba(16,_185,_129,_0.2)]"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                {formErrors.email && (
                  <p className="text-red-400 text-sm">{formErrors.email}</p>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-lg font-medium">Message</label>
                <textarea
                  name="message"
                  className="p-2 h-[35px] rounded-t-2xl border-b border-white/20 w-full sm:w-1/3 focus:border-emerald-600/40 transition-all duration-500 outline-none bg-transparent focus:shadow-[0px_10px_30px_-9px_rgba(16,_185,_129,_0.2)] resize-y overflow-hidden"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                {formErrors.message && (
                  <p className="text-red-400 text-sm">{formErrors.message}</p>
                )}
              </div>

              <div className="flex flex-col items-center
              sm:items-start sm:pl-20 gap-3">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-[50%] sm:w-[20%] p-2 rounded-4xl bg-emerald-600 text-white/60 hover:bg-emerald-600/80 hover:text-white transition-all duration-500 border border-emerald-600/40 hover:shadow-[0px_10px_30px_-5px_rgba(16,_185,_129,_0.2)]"
                >
                  {state.submitting ? "Sending..." : "Send"}
                </button>

                {submitted && state.succeeded && (
                  <p className="text-emerald-400 text-md animate-fadeIn">
                    Will get back to you soon!
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
