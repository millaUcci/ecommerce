import './App.css';
import Advertisement from '../Advertisement/advertisement.jsx';
import Header from '../Header/header.jsx'
import Hero from '../Hero/hero.jsx'
import SectionBar from '../SectionBar/sectionBar.jsx'
import Footer from '../Footer/footer.jsx'
 
const title = "Flash Sales";

function App() {
  return (
    <>
      <Advertisement
        text="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
        linkText="ShopNow"
        linkAddress="https://www.apple.com/"
        languages={['English', 'Português', '中国人', 'Español']}
      />
      <Header/>
      <Hero/>
      <SectionBar title={title}/>
      <Footer></Footer>
    </>
  );
}
 
export default App;
 
