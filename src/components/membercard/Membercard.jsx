export default function Card({ image, name, role }) {
  return (
    <>
      <div className="flex flex-col place-items-center border border-solid border-white border-opacity-10  max-w-[270px] mb-8">
        <div className="pt-4 px-4">
          <img
            className="object-cover w-[240px] h-[320px]"
            src={image}
            alt=""
          />
        </div>
        <div className="font-geist font-semibold text-xl mt-4 mb-3">{name}</div>
        <div className="font-geist text-kmr-black-100 text-sm pb-4">{role}</div>
      </div>
    </>
  );
}