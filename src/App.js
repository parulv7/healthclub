import './App.css';
import Footer from './componens/Footer/Footer';
import Hero from './componens/herosection/Hero';
import Join from './componens/Join/Join';
import Plan from './componens/Plans/Plan';
import Programs from './componens/programs/Programs';
import Reasons from './componens/Reasons/Reasons';
import Teatimonials from './componens/Testimonials/Teatimonials';
function App() {
  return (
   <>
   <div style={{
 background: "#464D53"
   }}>
<Hero/>
<Programs/>
<Reasons/>
<Plan/>
<Teatimonials/> 
<Join/>
<Footer />
</div>
   </>
  );
}

export default App;
