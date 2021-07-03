import Button from "./components/Button";
import BooksList from "./components/BooksList";
import { useState } from "react";

function App() {
  const [subject, setSubject] = useState("Database Systems");

  const books = {
    Javascript: [
      {
        title: "A smart way to learn java script",
        rating: "4.5/5",
        image: "images/js1.png",
        link: "https://www.amazon.in/dp/1497408180?tag=hackr0df-21&geniuslink=true",
      },
      {
        title: "Eloquent Javascript",
        rating: "4.5/5",
        image: "images/js2.png",
        link: "https://www.amazon.in/dp/1593275846?tag=hackr0df-21&geniuslink=true",
      },
      {
        title: "JavaScript: The Good Parts",
        rating: "4/5",
        image: "images/js3.png",
        link: "https://www.amazon.in/dp/0596517742?tag=hackr0df-21&geniuslink=true",
      },
      {
        title: "Learn JavaScript VISUALLY",
        rating: "3.5/5",
        image: "images/js4.png",
        link: "https://www.amazon.in/dp/B00LDZ7824?tag=hackr0df-21&geniuslink=true",
      },
      {
        title: "JavaScript: The Definitive Guide",
        rating: "4/5",
        image: "images/js5.png",
        link: "https://www.amazon.in/dp/0596805527?tag=hackr0df-21&geniuslink=true",
      },
    ],
    Python: [
      {
        title: "Learn Python 3 the Hard Way",
        rating: "5/5",
        image: "images/py1.png",
        link: "https://www.amazon.com/Learn-Python-Hard-Way-Introduction/dp/0134692888/ref=sr_1_1?crid=2SXRIBQUM073Z&dchild=1&keywords=learn+python+3+the+hard+way&qid=1625253361&sprefix=learn+python+3%2Caps%2C370&sr=8-1",
      },
      {
        title: "Python Crash Course",
        rating: "4.5/5",
        image: "images/py2.png",
        link: "https://www.amazon.in/dp/1593276036/?tag=n",
      },
      {
        title: "Learning Python",
        rating: "4/5",
        image: "images/py3.png",
        link: "https://www.amazon.com/Learning-Python-5th-Mark-Lutz/dp/1449355730/ref=sr_1_1?dchild=1&keywords=learning+python&qid=1625253390&sr=8-1",
      },
    ],
    "Operating Systems": [
      {
        title: "Operating system concepts",
        rating: "4.5/5",
        image: "images/os1.png",
        link: "https://www.amazon.com/dp/0470128720/ref=as_sl_pc_tf_til?tag=sanfoundry0e-20&linkCode=w00&linkId=6c791b497ec5296169e171311489750d&creativeASIN=0470128720",
      },
      {
        title: "Operating systems",
        rating: "4/5",
        image: "images/os2.png",
        link: "https://www.amazon.in/dp/013230998X/ref=as_sl_pc_tf_til?tag=sanfoundry-21&linkCode=w00&linkId=a22410bb560efea760d663e3b0c7073e&creativeASIN=013230998X",
      },
    ],
    "Database Systems": [
      {
        title: "Database Concepts",
        rating: "4.5/5",
        image: "images/dbs1.png",
        link: "https://www.amazon.com/dp/1260084507/ref=as_sl_pc_tf_til?tag=sanfoundry0e-20&linkCode=w00&linkId=60ff5206b3ebfb2fc2f23a63bf581b78&creativeASIN=1260084507",
      },
      {
        title: "Database Management systems",
        rating: "4.5/5",
        image: "images/dbs2.png",
        link: "https://www.amazon.com/dp/0072465638/ref=as_sl_pc_tf_til?tag=sanfoundry0e-20&linkCode=w00&linkId=6f004cf4e512f697af92c8d61e628fbf&creativeASIN=0072465638https://www.amazon.com/dp/0072465638/ref=as_sl_pc_tf_til?tag=sanfoundry0e-20&linkCode=w00&linkId=6f004cf4e512f697af92c8d61e628fbf&creativeASIN=0072465638",
      },
    ],
  };

  // "Database Systems": [
  //   [
  //     "Database Concepts",
  //     "images/dbs1.png",
  //     "https://www.amazon.com/dp/1260084507/ref=as_sl_pc_tf_til?tag=sanfoundry0e-20&linkCode=w00&linkId=60ff5206b3ebfb2fc2f23a63bf581b78&creativeASIN=1260084507",
  //   ],
  //   [
  //     "Database Management systems",
  //     "images/dbs2.png",
  //     "https://www.amazon.com/dp/0072465638/ref=as_sl_pc_tf_til?tag=sanfoundry0e-20&linkCode=w00&linkId=6f004cf4e512f697af92c8d61e628fbf&creativeASIN=0072465638https://www.amazon.com/dp/0072465638/ref=as_sl_pc_tf_til?tag=sanfoundry0e-20&linkCode=w00&linkId=6f004cf4e512f697af92c8d61e628fbf&creativeASIN=0072465638",
  //   ],
  // ],

  const clickHandler = (text) => {
    setSubject(text);
  };

  return (
    <div className="container">
      <h1 className="heading">Book recommendation app</h1>
      <Button text="Javascript" onClick={clickHandler} />
      <Button text="Operating Systems" onClick={clickHandler} />
      <Button text="Database Systems" onClick={clickHandler} />
      <Button text="Python" onClick={clickHandler} />
      <BooksList books={books[subject]} />
    </div>
  );
}

export default App;
