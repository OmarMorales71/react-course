import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

  const users = [{ isFollowing: true, userName: 'omortega', realName: 'Omar Morales Ortega' }, 
    { isFollowing: false, userName: 'perezzzz', realName: 'Juan Perez' },
  { isFollowing: true, userName: 'lamine', realName: 'Lamine Yamal' },
{ isFollowing: false, userName: 'pepito', realName: 'Lolo Lala' }]


  return (
    <section className='App'>

      {users.map(({ userName, realName, isFollowing }) => (<TwitterFollowCard key={userName} initialIsFollowing={isFollowing} userName={userName}>{realName}</TwitterFollowCard>))}
    </section>
  )
}

