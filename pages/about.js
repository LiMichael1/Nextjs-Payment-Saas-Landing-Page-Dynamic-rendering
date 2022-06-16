import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import AboutComp from '../components/pages/AboutComp';

const About = ({ data: { appData } }) => {
  return (
    <div>
      <NavBar />
      <AboutComp data={appData} />
      <Footer />
    </div>
  );
};

export default About;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/firstTaskData');
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
