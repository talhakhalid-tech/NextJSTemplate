import React from 'react';

/**
 * AboutContent component renders information about the project and the developer.
 * @returns {JSX.Element} The AboutContent component.
 */
const AboutContent = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">About This Project</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          This project is a test developed using Next.js, a popular React
          framework for building server-side rendered and static web
          applications. It is intended to showcase my skills and capabilities as
          a developer to Mobiz&apos;s employers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Extra Packages Used</h2>
        <ul className="list-disc pl-6">
          <li>Next Auth - For handling Authentication using Google OAuth.</li>
          <li>
            Axios - For getting dummy products data from{' '}
            <a href="https://dummyjson.com/products" target="_blank">
              https://dummyjson.com/products{' '}
            </a>
          </li>
          <li>
            Chart JS - Used for displaying Bar graphs of products stock on home
            screen.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Functionalities Added</h2>
        <ul className="list-disc pl-6">
          <li>
            Login Functionality using Google OAuth, For this I have used Next
            Auth with google provider
          </li>
          <li>
            Added Sidebar for for protected routes, and main purpose of it to
            navigate between our defined routes
          </li>
          <li>
            Added Chart using ChartJs on Home screen, It is a dynamic chart
            which displays stock count of products based on its category in Bar
            Chart. A compulsory filter is added for Chart as there are alot of
            products and showing this much lines made UI look weird.
          </li>
          <li>
            Added Data table which is made using tailwind and purpose of data
            table is to show products information, other than that i have also
            added filters on data table.
          </li>
          <li>
            Added App Context for storing products data and any required data
            for our app.
          </li>
          <li>Added Sign out functionality using Next Auth.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Reusable Components Added
        </h2>
        <ul className="list-disc pl-6">
          <li>
            BarChart - This component is ChartJS based component which can plot
            any BarChart based on provided data.
          </li>
          <li>
            Checkbox - This component is made using tailwind and is reusable and
            controlled.
          </li>
          <li>
            Datatable - This component is made using tailwind and is reusable,
            just need to provide column and rows.
          </li>
          <li>
            Dropdown - This component is made using tailwind and is reusable,
            just need to provide options and selected option and handler.
          </li>
          <li>
            Searchbar - This component is made using tailwind and is reusable,
            with search icon and onchange text input searchbar.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p>
          Hello! I am Muhammad Talha Khalid, an experienced full-stack developer
          specializing in modern web technologies. With expertise in React and
          Next.js for frontend development, alongside JavaScript and TypeScript,
          I craft engaging user interfaces with seamless interactions. On the
          backend, I leverage Node.js and TypeScript to build robust, scalable
          applications, utilizing cloud technologies such as AWS to deploy and
          manage infrastructure efficiently. With over three years of cumulative
          experience, I bring a passion for innovation and a commitment to
          delivering high-quality solutions to every project I undertake. Thank
          you for visiting my project!
        </p>
      </section>
    </div>
  );
};

export default AboutContent;
