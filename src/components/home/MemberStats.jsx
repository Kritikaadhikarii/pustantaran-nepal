import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MemberStats = () => {
  const [memberCount, setMemberCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const [displayRemaining, setDisplayRemaining] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showPreInfoModal, setShowPreInfoModal] = useState(false);
  const targetMembers = 10000;

  useEffect(() => {
    const fetchMemberCount = async () => {
      try {
        const response = await axios.get(
          "https://be-pustantarannepal.onrender.com/api/members"
        );
        setMemberCount(response.data.length);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };
    fetchMemberCount();
  }, []);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const currentCount = Math.round(progress * (memberCount + 11));
      const currentRemaining = Math.round(
        progress * (targetMembers - memberCount - 11)
      );

      setDisplayCount(currentCount);
      setDisplayRemaining(currentRemaining);

      if (currentStep === steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [memberCount]);

  const remainingSpots = targetMembers - memberCount - 11;
  const progressPercentage = (memberCount / targetMembers) * 100;

  const Modal = ({ isOpen, onClose, url }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <iframe
            src={url}
            className="w-full h-full rounded-lg"
            title="Membership Form"
          />
        </div>
      </div>
    );
  };

  const PreInfoModal = ({ isOpen, onClose, onProceed }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg w-full max-w-2xl h-[600px] my-8 relative flex flex-col">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="overflow-y-auto flex-1 p-6">
            <h2 className="text-2xl font-bold text-teal-600 mb-4">
              Required Information for Membership
            </h2>
            <p className="text-gray-600 mb-4">
              Please note that you'll need to provide the following information:
            </p>

            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Full Name</li>
              <li>• Date of Birth</li>
              <li>• Special Occasion</li>
              <li>• Contact Information</li>
              <li>• Email Address</li>
              <li>• Motivation for becoming a member</li>
              <li>• Preference for receiving updates</li>
            </ul>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-semibold text-gray-800 mb-2">
                Membership Fee: NPR 10,000
              </p>
              <p className="text-gray-600 text-sm">
                Payment can be made via QR code provided in the form.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <p className="text-yellow-800">
                <span className="font-semibold">Important:</span> All fields in
                the form are mandatory and must be filled before submission.
              </p>
            </div>

            <p className="text-gray-700 mb-6">
              You can also support us by:
              <ul className="mt-2 space-y-2">
                <li>• Connecting us with potential funding sources</li>
                <li>• Providing valuable technical expertise in senior care</li>
                <li>• Making donations via QR code</li>
                <li>• Utilizing our products and services</li>
              </ul>
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-teal-700 -mb-4">Banking Details</h1>
            <br />
            <p>
              Account Name: Pustantaran Nepal
              <br />
              Account Number: 023010010001845
              <br />
              Bank Name: Sanima Bank Limited
              <br />
              Swift Code: SNMANCKA
            </p>
          </div>

          <div className="border-t p-4 bg-white rounded-b-lg">
            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={onProceed}
                className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
              >
                Proceed to Form
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleMembershipClick = () => {
    setShowPreInfoModal(true);
  };

  const handleProceedToForm = () => {
    setShowPreInfoModal(false);
    setShowModal(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto mb-12">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">Membership Status</h3>

        <div className="flex justify-center items-center space-x-12 my-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-teal-600 mb-2">
              {displayCount}
            </div>
            <div className="text-gray-600">Current Members</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-teal-600 mb-2">
              {displayRemaining.toLocaleString()}
            </div>
            <div className="text-gray-600">Available Spots</div>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-teal-600 h-4 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <p className="text-lg text-gray-700">
          Join our growing community! We're looking for{" "}
          <span className="font-bold text-teal-600">
            {remainingSpots.toLocaleString()}
          </span>{" "}
          more passionate individuals to reach our goal of{" "}
          <span className="font-bold text-teal-600">
            {targetMembers.toLocaleString()}
          </span>{" "}
          members.
        </p>

        <div className="bg-teal-50 p-4 rounded-lg mt-6">
          <p className="text-teal-800">
            Be one of the first {targetMembers.toLocaleString()} members to
            shape the future of senior care in Nepal!
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={handleMembershipClick}
            className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors font-semibold"
          >
            Become a Member
          </button>
        </div>
      </div>

      <PreInfoModal
        isOpen={showPreInfoModal}
        onClose={() => setShowPreInfoModal(false)}
        onProceed={handleProceedToForm}
      />
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        url="https://docs.google.com/forms/d/e/1FAIpQLSebnMqKlXTzHw4v4crgrLUpGtbjweTOSZoG_zyQKQtIcdOisQ/viewform"
      />
    </div>
  );
};

export default MemberStats;
