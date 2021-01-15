import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserBooks from './Library/UserBooks';
 
import CreateUser from './Library/CreateUser';
import UserPage from './Library/UserPage';
import RegisterPage from './Library/RegisterPage';
 
import { Nav, Navbar, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';
 
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
 
import Navi from './Library/Navi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  
  return (
<div className="Task">
<div className="header">


 
  <h1>LIBRARY MANAGEMENT SYSTEM</h1>
  
 
  <Router>
    <Navi />
    <Switch>
      <Route path="/userpage" component={UserPage} />
      <Route path="/userbooks" component={UserBooks} />
      <Route path="/createuser" component={CreateUser} />
      <Route path="/registerpage" component={RegisterPage} />
 
    </Switch>
  </Router>
  <div className="bg">
    <div class="main_content">
           
            <div class="info">
              <div>A library is a curated collection of sources of information and similar resources, selected by experts and made accessible to a defined community for reference or borrowing, often in a quiet environment conducive to study. It provides physical or digital access to material, and may be a physical location or a virtual space, or both. A library's collection can include books, periodicals, newspapers, manuscripts, films, maps, prints, documents, microform, CDs, cassettes, videotapes, DVDs, Blu-ray Discs, e-books, audiobooks, databases, table games, video games and other formats. Libraries range widely in size up to millions of items. The word for "library" in many modern languages is derived from Ancient Greek βιβλιοθήκη (bibliothēkē), originally meaning bookcase, via Latin bibliotheca.

The first libraries consisted of archives of the earliest form of writing—the clay tablets in cuneiform script discovered in Sumer, some dating back to 2600 BC. Private or personal libraries made up of written books appeared in classical Greece in the 5th century BC. In the 6th century, at the very close of the Classical period, the great libraries of the Mediterranean world remained those of Constantinople and Alexandria. The libraries of Timbuktu were also established around this time and attracted scholars from all over the world.</div>
                {/* <DisplayEmployees /> */}
              <Carousel >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                   src="https://metmuseum.org/-/media/images/art/libraries-and-research-centers/cloisters-library/cloisters-library_marquee.jpg"
                    alt="First slide"
                    width={600} height={400}
                  />
                  <Carousel.Caption>
                    <h3>HINDUSTAN LIBRARY</h3>
                    <p>DELHI</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://th.bing.com/th/id/OIP.LlAuUjFAxyNvHwubUv8hlAHaFj?pid=Api&w=800&h=600&rs=1"
                    alt="Third slide"
                    width={600} height={400}
                  />
 
                  <Carousel.Caption>
                    <h3>HINDUSTAN LIBRARY</h3>
                    <p>DELHI</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>






 
            </div>
 
          </div>
 
      </div>
</div>
    
    </div>
  )}
  export default App;