var array = [ 9, 4, 5, 6, 12, 2 ];

function bubbleSort(arr){
  var endPosOfUnsortedSectionOfArray = arr.length;
  var valueHolder = null;
  do {
    for( var i = 1; i < arr.length; i++ ){
      console.log( arr );
      if( arr[ i ] < arr[ i - 1 ] ){
        valueHolder = arr[ i - 1 ];
        arr[ i - 1 ] = arr[ i ];
        arr[ i ] = valueHolder;
      }
    }
    endPosOfUnsortedSectionOfArray--;
  } while ( endPosOfUnsortedSectionOfArray > 0 );
  return null;
}

var sorted = bubbleSort(array);
console.log( sorted );