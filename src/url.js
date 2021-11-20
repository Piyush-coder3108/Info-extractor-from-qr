
const getUrl=(text)=>{
    var Url =(text.match(/(https?:\/\/[^\s]+)/g))
    return !Url ? null : (
      <div>
        <ul>
          {
            Url.map(item =>{
              return (<li>
                  <a className="url" href={item}>{item}</a>
              </li>   ) 
            })
          }
        </ul>
      </div>
    )
  }
  export default getUrl;