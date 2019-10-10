/* Method that checks whether a props is empty 
prop can be an object, string or an array */
import React from "react";

const isEmpty = (prop) => (
    prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  );


  const withNull = (propName, NullComponent) => (NormalComponent) => {
      return function(props)
        {
          const propValue = props[propName];
          if(isEmpty(propValue)){
            return <NullComponent {...props} />
          } 

          return <NormalComponent {...props} />;
        }
  } 

  export default withNull;