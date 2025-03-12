import { useState } from 'react';

const MemberList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');

  const members = [
    {
      id: 1,
      name: "Lorem Ipsum",
      joinDate: "2023-01-15",
    },
    {
      id: 2,
      name: "Ipsum Lorem",
      joinDate: "2023-02-20",
    },
    {
      id: 3,
      name: "Lorem Dolor",
      joinDate: "2023-03-10",
    },
    {
      id: 4,
      name: "Lorem Sit Amet",
      joinDate: "2023-04-05",
    },
    {
      id: 5,
      name: "Lorem Consectetur",
      joinDate: "2023-05-12",
    }
  ];

  const sortMembers = (members) => {
    return [...members].sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'date-asc':
          return new Date(a.joinDate) - new Date(b.joinDate);
        case 'date-desc':
          return new Date(b.joinDate) - new Date(a.joinDate);
        default:
          return 0;
      }
    });
  };

  const filteredMembers = sortMembers(
    members.filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="py-6 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-600 text-center mb-6">Our Members</h2>
      
      {/* Search and Sort Bar */}
      <div className="mb-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <input
          type="text"
          placeholder="Search members..."
          className="w-full sm:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full sm:w-48 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
        >
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="date-asc">Join Date (Oldest)</option>
          <option value="date-desc">Join Date (Newest)</option>
        </select>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredMembers.map(member => (
          <div key={member.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            </div>
            <div className="text-gray-600">
              <p><span className="font-medium">Joined:</span> {new Date(member.joinDate).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredMembers.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          No members found matching your search.
        </div>
      )}
    </div>
  );
};

export default MemberList;