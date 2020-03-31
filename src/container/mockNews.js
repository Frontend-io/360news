export const categories = (payload)=>{
    // Make sure there are no repetition in the categories
    let filtered = []
    payload.map( item =>{
        if(!filtered.includes(item.source.name) ){
            filtered.push(item.source.name)
        }
        return 0
    })
    
    return filtered
}