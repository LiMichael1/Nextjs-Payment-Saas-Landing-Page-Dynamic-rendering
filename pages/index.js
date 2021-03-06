import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import Body from '../components/pages/Body';
import HomeComp from '../components/pages/HomeComp';

const Home = ({ data: { appData } }) => {
  return (
    <div>
      <NavBar />
      <HomeComp data={appData} />
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/firstTaskData');
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
