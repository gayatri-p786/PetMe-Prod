import React, {useState} from 'react';
import { motion } from 'framer-motion';
import animals from '../../helpers/animalsForCards';
import TitleSection from '../TitleSection';
import AdoptionForm from '../AdoptionForm';

function AnimalsCard() {
  const [showAdoptionForm, setShowAdoptionForm] = useState(false); // State to control form visibility
  const [authenticated, setAuthenticated] = useState(true); // Replace with actual authentication state

  const handleAdoptClick = () => {
    if (authenticated) {
      // If authenticated, show adoption form
      setShowAdoptionForm(true);
      // Optionally, fetch user data from database here
    } else {
      // Handle case where user is not authenticated (redirect to login or show message)
      alert('Please login to adopt a pet.');
      // Example redirect to login page
      // history.push('/login');
    }
  };
  return (
    <>
      <TitleSection title="Meet our Friends Here!" />
      <motion.div
        className="grid grid-cols-1 mx-auto gap-10 mt-14 lg:grid-cols-3 mb-10 md:grid-cols-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        { animals.map((animal) => (
          <section className="flex flex-col" key={animal.name}>
            <motion.button
              type="button"
              className="button"
              whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
              whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}

            >
              <img
                src={animal.image}
                alt={animal.name}
                className="rounded-md w-[20rem] h-[20rem]"
              />
              <h1 className="self-center text-3xl">{animal.name}</h1>
              <div className="grid grid-cols-2 gap-4 p-2 place-items-center">
                <h2>{animal.type}</h2>
                <h2>{animal.race}</h2>
                <h2>{animal.gender}</h2>
                <h2>{animal.color}</h2>
                <h2>{animal.age}</h2>
                <h2>{animal.location}</h2>
                <button
                  type="button"
                  onClick={handleAdoptClick}
                  className="bg-[#C57837] text-white w-52 p-4 focus:outline-none font-bold rounded md:mt-0 col-span-2"
                >
                  <a href="/adopt">
                    Adopt
                  </a>
                </button>
              </div>
            </motion.button>
          </section>
        ))}
      </motion.div>
    {/* Adoption Form Modal */}
    {showAdoptionForm && <AdoptionForm onClose={() => setShowAdoptionForm(false)} />}
    </>
  );
}

export default AnimalsCard;
