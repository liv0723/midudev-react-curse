import TwitterCard from './components/Twitter_Card/TwitterCard'
import './App.css'
import { useState } from 'react';

function App() {
  const[age,setAge] = useState(1);

  const formatUserName = (userName) => `@${userName}`;

  const users = [
    {userName:'111',
      name: 'pepe pepe',
      age: 2,
      isFolloging: false
    },
    {userName:'111',
      name: 'pepe pepe',
      age: 2,
      isFolloging: false
    },
    {userName:'111',
      name: 'pepe pepe',
      age: 2,
      isFolloging: false
    },

  ]

  return (
    <section className = 'App'>
    {/* <TwitterCard userName='midudev' name='miguel angel' age={age} formatUserName={formatUserName} initialIsFollowing={false}/>
    <TwitterCard userName='midudev' name='miguel angel' age={1} formatUserName={formatUserName} initialIsFollowing={false}/>
    <TwitterCard userName='midudev' name='miguel angel' age={1} formatUserName={formatUserName} initialIsFollowing={false}/>
    <TwitterCard userName='midudev' name='miguel angel' age={1} formatUserName={formatUserName} initialIsFollowing={false}/>
    <button onClick= {() => setAge(age * 2)}>Duplicated age</button> */
    }
     {
     users.map( ({userName, name, age, isFollowing},key) => {
      return ( <TwitterCard key={key} userName={userName} name={name} age={age} formatUserName={formatUserName} initialIsFollowing={isFollowing}/>  )
    })
    }

    {
      users.map( (user, key) => {
        return <p key={key}>{JSON.stringify(user) }</p>  
      })
    }
 
      
    
    </section>
  )
}

export default App
