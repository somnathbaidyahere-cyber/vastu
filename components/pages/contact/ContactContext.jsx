"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

const ContactContext = createContext(null);

export function ContactProvider({ children }) {
  const [topic, setTopic] = useState(null);
  const formRef = useRef(null);

  function chooseTopic(selected) {
    setTopic(selected);

    window.requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  function clearTopic() {
    setTopic(null);
  }

  return (
    <ContactContext.Provider
      value={{
        topic,
        setTopic,
        chooseTopic,
        clearTopic,
        formRef,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);

  if (!context) {
    throw new Error(
      "useContact must be used within a ContactProvider",
    );
  }

  return context;
}