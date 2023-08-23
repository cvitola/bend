const hacerSuma = async(req,res,next) => {
    console.log(req.body)
    try {
        if(req.body.array){
            const array2 = req.body.array;
            console.log(array2)
            let rtdo=0;
            if(array2.length != 0){
                let sum=0;
                array2.forEach(element => {
                     sum+=element
                 });
                 rtdo = sum/array2.length
            } else {
                rtdo = "No se puede dividir por cero"
            }
            res.status(200).json({"resultado": rtdo})
        }else{
            res.status(400).json({"message": "No hay array"})
        }
    } catch (error) {
        res.status(500).json({error: "algo paso con el array"})
        throw new Error ("Algo paso con el array")
    }
    
}

module.exports = {
    hacerSuma
}