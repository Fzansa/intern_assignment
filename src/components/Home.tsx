import axios from 'axios'
import  { useEffect,useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';



interface IPost {
  id:number;
  title:string;
  body:string;

}


const Home = () => {

  const [data,setData] = useState<IPost[]>([]);
 
  useEffect( () =>{
     axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
          setData(response.data)
     }).catch((error)=>{
      console.log(error)
     });
  },[])


  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'TITLE', width: 150 },
    { field: 'body', headerName: 'BODY', width: 150 },
  ];

  const rows = [
    ...data
  ]

  return (
    <>
       
       <DataGrid
          rows={rows}
          columns={columns}
          sortingOrder={['asc', 'desc']} // Set sorting order
          
        />
    </>
  )
}

export default Home