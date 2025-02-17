import { FaWheelchair, FaProcedures, FaHandHoldingMedical, FaTshirt, FaUtensils } from 'react-icons/fa';
import { GiMedicines } from 'react-icons/gi';

const SupportHelp = () => {
  const supportTiers = [
    {
      amount: 100000,
      icon: <FaWheelchair size={40} />,
      impact: "Your contribution will help provide wheelchairs for elderly people, improving their mobility and independence."
    },
    {
      amount: 25000,
      icon: <FaHandHoldingMedical size={40} />,
      impact: "Your support will help provide oxygen tanks for elderly people in respiratory distress."
    },
    {
      amount: 50000,
      icon: <GiMedicines size={40} />,
      impact: "This contribution will supply essential medicines and medical supplies for a month to elderly people in need."
    },
    {
      amount: 75000,
      icon: <FaProcedures size={40} />,
      impact: "Your donation will help provide specialized medical beds for elderly care facilities."
    },
    {
      amount: 15000,
      icon: <FaUtensils size={40} />,
      impact: "Your donation will provide nutritious meals for a month to elderly individuals in need."
    },
    {
      amount: 20000,
      icon: <FaTshirt size={40} />,
      impact: "This contribution will help provide warm clothing and blankets for elderly people during cold seasons."
    }
  ];

  return (
    <div className="container mx-auto mb-16 max-w-6xl">
      <h2 className="text-4xl font-extrabold text-teal-600 text-center mb-10 relative">
        How Your Support Helps
        <span className="absolute -top-6 right-10 w-10 h-10 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full"></span>
        <span className="absolute -bottom-6 left-10 w-8 h-8 bg-gradient-to-tr from-teal-400 to-teal-600 rounded-full"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {supportTiers.map((tier, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-center text-teal-600 mb-4">
              {tier.icon}
            </div>
            <div className="text-xl font-bold text-center mb-2 text-teal-600">
              NPR {tier.amount.toLocaleString()}
            </div>
            <p className="text-gray-700 text-center">
              {tier.impact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportHelp;
