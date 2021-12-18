import React from 'react'

// props 받아올 값의 type 을 선언
interface Iprops {
    title: string,
}

function TodoTitle(props: Iprops) {
    return <h2>{props.title}</h2>
}

export default TodoTitle