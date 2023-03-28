import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from './components/header'
import Footer from './components/footer'
import axios from 'axios';
import { useSession, signIn, signOut } from "next-auth/react"
const inter = Inter({ subsets: ['latin'] })

export default function Home({country}) {
  const { data: session } = useSession()
  console.log(session);
  return (

    <>
    <div>
     <Header country={country}></Header>
     <Footer country={country}></Footer>
    </div>
    </>
  );
}

export async function getServerSideProps(){

  let data = await axios
  .get("https://api.ipregistry.co/?key=mpvvi8bq0dndbk1e")
  .then((res) =>{
    return res.data.location.country;
  })
  .catch((err) => {
     console.log(err);
  });
  return{
    props :{
      country:{name:data.name , flag:data.flag.twemoji}
    },
  }
}