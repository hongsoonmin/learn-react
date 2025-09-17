import React from 'react'

const Logical = () => {

  const user = {
  isLoggedIn: true,
  role: "admin"
  }
 
if(user.isLoggedIn && user.role === "admin" ){
console.log("체크 관리자페이지에 접근 가능!")
} else {
console.log(" X 관리자페이지에 접근 불가능!")
}


const colors = ["red", "blue"]
//const firstColor = colors[0]
//const secondColor = colors[1]
const [firstColor, secondColor] = colors


// spread syntax : 배열이나 객체를 개별요소로 분해하거나 결합할때 사용
const copyColors =  [...colors, "yellow"]
console.log("🚀 ~ 원본 colors:", colors)
console.log("🚀 ~ copyColors:", copyColors)


  return (
    <div>Logical</div>
  )
}

export default Logical