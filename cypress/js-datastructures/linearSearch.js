function linearSearch(arr, val){
    //
    
    for(let i = 0; i <= arr.length; i++){
        
        if (arr[i] === val) {
            console.log("found the index "+ i );
            return i
        }
    }

    return -1

  }


  linearSearch([10,29,12,44,1,424,542,3],1)