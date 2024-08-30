


import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'


const useRole = () => {
  
  const {h} = useContext(AuthContext);
 // console.log(h);
  const axiosSecure = useAxiosSecure();

  const { data: data = '' } = useQuery({
    queryKey: ['role', h],
    
    queryFn: async () => {

    

      await new Promise(resolve => setTimeout(resolve, 200));

      
       
       
      const { data } = await axiosSecure(`/user/${h}`)
      // eslint-disable-next-line react-hooks/rules-of-hooks
      
     return data
    },
   
  })

  //   Fetch user info using logged in user email

  return [data]
}

export default useRole