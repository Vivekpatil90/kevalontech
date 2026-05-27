// import { useEffect, useRef } from 'react'
// export default function Cursor() {
//   const dot = useRef(null), ring = useRef(null)
//   useEffect(() => {
//     let mx=0,my=0,rx=0,ry=0
//     const move = (e)=>{ mx=e.clientX; my=e.clientY
//       if(dot.current){ dot.current.style.left=mx+'px'; dot.current.style.top=my+'px' } }
//     const loop = ()=>{ rx+=(mx-rx)*0.15; ry+=(my-ry)*0.15
//       if(ring.current){ ring.current.style.left=rx+'px'; ring.current.style.top=ry+'px' }
//       requestAnimationFrame(loop) }
//     window.addEventListener('mousemove', move); loop()
//     return ()=> window.removeEventListener('mousemove', move)
//   },[])
//   return (<>
//     <div ref={dot} className="kev-cursor" />
//     <div ref={ring} className="kev-cursor-ring" />
//   </>)
// }
