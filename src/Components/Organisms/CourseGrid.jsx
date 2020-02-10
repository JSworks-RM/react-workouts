import React from 'react'
import CourseCard from '../Molecules/CurseCard'

const curses = [
    {
      "id": 1,
      "titulo": "React desde cero",
      "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
      "price": 40,
      "profesor": "Beto Quiroga",
      "avatar": "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    },
    {
      "id": 2,
      "titulo": "Drupal desde cero",
      "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
      "price": 30,
      "profesor": "Beto Quiroga",
      "avatar": "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    }, 
    {
      "id": 3,
      "titulo": "Go desde cero",
      "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN",
      "price": 50,
      "profesor": "Alexys Lozada",
      "avatar": "https://api.ed.team/files/avatars/747dea4d-4438-4a7e-904a-427a5cd6aac7.jpg"
    }, 
    {
      "id": 4,
      "titulo": "HTML desde cero",
      "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
      "price": 10,
      "profesor": "Alvaro Felipe",
      "avatar": "https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg"
    }
  ]

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {
            curses.map(c => (
                <CourseCard
                    key = {c.id}
                    id = {c.id}
                    title = {c.titulo}
                    image = {c.image}
                    price = {c.price}
                    professor = {c.professor}
                    avatar = {c.avatar}
                />
            ))
        }
    </div>
)


export default CourseGrid