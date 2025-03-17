import SupportHeader from "./SupportHeader";

const Support = () => {
  console.log("contact support");

  return (
    <>
      <SupportHeader />

      <div className="support-container mx-auto p- mt-4" id="tailwind-container">


        {/* defines how many columns per screen ; grid-cols-1 */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


          {/* Column 1 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">Column 1</h2>
            <p>This is the first column.</p>
          </div>

          {/* Column 2 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">Column 2</h2>
            <p>This is the second column.</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Support;
