const Button = ({ name, onclikFunction }) => {
  return (
    <button onClick={onclikFunction} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      { name }
    </button>
  );
}

export default Button