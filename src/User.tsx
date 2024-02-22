import React, {useState, useEffect} from 'react';

interface UserProps { // Corrección en la ortografía de "UserProps"
  userId: string;
}

interface UserData {
  name: string; 
}

const User: React.FC<UserProps> = ({ userId }) => { 
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true); // inicia la carga
    fetch(`https://api.example.com/user/${userId}`)
         .then(response => {
          if(!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
         })
         .then(data => {
          setUser(data as UserData);
          setIsLoading(false);
         })
         .catch(error => {
          console.error("There was a problem with the fetch operation:", error);
          setError(error.message);
          setIsLoading(false);
         });
  }, [userId]);

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {user ? <p>Hello, {user.name}</p> : <p>No user data</p>}
    </div>
  );
}

export default User;