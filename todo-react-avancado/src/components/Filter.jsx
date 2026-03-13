export default function Filter({setFilter}){

  return(
    <div>

      <button onClick={()=>setFilter("all")}>
        Todas
      </button>

      <button onClick={()=>setFilter("completed")}>
        Concluídas
      </button>

      <button onClick={()=>setFilter("pending")}>
        Pendentes
      </button>

    </div>
  )
}