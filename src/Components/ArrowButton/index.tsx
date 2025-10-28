type ArrowProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    label: string;
    position: "prev" | "next";
  };

const ArrowButton: React.FC<ArrowProps> = ({ onClick, label, position }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        className={`absolute top-1/2 -translate-y-1/2 z-10
          bg-black hover:bg-red-600 focus:bg-red-600
          text-white rounded-full p-3 transition shadow
          ${position === "prev" ? "left-2" : "right-2"}`}
      >
        {position === "prev" ? "←" : "➜"}
      </button>
    );
  };

  export default ArrowButton;