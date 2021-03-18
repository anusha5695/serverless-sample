const transform = (sourceStructure) => {
  console.log("Source structure:", JSON.stringify(sourceStructure) );
  transformedStructure = {
    ...sourceStructure,
    transformed: true,    
 } 
 console.log("Transformed structure:", JSON.stringify(transformedStructure));
  return transformedStructure;
};

module.exports = {
    transform: transform
};


