import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X, MapPin, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function VerifyOwnershipModal({ isOpen, setIsOpen }) {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [ownershipData, setOwnershipData] = useState(null);
  const [isUsingCurrentLocation, setIsUsingCurrentLocation] = useState(false);

  const handleGetCurrentLocation = () => {
    setIsUsingCurrentLocation(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude}, ${longitude}`);
          setIsUsingCurrentLocation(false);
          toast.success('Location detected successfully!');
        },
        (error) => {
          console.error("Error getting location:", error);
          toast.error('Failed to get current location. Please enter manually.');
          setIsUsingCurrentLocation(false);
        }
      );
    } else {
      toast.error('Geolocation is not supported by your browser');
      setIsUsingCurrentLocation(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate blockchain interaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate ownership data
      setOwnershipData({
        owner: "0x1234...5678",
        registrationDate: "2024-03-15",
        propertyId: "PROP-001",
        status: "Verified"
      });
    } catch (error) {
      toast.error('Failed to verify ownership. Please try again.');
      setOwnershipData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-xl w-full rounded-2xl bg-gray-800 p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <Dialog.Title className="text-xl font-semibold text-white">
              Verify Land Ownership
            </Dialog.Title>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Location
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter location or coordinates"
                  required
                />
                <button
                  type="button"
                  onClick={handleGetCurrentLocation}
                  disabled={isUsingCurrentLocation}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isUsingCurrentLocation ? (
                    <Loader2 className="animate-spin h-4 w-4" />
                  ) : (
                    <MapPin className="h-4 w-4" />
                  )}
                  Current Location
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !location}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                  Verifying...
                </>
              ) : (
                'Verify Ownership'
              )}
            </button>
          </form>

          {ownershipData && (
            <div className="mt-6 p-4 bg-gray-700 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-4">Ownership Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Owner:</span>
                  <span className="text-white">{ownershipData.owner}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Registration Date:</span>
                  <span className="text-white">{ownershipData.registrationDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Property ID:</span>
                  <span className="text-white">{ownershipData.propertyId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Status:</span>
                  <span className="text-green-400">{ownershipData.status}</span>
                </div>
              </div>
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}