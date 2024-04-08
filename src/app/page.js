// pages/index.js
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>Software Company Landing Page</title>
        <meta
          name='description'
          content='Landing page for a software company'
        />
      </Head>

      {/* Hero Section */}
      <section className='min-h-screen relative bg-gray-900 text-white'>
        <div className='absolute inset-0'>
          <Image
            src='https://source.unsplash.com/random/1920x1080/?software,technology'
            alt='Hero Background'
            layout='fill'
            objectFit='cover'
            quality={100}
          />
          <div className='absolute inset-0 bg-gray-900 opacity-75'></div>
        </div>
        <div className='container mx-auto px-4 py-16 relative z-10'>
          <h1 className='text-4xl font-bold mb-4'>
            Innovative Software Solutions
          </h1>
          <p className='text-lg mb-8'>
            We build cutting-edge software to power your business.
          </p>
          <a
            href='#contact'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className='bg-white py-16' id='about'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='md:w-1/2 mb-8 md:mb-0'>
              <Image
                src='https://source.unsplash.com/random/1920x1080/?software,technology'
                alt='About Image'
                width={500}
                height={500}
                className='rounded-lg shadow-lg'
              />
            </div>
            <div className='md:w-1/2 md:pl-8'>
              <h2 className='text-3xl font-bold mb-4'>About Our Company</h2>
              <p className='text-gray-700 mb-4'>
                We are a team of passionate software engineers dedicated to
                delivering innovative solutions that drive business growth and
                success.
              </p>
              <p className='text-gray-700 mb-4'>
                With years of experience in the industry, we understand the
                unique challenges faced by businesses in the digital age. Our
                software is designed to streamline processes, enhance
                productivity, and provide a competitive edge.
              </p>
              <a
                href='#contact'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className='bg-gray-500 py-16' id='features'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Features</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Feature Card 1 */}
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='flex items-center justify-center mb-4'>
                <svg
                  className='h-8 w-8 text-blue-500'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
                  <circle cx='12' cy='7' r='4'></circle>
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-2'>
                User-Friendly Interface
              </h3>
              <p className='text-gray-700'>
                Our software is designed with a clean and intuitive user
                interface, ensuring a smooth and enjoyable experience for all
                users.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='flex items-center justify-center mb-4'>
                <svg
                  className='h-8 w-8 text-blue-500'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'></path>
                  <polyline points='7.5 4.21 12 6.81 16.5 4.21'></polyline>
                  <polyline points='7.5 19.79 7.5 14.6 3 12'></polyline>
                  <polyline points='21 12 16.5 14.6 16.5 19.79'></polyline>
                  <polyline points='3.27 6.96 12 12.01 20.73 6.96'></polyline>
                  <line x1='12' y1='22.08' x2='12' y2='12'></line>
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-2'>Robust Architecture</h3>
              <p className='text-gray-700'>
                Our software is built on a solid and scalable architecture,
                ensuring high performance and reliability for your business
                operations.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='flex items-center justify-center mb-4'>
                <svg
                  className='h-8 w-8 text-blue-500'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                  <circle cx='9' cy='7' r='4'></circle>
                  <path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
                  <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-2'>Secure and Compliant</h3>
              <p className='text-gray-700'>
                Our software adheres to the highest security standards and
                industry regulations, ensuring the protection of your data and
                compliance with applicable laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='bg-gray-500 py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            What Our Clients Say
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Testimonial Card 1 */}
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='text-gray-700 mb-4'>
                "Your software has revolutionized the way we do business. It's
                user-friendly, efficient, and has significantly increased our
                productivity."
              </p>
              <div className='flex items-center'>
                <img
                  src='/avatar-1.jpg' // Replace with your image path
                  alt='Avatar'
                  className='h-10 w-10 rounded-full mr-4'
                />
                <div>
                  <h3 className='font-bold'>John Doe</h3>
                  <p className='text-gray-600'>CEO, Company Amazon</p>
                </div>
              </div>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='text-gray-700 mb-4'>
                "Your software has revolutionized the way we do business. It's
                user-friendly, efficient, and has significantly increased our
                productivity."
              </p>
              <div className='flex items-center'>
                <img
                  src='/avatar-1.jpg' // Replace with your image path
                  alt='Avatar'
                  className='h-10 w-10 rounded-full mr-4'
                />
                <div>
                  <h3 className='font-bold'>John Doe</h3>
                  <p className='text-gray-600'>CEO, Company Amazon</p>
                </div>
              </div>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='text-gray-700 mb-4'>
                "Your software has revolutionized the way we do business. It's
                user-friendly, efficient, and has significantly increased our
                productivity."
              </p>
              <div className='flex items-center'>
                <img
                  src='/avatar-1.jpg' // Replace with your image path
                  alt='Avatar'
                  className='h-10 w-10 rounded-full mr-4'
                />
                <div>
                  <h3 className='font-bold'>John Doe</h3>
                  <p className='text-gray-600'>CEO, Company Amazon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-blue-500 text-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='mb-8 md:mb-0'>
              <h2 className='text-3xl font-bold mb-4'>Ready to Get Started?</h2>
              <p className='text-lg'>
                Take your business to the next level with our innovative
                software solutions.
              </p>
            </div>
            <div>
              <a
                href='#contact'
                className='bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-3 px-6 rounded-full transition duration-300'
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className='bg-gray-900 text-white py-16' id='contact'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Contact Us</h2>
          <form className='max-w-md mx-auto'>
            {/* Name Field */}
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-gray-300 font-bold mb-2'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Enter your name'
                required
              />
            </div>

            {/* Email Field */}
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-gray-300 font-bold mb-2'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Enter your email'
                required
              />
            </div>

            {/* Message Field */}
            <div className='mb-4'>
              <label
                htmlFor='message'
                className='block text-gray-300 font-bold mb-2'
              >
                Message
              </label>
              <textarea
                id='message'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                rows='4'
                placeholder='Enter your message'
                required
              ></textarea>
            </div>

            <div className='flex justify-center'>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-800 text-white py-8'>
        <div className='container mx-auto px-4 text-center'>
          &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
