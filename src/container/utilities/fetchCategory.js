const fetchCategory = (state, category)=>{
    let list = []

    for(let item in state ){
        let index = state[item]
        let id = index.source.name
        if(id.toLowerCase() === category.toLowerCase()){
            list.push(index)
        }
    }
    return list
}
export default fetchCategory