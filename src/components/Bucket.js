const Bucket = ({bucket, onButtonClick}) => {

    return (
      <div class="w-80 mt-24 m-auto lg:mt-16 max-w-sm container mx-auto ">
        <div class="bg-white shadow-2xl rounded-b-3xl">
          <img
            src={bucket.flag}
            alt={bucket.country}
            class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"
          />
          <h3 class="text-center text-gray-800 text-2xl font-bold pt-6">
            {bucket.country}
          </h3>
          <p
            class="text-center block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline 
                                  focus:outline-none text-white text-xs py-3 px-4 rounded font-bold"
          >
            Capital: {bucket.capital}
          </p>
          <p
            class=" text-center block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline 
                                  focus:outline-none text-white text-xs py-3 px-4 rounded font-bold"
          >
            Currency: {bucket.currency}
          </p>
          <p
            class="text-center block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline 
                                  focus:outline-none text-white text-xs py-3 px-4 rounded font-bold"
          >
            Population: {bucket.population}
          </p>
          <p
            class="text-center block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline 
                                  focus:outline-none text-white text-xs py-3 px-4 rounded font-bold"
          >
            <a class="hover:bg-blue-200 text-center block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline 
                                  focus:outline-none text-white text-xs py-3 px-4 rounded font-bold" href={bucket.location} target="_blank">Open In Maps</a>
          </p>

            
              <p  class="text-center text-2xl font-bold text-green-500 mb-4 pt-4">{bucket.title}</p>
              
              <p class="text-sm text-center pb-4">{bucket.body}</p>
            
              <button onClick={()=>onButtonClick(bucket.id)} class="w-full bg-green-100 hover:bg-green-500 text-center block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline 
                                  focus:outline-none text-white text-xs py-3 px-4 rounded font-bold" href={bucket.location} target="_blank">Mark Complete</button>

              <button onClick={()=>onButtonClick(bucket.id)} class="w-full bg-red-300 hover:bg-red-500 text-center block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline 
                                  focus:outline-none text-white text-xs py-3 px-4 rounded font-bold" href={bucket.location} target="_blank">Delete</button>

          </div>
          
        </div>
      
    );
}

export default Bucket;