
const api='https://dummy.restapiexample.com/api/v1/employees';
// @ts-ignore
let fetchEmployees=async ():Promise<any|string>=>{
    let response:any|string=null;
    //exception handling
     try {
        let data= await fetch(api);
        response=await data.json();
        return response;
     }catch(error){
        response=error.toString()
         return response;
     }


}


// @ts-ignore
async function execAsync():Promise<void>{
    try{
   let response=  await fetchEmployees();
   console.log(response);
    }catch(error){
        console.log(error)
    }
}

execAsync();