const SignInPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50 font-opensans">
        <div className="flex flex-col items-center">
          <img
            className="w-32"
            src="https://static-task-assets.react-formula.com/102167.png"
          />
          <div className="mt-2 text-3xl text-green-800 font-bubblegum">
            Carl's Cat Sitters
          </div>
        </div>
        <form
          className="flex flex-col m-8"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="px-4 py-2 my-3 rounded-md bg-amber-900/20 placeholder-amber-900/40 text-amber-800"
            placeholder="username"
          />
          <input
            className="px-4 py-2 my-3 rounded-md bg-amber-900/20 placeholder-amber-900/40 text-amber-800"
            placeholder="password"
            type="password"
          />
        </form>
      </div>
    </>
  );
};

export default SignInPage;
