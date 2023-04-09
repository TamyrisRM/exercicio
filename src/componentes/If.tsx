export default (props: any) => {
    if (props.valido){
        return props.children
    }else{
        return false
    }
}