import React from 'react'
import useFetch from '../CustomHooks/useFetch'
import useCounter from '../CustomHooks/useCounter'

function UsersFetch () {
    const users = useFetch('https://jsonplaceholder.typicode.com/users', [])
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts', [])

    const counterOne = useCounter()
    const counterTwo = useCounter()

    return (
            <div className="ed-grid s-pt-4">
                <div className="s-pb-4">
                    <span className="s-mr-1">{counterOne.count}</span>
                    <button onClick={counterOne.increase}>Agregar</button>
                    <button onClick={counterOne.decrease}>Disminuir</button>
                </div>
                <div className="s-pb-4">
                    <span className="s-mr-1">{counterTwo.count}</span>
                    <button onClick={counterTwo.increase}>Agregar</button>
                    <button onClick={counterTwo.decrease}>Disminuir</button>
                </div> 

                <ul>
                    {users.loading && <p>Cargando...</p>}
                    {users.data && users.data.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
                <ul>
                    {posts.loading && <p>Cargando...</p>}
                    {posts.data && posts.data.map(post => (
                        <li key={post.userId}>{post.title}</li>
                    ))}
                </ul>
            </div>
    )
}

export default UsersFetch

