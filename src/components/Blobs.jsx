export default function Blobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-neon-violet/20 blur-[120px] animate-float" />
      <div className="absolute top-1/3 -right-40 w-[35rem] h-[35rem] rounded-full bg-neon-cyan/20 blur-[120px] animate-float" style={{animationDelay:'-3s'}} />
      <div className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-neon-pink/15 blur-[120px] animate-float" style={{animationDelay:'-6s'}} />
    </div>
  )
}
