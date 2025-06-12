import Header from "@/components/Header";

export default function GetStartedPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4 text-center">
          TRANSFORM YOUR E-COMMERCE <br />
          <span className="text-purple-600">PERFORMANCE TODAY</span>
        </h1>
        <p className="text-lg text-center mb-6">
          THREE SIMPLE STEPS TO UNLOCK AI-POWERED GROWTH FOR YOUR BUSINESS
        </p>
        <p className="text-md text-center mb-10 text-gray-600">
          Ready to see real results? Our streamlined onboarding process makes it
          easy to harness the power of AI for your e-commerce business. No
          technical knowledge required—just bring your business goals, and we’ll
          handle the rest.
        </p>

        <form className="space-y-6" action="/api/assessment" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="p-3 border rounded w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="p-3 border rounded w-full"
            />
            <input
              type="text"
              name="website"
              placeholder="Business Website"
              required
              className="p-3 border rounded w-full"
            />
            <select name="country" required className="p-3 border rounded w-full">
              <option value="">Select Country</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>United Arab Emirates</option>
              <option>France</option>
              <option>Germany</option>
              <option>Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
}
