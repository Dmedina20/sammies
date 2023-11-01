import "../../App.css";
function Learn() {
  return (
    <>
      <div className="hero min-h-screen bg-primary overflow-y-hidden">
        <div className="hero-content grid grid-cols-2 gap-4">
          <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-neutral-content">
              Learn More About Us!
            </h1>
            <p className="py-6 text-2xl text-neutral-content">
              We build awareness and support for the social & environmental
              issues that we feel strongly about. Find out how you can help.
            </p>
            <button className="btn btn-accent  font-bold">
              Learn More About Us and Our Values
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Learn;
