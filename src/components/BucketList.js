import Bucket from "./Bucket";

const BucketList = ({buckets,onBucketUpdate}) =>{

    const bucketComponents = buckets.map(bucket => {
        return(
            <Bucket bucket={bucket} key={bucket.id} onButtonClick = {onBucketUpdate}/>
        )
    })

    return(
        <div class="container mx-auto ">
        <div class="flex flex-wrap">
            
            {bucketComponents}
        </div>
        </div>
    )



}

export default BucketList;