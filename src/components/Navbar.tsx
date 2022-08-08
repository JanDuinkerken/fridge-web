const Navbar = () => {
  return (
    <div class="flex items-center bg-blue-500 w-screen h-24">
      <button
        onClick={() => window.location.reload()}
        class=" ml-5 text-white text-l py-1 px-2 rounded inline-flex items-center"
      >
        <svg
          class="w-10 h-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 25"
          stroke="currentColor"
        >
          <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>
        </svg>
        <h2 class=" ml-3 text-4xl text-white">Fridges</h2>
      </button>
    </div>
  );
};

export default Navbar;
