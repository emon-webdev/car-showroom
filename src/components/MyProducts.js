import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import Loading from './Loading';

const MyProducts = () => {
const {user} = useContext(AuthContext);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["appointmentOptions", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products?email=${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <Loading/>
  }


    return (
        <div>
            <h2>My Products {products.length}</h2>
            <div>
                
            </div>
        </div>
    );
};

export default MyProducts;