
const Input = (props : any) => {

  return (
    <div className={`${props.className} border-black/40`}>
      <input type={props.type} className={`${props.classNameInput} placeholder-black/80 p-3 bg-black/5 border-black/40 invalid:border-b-red-600 focus:outline-none focus:border-b-2`} placeholder={props.placeholder}/>
    </div>
  );
};

export default Input;