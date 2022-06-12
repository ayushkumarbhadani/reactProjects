import {useState,useEffect} from "react";
import {FcSearch} from "react-icons/fc";
import {FiDownload} from "react-icons/fi";
import "./App.css";

const App=()=>{
  const [data,setData]=useState(null);
  const [search,setSearch]=useState("");
  const fetchData=async(URL)=>{
    const res=await fetch(URL);
    const upcommingData= await res.json();
    console.log(res);
    console.log(upcommingData);
  }
  useEffect(()=>{
    // fetchData(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API}`);

  },[]);
  return(
    <>
    <nav>
      <div className="serach-wrapper">
        <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button><FcSearch/></button>
      </div>
    </nav>
    <main className="image-main-container">
      <section className="row-1">

        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1655043126269-d93dc7917a1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80" alt="random img"/>
          <div className="img-desc">
            <div className="creater-profile">
              <a href="#">
              <img src="https://images.unsplash.com/profile-1650865374146-e22aed4e040fimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128"/>
              <span>Creater Name</span>
              </a>
            </div>
            <a href="#" download="true"><FiDownload/></a>
          </div>
        </div>

        
        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1655041138326-f25a82627848?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="random img"/>
        </div>
        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1655012325191-cbc22182fa9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80" alt="random img"/>
        </div>
        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1655012325191-cbc22182fa9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80" alt="random img"/>
        </div>
        </section>

        <section className="row-2">
        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1655043126269-d93dc7917a1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80" alt="random img"/>
        </div>
        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1655041138326-f25a82627848?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="random img"/>
        </div>
        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1655012325191-cbc22182fa9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80" alt="random img"/>
        </div>
        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1655012325191-cbc22182fa9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80" alt="random img"/>
        </div>
        </section>

        <section className="row-3">
        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1655043126269-d93dc7917a1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80" alt="random img"/>
        </div>
        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1655041138326-f25a82627848?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="random img"/>
        </div>
        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1655012325191-cbc22182fa9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80" alt="random img"/>
        </div>
        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1655012325191-cbc22182fa9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80" alt="random img"/>
        </div>
        </section>
    </main>
    </>
  );
}

export default App;
