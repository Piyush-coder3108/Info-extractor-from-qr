
const GetMobileNumber=(text)=>{
    var x =(text.match(/([+]?\d{1,2}?)?(\d{3}?){2}\d{5}/g,''))
    return !x ? null : (
      <div>
        <ul>
        
          {x.map(item=>{
            return <li> {item}</li>
          })}
        </ul>
    </div>
    ) 
  }
  export default GetMobileNumber;