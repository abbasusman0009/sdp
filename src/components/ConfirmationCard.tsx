export const ConfirmationCard = ({ formData }) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
        <p className="text-green-600">Your membership details are below</p>
      </div>

      <div className="bg-green-50 border border-dashed border-green-500 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-sm font-medium text-gray-500">Name:</p>
            <p className="text-sm font-medium text-gray-500">Membership ID:</p>
            <p className="text-sm font-medium text-gray-500">Membership Type:</p>
            <p className="text-sm font-medium text-gray-500">Registration Date:</p>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-medium text-gray-900">{formData.firstName} {formData.lastName}</p>
            <p className="text-sm font-medium text-gray-900">{formData.membershipId}</p>
            <p className="text-sm font-medium text-gray-900">Standard</p>
            <p className="text-sm font-medium text-gray-900">{formData.registrationDate}</p>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          Thank you for registering. Your membership card will be sent to your email.
        </p>
      </div>
    </div>
  );
};