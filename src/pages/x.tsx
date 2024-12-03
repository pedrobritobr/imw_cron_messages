export default function CreateCron() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-500">Cron Creator</h1>
      <form className="bg-white p-6 rounded-lg shadow-md mt-4 w-full max-w-lg">
        <label htmlFor="message" className="block text-gray-700">Mensagem</label>
        <input
          id="message"
          type="text"
          className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
        />
      </form>
    </div>
  );
}
