
 
  const nnModel = await trainNeuralNetwork(
    trainTensors.features,
    trainTensors.labels,
    50
  );
  
  console.log("\n=== Neural Network Model ===");
  
  // Evaluate neural network model
  const nnMetrics = await evaluateModel(
    nnModel,
    testTensors.features,
    testTensors.labels
  );
  
  // Determine which model performed better
  const bestModel = logisticMetrics.f1Score > nnMetrics.f1Score ? 
    { model: logisticModel, name: "Logistic Regression" } : 
    { model: nnModel, name: "Neural Network" };

  console.log(`\nBest performing model: ${bestModel.name}`);
  
  // Get feature names (excluding the target variable)
  const sampleFeatures = {...normalizedTrainData[0]};
  delete sampleFeatures.churned;
  const featureNames = Object.keys(sampleFeatures);
  
  // Analyze feature importance for the best model
  const featureImportance = await analyzeFeatureImportance(bestModel.model, featureNames);
  
  // Generate business insights
  generateBusinessInsights(normalizedTestData, logisticMetrics, featureImportance);
  
  console.log("\n=== Deployment Considerations ===");
  console.log("1. Implement real-time churn prediction API using TensorFlow.js");
  console.log("2. Create customer risk dashboards for customer success teams");
  console.log("3. Set up automated alerts for high-risk customers");
  console.log("4. Develop targeted intervention strategies based on risk factors");
  console.log("5. Establish a feedback loop to continuously improve the model");
}

// Run the main function
main().catch(error => {
  console.error("An error occurred:", error);
});
