
function Contact() {
  return (
    <div id="Contact" className="w-[90%] max-w-3xl mx-auto p-6 mt-10 bg-gray-900 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">Contact Me</h2>

      <form
        action="https://formsubmit.co/your_email@example.com" // Replace with your real email
        method="POST"
        className="space-y-6"
      >
        {/* Hidden inputs */}
        <input type="hidden" name="_next" value="https://your-portfolio.com/thankyou" />
        <input type="hidden" name="_captcha" value="false" />

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message..."
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
