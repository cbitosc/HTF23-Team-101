// components/ProtectedRoute.js
import { useEffect } from 'react';
import { authenticateUser } from '@/app/auth';// Import your authentication module (auth.js)
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Check if the user is authenticated (e.g., by verifying a token or session)
        // You can implement your authentication logic in the authenticateUser function
        let username = Cookies.get('username');
        let password = Cookies.get('password');
        console.log(username, password,"helllllo")
        const isAuthenticated = await authenticateUser(true, username, password);

        if (!isAuthenticated) {
          // If the user is not authenticated, redirect to the login page
          router.push('/login');
        }
      } catch (error) {
        console.error('Authentication error:', error);
      }
    };

    // Call the authentication function when the component mounts
    checkAuthentication();
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;
