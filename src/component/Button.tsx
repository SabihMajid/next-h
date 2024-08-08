interface IProps {
    text: string;
}


function Button({ text }: IProps) {

    return (
        <button>{text}</button>
    )
}

export default Button






// function constton  (_Props: any) => {
//     return (
//         <div>

//             <Button>
//                 {_Props.text}
//             </Button>
//         </div>
//     )
// }
// export default Button;
