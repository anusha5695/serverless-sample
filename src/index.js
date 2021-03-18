const transform = (sourceStructure) => {
  console.log("Source structure:", JSON.stringify(sourceStructure) );
  transformedStructure = {
    ...sourceStructure,
    transformed: true,    
 } 
 console.log("Transformed structure:", JSON.stringify(transformedStructure));
  return transformedStructure;
};

transform({name: 'sample', age: 15});