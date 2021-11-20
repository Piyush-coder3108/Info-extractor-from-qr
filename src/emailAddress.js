
const extractEmails = (text)=>
{
    var x= text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi,'');
    return !x ? null : (
        <div>
          <ul>
            {x.map(item=>{
              return <li>{item}</li>
            })}
          </ul>
      </div>
      ) 
}
export default extractEmails