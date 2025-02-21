const Contributors = () => {
  return (
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-teal-500 font-playfair text-5xl font-bold text-gradient text-center mb-8">
        List of Contributors
      </h2>
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full mb-12">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-teal-500 text-white">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Address</th>
              <th className="border border-gray-300 px-4 py-2">Contact Information</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Motivation for Contribution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">[Name]</td>
              <td className="border border-gray-300 px-4 py-2">[Address]</td>
              <td className="border border-gray-300 px-4 py-2">[Contact]</td>
              <td className="border border-gray-300 px-4 py-2">[Email]</td>
              <td className="border border-gray-300 px-4 py-2">[Motivation]</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contributors;
