import './App.css';
import Header from "../src/component/Header"
import Button from './component/Button';
import Footer from './component/Footer';
import icon from "./asset/Icon.png"
import slack from "./asset/slack.png"


function App() {
  return (
    <div className="App">
      <Header />

      <div className='button-link container'>
      <Button 
        dname="Twitter Link"
        link="https://twitter.com/PAkuagwu"
        id="twitter"
      />
      <Button 
        dname="Zuri Team"
        link="https://training.zuri.team/"
        id="btn__zuri"
        />
      <Button 
        dname="Zuri Books"
        link=" http://books.zuri.team"
        id="books"
      />
      <Button 
        dname="Python Books"
        link="https://books.zuri.team/python-for-beginners?ref_id=Patrick"
        id="book__python"
      />
      <Button 
        dname="Background Check for Coders"
        link="https://background.zuri.team"
        id="pitch"
      />
      <Button 
        dname="Design Books"
        link="https://background.zuri.team"
        id="book__design"
      />
  
      <Button 
        dname="Contact Me"
        id="contact"
        link="/contact"
      />

      </div>

    <div className='logo'>
      <img src={icon} alt="" />
      <img src={slack} alt="" />

    </div>
    
    <Footer />
    </div>
  );
}

export default App;
