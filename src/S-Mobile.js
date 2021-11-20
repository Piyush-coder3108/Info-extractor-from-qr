const Sm = (text)=>
{
    var x= text.match(/([+]?\d{1,2}?)?(\d{3}?){2}\d{5}/g,'')
   return x;
}
export default Sm