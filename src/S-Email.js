const Se = (text)=>
{
    var x= text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi,'');
   return x;
}
export default Se