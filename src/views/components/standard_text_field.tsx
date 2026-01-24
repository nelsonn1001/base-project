interface CProps {
  maxLength:number  
}

const StandardTextField =({maxLength}:CProps)=>{
    return <>
    <span></span>
    <input type='text' maxLength={maxLength} className="standardText"/>
    <span></span>
    </>
}

export default StandardTextField  