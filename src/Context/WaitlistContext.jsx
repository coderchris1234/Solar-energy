// WaitlistContext.jsx
import { createContext, useContext, useState } from "react";

const WaitlistContext = createContext();

export const WaitlistProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const endpoint =
    "https://script.google.com/macros/s/AKfycbzYAQG8neHze4mC3W3beoI14Meek3W0Gj2MkU0P0JNLmoP7ifyoGZsLbDRva0TNVigX/exec";

  const openModal = () => {
    setShowModal(true);
    setSuccess(false);
    setErrorMsg("");
  };

  const closeModal = () => {
    if (loading) return;
    setShowModal(false);
    setFullName("");
    setEmail("");
  };

  const validateEmail = (email) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

  const submitWaitlist = async () => {
    setErrorMsg("");

    if (!fullName.trim()) {
      setErrorMsg("Full name is required");
      return;
    }

    if (!email.trim()) {
      setErrorMsg("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMsg("Enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ name: fullName, email }),
        headers: { "Content-Type": "application/json" },
      });

      setSuccess(true);
      setFullName("");
      setEmail("");

      // Close modal after 2.5s
      setTimeout(() => {
        setShowModal(false);
        setSuccess(false);
      }, 2500);
    } catch (err) {
      console.log(err);
      setErrorMsg("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <WaitlistContext.Provider
      value={{
        showModal,
        openModal,
        closeModal,

        fullName,
        setFullName,
        email,
        setEmail,

        loading,
        success,
        errorMsg,
        submitWaitlist,
      }}
    >
      {children}
    </WaitlistContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWaitlist = () => useContext(WaitlistContext);
