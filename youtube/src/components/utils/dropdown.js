import { useEffect, useState } from "react";

const DropdownMenu = ({ identifier }) => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow((prev) => !prev);
  };

  const cleanupShow = (e) => {
    // Check if the clicked element is part of this dropdown
    if (!e.target.closest(`#${identifier}`)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", cleanupShow);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", cleanupShow);
    };
  });

  return (
    <div>
      <div
        onClick={showHandler}
        id={identifier} // Dynamic identifier
        className="w-[35px] h-[35px] rounded-full border-[0.5px] bg-gray-600 overflow-hidden"
      >
        <img alt="D" className="object-cover w-full h-full" />
      </div>
      {show && (
        <div className="absolute bg-white border-2 mt-2 right-0 dropdown">
          <h1>fs</h1>
          <p>dsfs</p>
          <p>A sial lpeam df</p>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
