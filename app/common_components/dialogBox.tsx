import Link from "next/link";
import Image from "next/image";

interface DialogBoxProps {
	title: string
	description: string
	link: string
	buttonText: null | string
	closeModal: () => void
}

const DialogBox = ({
  title,
  description,
  link,
  buttonText,
  closeModal,
}: DialogBoxProps) => {
  return (
    <dialog
      open
      className='z-20 rounded-lg max-w-[50%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] m-0'
    >
      <button
        onClick={closeModal}
        className='text-gray-400 absolute right-2 top-2'
      >
        <Image src='/close_X.svg' width={20} height={20} />
      </button>
      <h2 className='font-semibold'>{title}</h2>
      <p className='pb-6'>{description}</p>

      {buttonText && (
        <Link
          href={link}
          className='rounded-3xl bg-red-400 py-2 px-3 text-sm absolute right-2 bottom-2'
        >
          {buttonText}
        </Link>
      )}
    </dialog>
  );
};

export default DialogBox;
