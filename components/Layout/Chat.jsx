"use client";

import Image from "next/image";

const Chat = () => {
  return (
    <a
      target="_blank"
      className="fixed bottom-10 right-10 z-50"
      href="https://wa.me/919810316441"
    >
      <Image
        className="h-14 md:h-18 w-auto"
        src={"/whatsapp.png"}
        height={1000}
        width={1000}
        alt="whatsapp chat"
      />
    </a>
  );
};

export default Chat;
