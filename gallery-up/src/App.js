import {useState,useEffect} from "react";
import {FcSearch} from "react-icons/fc";
import {FiDownload} from "react-icons/fi";
import {AiOutlineInstagram} from "react-icons/ai";
import "./App.css";

const App=()=>{
  const [isLoading,setIsLoading]=useState(true);
  const [isSearching,setIsSearching]=useState(false);
  const [data,setData]=useState([]);

  const [dataSet1,setDataSet1]=useState([]);
  const [dataSet2,setDataSet2]=useState([]);
  const [dataSet3,setDataSet3]=useState([]);
  
const URL=`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API}`;
  const [search,setSearch]=useState("");

  const fetchData=async(URL,isSearching)=>{
      console.log(isSearching);
      try{
        setIsLoading(true);
        const res=await fetch(URL);
        const upcommingData= await res.json();
        console.log(`isSearching:${isSearching}`);
        if(isSearching){
          await setData(upcommingData.results);
          console.log(data);
        }
        else{
          await setData(upcommingData);
          
        }
        setIsLoading(false);
        
      }catch(err){
        console.log(err);
      }
  }

  useEffect(()=>{
    fetchData(URL);
  },[]);

  useEffect(()=>{
    if(!isLoading){
      adjustArray(data,isSearching);
    }
  },[data]);
  const adjustArray=(data,isSearching=false)=>{
    console.log(data);
    setDataSet1((oldData)=>{
      const newData=data.filter((item,index)=>{
        if(index%3===0)
        {
          return item;
        }
      });
      if(isSearching){
        return [...newData];
      }
      return [...oldData,...newData];
    });

    setDataSet2((oldData)=>{
      const newData=data.filter((item,index)=>{
        if(index%3===1)
        {
          return item;
        }
      });
      if(isSearching){
        return [...newData];
      }
      return [...oldData,...newData];
    });

    setDataSet3((oldData)=>{
      const newData=data.filter((item,index)=>{
        if(index%3===2)
        {
          return item;
        }
      });
      if(isSearching){
        return [...newData];
      }
      return [...oldData,...newData];
    });
    console.log(dataSet1);
    console.log(dataSet2);
    console.log(dataSet3);
    setIsSearching(false);
  }
  useEffect(()=>{
    // await setIsSearching(true);
    console.log(isSearching);
    if(isSearching){
      fetchData(`https://api.unsplash.com/search/photos/?query=${search}&client_id=${process.env.REACT_APP_API}`,isSearching);
    }
  },[isSearching]);
  return(
    <>
    {/* <button onClick={(e)=>setData(Number(data + 1))}>Tst</button> */}
    <nav>
      <div className="serach-wrapper">
        <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={()=>{setIsSearching(true)}}><FcSearch/></button>
      </div>
    </nav>
    <main className="image-main-container">
      {isLoading?<h1>Loading...</h1>:null}
      <section className="row-1">
        {!isLoading && dataSet1.map((item)=>{
          return(
            <div className="img-container" key={item.id}>
          <img src={item.urls.full} alt={item.urls.full}/>
          <div className="img-desc">
            <div className="creater-profile">
              <a href={item.user.links.html} target="_blank">
              <img src={item.user.profile_image.large}/>
              <span>{item.user.name}</span>
              </a>
            </div>
            <div className="desc-links">
              <a href={item.urls.full} download="true" target="_blank"><FiDownload/></a>
              <a href={`https://www.instagram.com/${item.user.instagram_username}`} target='_blank'><AiOutlineInstagram/></a>
            </div>
          </div>
        </div>
          )
        })}
        
      </section>

      <section className="row-2">
      {!isLoading && dataSet2.map((item)=>{
          return(
            <div className="img-container" key={item.id}>
          <img src={item.urls.full} alt={item.urls.full}/>
          <div className="img-desc">
            <div className="creater-profile">
              <a href={item.user.links.html} target="_blank">
              <img src={item.user.profile_image.large}/>
              <span>{item.user.name}</span>
              </a>
            </div>
            <div className="desc-links">
              <a href={item.urls.full} download="true" target="_blank"><FiDownload/></a>
              <a href={`https://www.instagram.com/${item.user.instagram_username}`} target='_blank'><AiOutlineInstagram/></a>
            </div>
          </div>
        </div>
          )
        })}
      </section>

      <section className="row-3">
      {!isLoading && dataSet3.map((item)=>{
          return(
            <div className="img-container" key={item.id}>
          <img src={item.urls.full} alt={item.urls.full}/>
          <div className="img-desc">
            <div className="creater-profile">
              <a href={item.user.links.html} target="_blank">
              <img src={item.user.profile_image.large}/>
              <span>{item.user.name}</span>
              </a>
            </div>
            <div className="desc-links">
              <a href={item.urls.full} download="true" target="_blank"><FiDownload/></a>
              <a href={`https://www.instagram.com/${item.user.instagram_username}`} target='_blank'><AiOutlineInstagram/></a>
            </div>
          </div>
        </div>
          )
        })}
      </section>
    </main>
    </>
  );
}

export default App;
