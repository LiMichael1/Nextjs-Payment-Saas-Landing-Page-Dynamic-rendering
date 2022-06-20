import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import FeatureComp from '../components/pages/FeatureComp';

const Features = ({ features }) => {
  return (
    <div>
      <NavBar />
      <FeatureComp features={features} />
      <Footer />
    </div>
  );
};

export default Features;

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/firstTaskData');
  const data = await response.json();

  return {
    props: {
      features: data.features,
    },
  };
}
