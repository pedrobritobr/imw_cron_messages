import { useState } from "react";
// import "../styles/globals.css"; // Certifique-se de importar o CSS global

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const weekOptions = [
  "First",
  "Second",
  "Third",
  "Fourth",
  "Last",
];

const CreateCron = () => {
  const [formData, setFormData] = useState({
    message: "",
    recipient: "",
    time: "",
    recurrence: "",
    dayOfWeek: "",
    dayOfMonth: "",
    weekDayOption: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cron Details:", formData);
    alert("Cron created successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Create a New Cron</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Recipient Field */}
          <div>
            <label htmlFor="recipient" className="block text-sm font-medium text-gray-700">
              Recipient
            </label>
            <input
              type="text"
              id="recipient"
              name="recipient"
              value={formData.recipient}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Time Field */}
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Recurrence Field */}
          <div>
            <label htmlFor="recurrence" className="block text-sm font-medium text-gray-700">
              Recurrence
            </label>
            <select
              id="recurrence"
              name="recurrence"
              value={formData.recurrence}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="">Select Recurrence</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="biweekly">Biweekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          {/* Weekly Options */}
          {formData.recurrence === "weekly" && (
            <div>
              <label htmlFor="dayOfWeek" className="block text-sm font-medium text-gray-700">
                Day of the Week
              </label>
              <select
                id="dayOfWeek"
                name="dayOfWeek"
                value={formData.dayOfWeek}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              >
                <option value="">Select a Day</option>
                {daysOfWeek.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Biweekly and Monthly Options */}
          {(formData.recurrence === "biweekly" || formData.recurrence === "monthly") && (
            <div>
              <label htmlFor="dayOfMonth" className="block text-sm font-medium text-gray-700">
                Day of the Month
              </label>
              <input
                type="number"
                id="dayOfMonth"
                name="dayOfMonth"
                value={formData.dayOfMonth}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                min={1}
                max={31}
                required={formData.recurrence === "biweekly" || formData.recurrence === "monthly"}
              />
              <p className="text-sm text-gray-500 mt-1">
                For example: Enter a specific date (e.g., 15) or leave blank if choosing a weekday option.
              </p>
            </div>
          )}

          {/* Monthly Specific Weekday */}
          {(formData.recurrence === "monthly" || formData.recurrence === "biweekly") && (
            <div>
              <label htmlFor="weekDayOption" className="block text-sm font-medium text-gray-700">
                Specific Weekday Option
              </label>
              <div className="flex gap-4 mt-2">
                <select
                  id="weekDayOption"
                  name="weekDayOption"
                  value={formData.weekDayOption}
                  onChange={handleChange}
                  className="block w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Select Week Option</option>
                  {weekOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <select
                  id="dayOfWeek"
                  name="dayOfWeek"
                  value={formData.dayOfWeek}
                  onChange={handleChange}
                  className="block w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Select Day</option>
                  {daysOfWeek.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create Cron
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCron;
