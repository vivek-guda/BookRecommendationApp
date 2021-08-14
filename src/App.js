import Button from "./components/Button";
import BooksList from "./components/BooksList";
import { useState } from "react";

function App() {
  const [subject, setSubject] = useState("Javascript");

  const books = {
    Javascript: [
      {
        title: "A smart way to learn java script",
        author: "Mark Myers",
        rating: "4.5/5",
        image: "images/js1.png",
        link: "https://www.amazon.in/dp/1497408180?tag=hackr0df-21&geniuslink=true",
      },
      {
        title: "Eloquent Javascript",
        author: "Marijm Haverbeke",
        rating: "4.5/5",
        image: "images/js2.png",
        link: "https://www.amazon.in/dp/1593275846?tag=hackr0df-21&geniuslink=true",
      },
      {
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        rating: "4/5",
        image: "images/js3.png",
        link: "https://www.amazon.in/dp/0596517742?tag=hackr0df-21&geniuslink=true",
      },
      {
        title: "Learn JavaScript VISUALLY",
        author: "Ivelin Demirov",
        rating: "3.5/5",
        image: "images/js4.png",
        link: "https://www.amazon.in/dp/B00LDZ7824?tag=hackr0df-21&geniuslink=true",
      },
      {
        title: "JavaScript: The Definitive Guide",
        author: "David Flanagan",
        rating: "4/5",
        image: "images/js5.png",
        link: "https://www.amazon.in/dp/0596805527?tag=hackr0df-21&geniuslink=true",
      },
    ],
    Python: [
      {
        title: "Learn Python 3 the Hard Way",
        author: "Zed Shaw",
        rating: "5/5",
        image: "images/py1.png",
        link: "https://www.amazon.com/Learn-Python-Hard-Way-Introduction/dp/0134692888/ref=sr_1_1?crid=2SXRIBQUM073Z&dchild=1&keywords=learn+python+3+the+hard+way&qid=1625253361&sprefix=learn+python+3%2Caps%2C370&sr=8-1",
      },
      {
        title: "Python Crash Course",
        author: "Eric Matthes",
        rating: "4.5/5",
        image: "images/py2.png",
        link: "https://www.amazon.in/dp/1593276036/?tag=n",
      },
      {
        title: "Learning Python",
        author: "Mark Lutz",
        rating: "4/5",
        image: "images/py3.png",
        link: "https://www.amazon.com/Learning-Python-5th-Mark-Lutz/dp/1449355730/ref=sr_1_1?dchild=1&keywords=learning+python&qid=1625253390&sr=8-1",
      },
    ],
    "Operating Systems": [
      {
        title: "Operating system concepts",
        author: "Abraham Silberschatz",
        rating: "4.5/5",
        image: "images/os1.png",
        link: "https://www.amazon.com/dp/0470128720/ref=as_sl_pc_tf_til?tag=sanfoundry0e-20&linkCode=w00&linkId=6c791b497ec5296169e171311489750d&creativeASIN=0470128720",
      },
      {
        title: "Operating systems",
        author: "William Stallings",
        rating: "4/5",
        image: "images/os3.png",
        link: "https://www.amazon.in/dp/013230998X/ref=as_sl_pc_tf_til?tag=sanfoundry-21&linkCode=w00&linkId=a22410bb560efea760d663e3b0c7073e&creativeASIN=013230998X",
      },
      {
        title: "Modern Operating Systems",
        author: "K. Vasudevan",
        rating: "4/5",
        image: "images/os2.png",
        link: "https://www.amazon.in/Operating-Subashri-Vasudevan-Sunandhini-Muralidharan/dp/9389447607/ref=sr_1_2_sspa?crid=2CASI2QOKKKES&dchild=1&keywords=operating+system&qid=1628961897&s=books&sprefix=opera%2Cstripbooks%2C-1&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyN1ZIMU1MNERTSzIzJmVuY3J5cHRlZElkPUEwOTk2MTIzM01HVENPTVpJMUwxSyZlbmNyeXB0ZWRBZElkPUEwMjA3MzAzQTJYUFFJT1VRM0IxJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
      },
    ],
    "Database Systems": [
      {
        title: "Database Concepts",
        author: "Abraham Silberschatz",
        rating: "4.5/5",
        image: "images/dbs1.png",
        link: "https://www.amazon.com/dp/1260084507/ref=as_sl_pc_tf_til?tag=sanfoundry0e-20&linkCode=w00&linkId=60ff5206b3ebfb2fc2f23a63bf581b78&creativeASIN=1260084507",
      },
      {
        title: "Database Management systems",
        author: "Raghu Ramakrishnan",
        rating: "4.5/5",
        image: "images/dbs2.png",
        link: "https://www.amazon.com/dp/0072465638/ref=as_sl_pc_tf_til?tag=sanfoundry0e-20&linkCode=w00&linkId=6f004cf4e512f697af92c8d61e628fbf&creativeASIN=0072465638https://www.amazon.com/dp/0072465638/ref=as_sl_pc_tf_til?tag=sanfoundry0e-20&linkCode=w00&linkId=6f004cf4e512f697af92c8d61e628fbf&creativeASIN=0072465638",
      },
      {
        title: "Fundamentals of Database System",
        author: " Elmasri Ramez",
        rating: "4/5",
        image: "images/dbs3.png",
        link: "https://www.amazon.in/Fundamentals-Database-System-Elmasri-Ramez/dp/933258270X/ref=sr_1_1_sspa?dchild=1&keywords=database+system&qid=1628962055&s=books&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE3RDY3NDhHOUhGSEMmZW5jcnlwdGVkSWQ9QTAxNDgwNjEzRjFHOUtCQUVNUEc4JmVuY3J5cHRlZEFkSWQ9QTAwNDY5NzkyVFZITlJLMUdEOUhIJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
      },
    ],
  };

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
