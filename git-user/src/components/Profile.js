import React, { useState } from 'react'
import DisplayTable from './DisplayTable';

const Profile = () => {

    const [data,setdata] = useState({});
    const [username,setUsername] = useState("");
    const [repos,setrepos] = useState([]);

    const onChangehandler=(e)=>{
        setUsername(e.target.value);
    };

    const submithandler = async e =>{
      e.preventDefault();
      const profile= await fetch(`https://api.github.com/users/${username}`);
      const profilejson= await profile.json();
      console.log(profilejson)

      const repos= await fetch(profilejson.repos_url);
      const reposjson= await repos.json();
       console.log(reposjson);

      if(profilejson)
      {
        setdata(profilejson);
        setrepos(reposjson);
      }
    };
  return (
    <>
    <div style={{padding: 20}}>
     <div className="ui search">
        <div className="ui icon input">
            <i className="search icon"></i>
            <input className="prompt" type="text" value={username} onChange={onChangehandler} placeholder="Search"/>
        </div>
        <button className="ui primary button" type="submit" onClick={submithandler}>
  <i className="github icon"></i>
  Search
</button>
<DisplayTable data={data} repos={repos}/>
     </div>
    </div>
    </>
  )
}

export default Profile
