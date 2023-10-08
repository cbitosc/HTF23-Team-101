import Link from 'next/link'; // Import Link from Next.js

const EditPage = () => {
  // Implement your club management functionality here

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-3xl mt-5 mb-7">Club Management</h1>

        {/* Add Club Button */}
        <Link href="/edit/add"> {/* Link to a page for adding clubs */}
          <a className="text-blue-500 underline">Add Club</a>
        </Link>
        
        {/* Display and manage clubs */}
        {/* Implement club management UI here */}
      </div>
    </div>
  );
};

export default EditPage;
