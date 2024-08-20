export default function InputText({ label, id }) {
	return (
	  <>
		<label
		  htmlFor={id}
		  className="block text-sm font-semibold leading-6 text-black">
		  {label}
		</label>
		<div className="mt-2 relative">
		  <input
			type="text"
			name={id}
			id={id}
			className="block w-full rounded-md border-0 py-2 px-4 font-light shadow-md focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-primary-dark focus:border-none transition-all duration-300 ease-in-out bg-gradient-to-r from-gradient-primary-light to-gradient-primary-dark text-black placeholder:text-gray-400 focus:outline-none focus:placeholder-opacity-60"
		  />
		  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
			<span className="text-lg text-primary-light"></span>
		  </div>
		</div>
	  </>
	);
  }
  