import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,changeText]= useState("")
    const [Len,changeLength]=useState(0)
    
    function toUpper(e){
        e.preventDefault()
        const s=document.getElementById("inputAddress").style.fontSize
        const n=Number(s.slice(0,-2))
        // console.log(n+2+"px")
        document.getElementById("inputAddress").style.fontSize=n-2+"px"
      
    }

    function toLower(e){
         e.preventDefault()
        const s=document.getElementById("inputAddress").style.fontSize
        const n=Number(s.slice(0,-2))
        // console.log(n+2+"px")
        document.getElementById("inputAddress").style.fontSize=n+2+"px"
        props.showAlert("Converted to uppercase","success")
    }


    function changeTextarea(e){
        e.preventDefault()
        const text1=e.target.value
        const n=text1.length
       
      
        changeText(text1)
        changeLength(n)
       
        
    }

    const wordCnt=()=>{
        var space=text.split(' ').length;
        if(text.length && text[text.length-1]===' ')
            return (space-1)
        else if(text.length)
            return space
        else
            return 0

    }


    return (
        <div  style={{paddingBottom:"250px",paddingTop:"30px"}}>
            
            <form style={props.mode==='light'? {padding:"20px 20px 20px 20px",border:"1px solid black", marginBottom:"20px",transform: "translate(80%, 3%)",width:"40%"}:{padding:"20px 20px 20px 20px",marginBottom:"20px",border:"1px solid white",transform: "translate(80%, 3%)",width:"40%"}}>
                    <h2 style={props.mode==='light'? {color:"black"}:{color:"white"}}>Please fill the form</h2>
                    
                    <div className="form-group"  >
                        <label htmlFor="inputAddress" style={props.mode==='light'? {color:"black"}:{color:"white"}}>Address</label>
                        <textarea type="text" className="form-control" id="inputAddress" placeholder="type anything" value={text} onChange={changeTextarea}  style={props.mode==='light'? {width:"80%",fontSize:"20px",color:"black",background:"white"}:{width:"80%",fontSize:"20px",color:"white",background:"black"}}/>
                    </div>
                    {
                        Len===true && (<h4>Alert too long string</h4>)
                    }
                    <button   className="btn btn-primary" style={{margin:"10px"}} onClick={toUpper}>-</button>
                    <button   className="btn btn-primary" style={{margin:"10px"}} onClick={toLower}>+</button>
                    <button   className="btn btn-primary" style={{margin:"10px"}} onClick={(e)=>{
                        e.preventDefault()
                        changeText(text.toUpperCase())
                        props.showAlert("Converted to Uppercase","success")
                    }}>Uppercase</button>
                    <button   className="btn btn-primary" style={{margin:"10px"}} onClick={(e)=>{
                        e.preventDefault()
                        changeText(text.toLowerCase())
                        props.showAlert("Converted to Lowercase","success")
                        }}>Lowercase</button>
                    <button   className="btn btn-primary" style={{margin:"10px"}} onClick={(e)=>{
                        e.preventDefault()
                        changeText('')}}>Clear</button>
                    <div  style={props.mode==='light'? {color:"black"}:{color:"white"}}>
                        <p>there are {text.length} letters & {wordCnt()} words</p>
                     </div>
            </form>
            
        </div>
    )
}
