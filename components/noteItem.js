import { VscChromeClose } from "react-icons/vsc";

export const NoteItem = ({
  active = false,
  text,
  removeButton = true,
  className = "",
  onClick = () => {},
  onRemove = () => {},
}) => {
  return (
    <li className="mb-4 block overflow-hidden">
      <button
        className={`p-5 block w-full ${
          active
            ? `bg-indigo-600 text-white`
            : `bg-indigo-50 hover:bg-indigo-100 text-gray-600`
        } rounded-lg text-lg font-semibold transition duration-300 text-left relative ${className}`}
        onClick={onClick}
      >
        {text.length > 30 ? text.substring(0, 30) + "..." : text}
        {text.length === 0 && "Start Writing..."}
        {removeButton && (
          <span
            className={`absolute ${
              active ? `right-2` : `-right-16`
            } top-1/2 -translate-y-1/2 px-4 py-4 rounded-lg text-white flex justify-center items-center hover:bg-indigo-800 bg-indigo-500 transition duration-300`}
            onClick={onRemove}
          >
            <VscChromeClose />
          </span>
        )}
      </button>
    </li>
  );
};
